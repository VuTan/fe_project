import React, { useEffect } from 'react';
import './AddProductPopup.scss';
import {IoMdCloudUpload} from "react-icons/io";
import {Multiselect} from "multiselect-react-dropdown";
import {Product} from "../../models/Product.modal";

interface AddProductPopupProps {
    show: boolean;
    onClose: () => void;
}

const initialState: Omit<Product, "id" | "benefit"> = {
    Name: "",
    Type: "",
    describe: "",
    Price: 0,
    size: [],
    main_img_src: "",
    img_src: [],
}

const AddProductPopup: React.FC<AddProductPopupProps> = ({show, onClose}) => {
    const options = [{size: 36}, {size: 36.5}, {size: 37}, {size: 37.5}, {size: 38}, {size: 38.5}, {size: 39}, {size: 39.5}, {size: 40}, {size: 41},]
    const [image, setImage] = useState("")
    const [filename, setFileName] = useState("No selected file")
    const [formProduct, setFormProduct] = useState<Omit<Product, "id" | "benefit">>(initialState)
    const [selectedGender, setSelectedGender] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('no-scroll');
        } else {
            document.body.style.overflow = 'auto';
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
            document.body.style.overflow = 'auto';
        };

    }, [show]);
    useEffect(() => {
        console.log(formProduct)

    },);

    if (!show) return null;

    const handleChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setFileName(files[0].name);
            setFormProduct((prev) => ({...prev, main_img_src: image}));
            convertBase64(files[0])
                .then((base64) => {
                    setImage(base64);
                })
        }
    };

    const convertBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result as string);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    return (
        <div className="popup-add-overlayy" onClick={onClose}>
            <div className="popup-contentt" onClick={(e) => e.stopPropagation()}>
                <form className="popup-form">
                    <h4 className="popup-title">Add Product</h4>
                    <div className="content">
                        <div className="left-content"
                             onClick={() => (document.querySelector('.input-img') as HTMLElement)?.click()}>
                            <input className="input-img" type={"file"} accept={"image/*"} hidden
                                   onChange={handleChangeImg}/>
                            {image ? <img src={image} className={'img-result'} alt={filename}/> :
                                <IoMdCloudUpload size={60}/>}
                        </div>
                        <div className={"right-content"}>
                            <label className="popup-label">
                                Name
                                <input className="popup-input" type="text" placeholder="Title"
                                       value={formProduct.Name}
                                       onChange={(event) => setFormProduct((prev) => ({
                                           ...prev,
                                           Name: event.target.value
                                       }))}/>
                            </label>
                            <label className="popup-label">
                                Category
                                <select className="popup-select" value={selectedCategory}
                                        onChange={(event) => setSelectedCategory(event.target.value)}>
                                    <option value="">All Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Footwear">Footwear</option>
                                    <option value="Clothes">Clothes</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <label className="popup-label">
                        Description
                        <textarea className="popup-textarea" placeholder="Description ..." value={formProduct.describe}
                                  onChange={(event) => setFormProduct((prev) => ({
                                      ...prev,
                                      describe: event.target.value
                                  }))}/>
                    </label>
                    <label className="popup-label">
                        Price
                        <input className="popup-input" type="number" placeholder="Price"
                               value={formProduct.Price}
                               onChange={(event) => setFormProduct((prev) => ({
                                   ...prev,
                                   Price: +event.target.value
                               }))}/>
                    </label>
                    <label className="popup-label">
                        For this product
                        <select className="popup-select" value={selectedGender}
                                onChange={(event) => setSelectedGender(event.target.value)}>
                            <option value="">-- Gender --</option>
                            <option value="Men's">Men's</option>
                            <option value="Women's">Women's</option>
                            <option value="Both">Both</option>
                        </select>
                    </label>
                    <label className="popup-label">
                        Size
                        <Multiselect
                            options={options}
                            displayValue="size"
                            hidePlaceholder
                            placeholder="Select size"
                            selectedValues={formProduct.size.map(size => Object.assign({},{size}))}
                            optionValueDecorator={(option) => option + " EU"}
                            onSelect={(selectedList) => {
                                setFormProduct((prev) => ({
                                    ...prev,
                                    size: selectedList.map((option: { size: number }) => option.size)
                                }))
                            }}
                        />
                    </label>
                    <label className="popup-label">
                        Detailed image
                        <input className="popup-input" type="file" placeholder="Images..." multiple/>
                    </label>
                    <div className="popup-buttons">
                        <button type="button" className="popup-button add-btn">Add Product</button>
                        <button type="button" className="popup-button save-btn">Save Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductPopup;
