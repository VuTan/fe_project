import React, {useEffect, useState} from "react";
import "./ProductFilter.scss"
import {useTranslation} from "react-i18next";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {formatPriceVND} from "../../../models/Product.modal";

interface ChildProps {
    onQueryChange: (newQuery: string) => void;
}

const ProductFilter: React.FC<ChildProps> = ({onQueryChange}) => {
    const categories = ["Road Running", "Golf", "Basketball", "Football", "Tennis", "Slides", "Sandal"]
    const genders = ["Nam", "Nữ", "Nam và Nữ"]
    const [selectCategory, setSelectCategory] = useState<string>("")
    const [selectGender, setSelectGender] = useState("")
    const [range, setRange] = useState({start: 0, end: 100});
    const {t} = useTranslation('productfitler');

    useEffect(() => {
        let reusult;
        let type = "";
        if (selectGender) {
            switch (selectGender) {
                case 'Nam':
                    type = "Men's ";
                    break;
                case 'Nữ':
                    type = "Women's ";
                    break;
            }
        }
        if (selectCategory) {
            type += selectCategory
        }
        reusult = `Price_gte=${range.start * 100000}&Price_lte=${range.end * 100000}${type ? `&Type_like=${type}` : ''}`;
        onQueryChange(reusult);
    }, [range, selectGender, selectCategory]);
    const handleCategoryChange = (category: string) => {
        if (category == selectCategory) {
            return setSelectCategory("")
        }
        setSelectCategory(category)
    }
    const handleGenderChange = (gender: string) => {
        setSelectGender(gender)
    }
    const handlePriceRange = (value: number | number[]) => {
        setRange({start: (value as number[])[0], end: (value as number[])[1]});
    };

    return (
        <div className="sidebar">
            <h3 className={"sidebar-h3"}>{t('product filter.existing products')}</h3>
            <div className="category-buttons">
                <h4 className="sidebar-h4">Loại</h4>
                {categories.map((category) => (
                    <label className="check">
                        <input
                            type="checkbox"
                            checked={selectCategory === category}
                            onChange={() => handleCategoryChange(category)}
                        />
                        {category}
                    </label>
                ))}
            </div>
            <h4 className={"sidebar-h4"}>{t('product filter.gender')}</h4>
            {genders.map((gender) => (
                <label className="check">
                    <input
                        type="checkbox"
                        checked={selectGender === gender}
                        onChange={() => handleGenderChange(gender)}
                    />
                    {gender}
                </label>
            ))}
            <h4 className={"sidebar-h4"}>{t('product filter.Price Range')}</h4>
            <br/>
            <div className="price-slider">
                <p className='start'>{formatPriceVND(range.start * 100000)}</p>
                <p className='end'>{formatPriceVND(range.end * 100000)}</p>
            </div>
            <Slider range allowCross={false} defaultValue={[range.start, range.end]}
                    onChange={(event) => handlePriceRange(event)}/>

        </div>)
}

export default ProductFilter;

const FilterTest = () => {

}