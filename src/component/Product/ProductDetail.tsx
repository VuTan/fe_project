import React, {useEffect, useState} from 'react';
import './ProductDetail.scss';
import {useParams} from "react-router-dom";
import {fetchProductById} from "../../service/ProductService";
import {Product} from "../../models/Product.modal";
import AsNavFor from "../Home/AsNavFor";

const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState<Product>()
    useEffect(() => {
        getProduct(id);
    }, []);

    const getProduct = async (id: string | undefined) => {
        let res = await fetchProductById(id);
        if (res && res.data[0]) {
            setProduct(res.data[0]);
        }
    };

    return (
        <>
            <div className="show-detail">
                <div className="image-grid">
                    {/*<AsNavFor/>*/}
                </div>
                <div className="details">
                    <h1>{product?.Name}</h1>
                    <p>{product?.Type}</p>
                    <p>{product?.Price}</p>
                    <p>{product?.describe}</p>
                    <div className="size-selector">
                        <h3>Select Size</h3>
                        <div className="sizes">
                            {product?.size.map((size) => (
                                <button key={size} className="size">EU {size}</button>
                            ))}
                        </div>
                    </div>
                    <button className="add-to-bag">Add to Bag</button>
                    <button className="favourite">Favourite</button>
                </div>
            </div>
            {/*<h3 className={"name-style"}>Explore the Nike Air Max 97 SE Men's Shoes</h3>*/}
            {/*<div className="frame">*/}
            {/*    <img src={"https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp"}*/}
            {/*         alt="Nike Air Max 97 SE worn"/>*/}
            {/*</div>*/}
            {/*<h3 className={"name-style"}>Originally designed for performance running, the full-length Max Air unit adds*/}
            {/*    soft cushioning.</h3>*/}
            {/*<div className="frame">*/}
            {/*    <img src={"https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp"}*/}
            {/*         alt="Nike Air Max 97 SE worn"/>*/}
            {/*</div>*/}
            {/*<h3 className={"name-style"}>The suede and synthetic leather upper with mesh underlays adds breathability*/}
            {/*    and durability.</h3>*/}
            {/*<div className="frame">*/}
            {/*    <img src={"https://zocker.vn/pic/Product/giay-chay-bo-zocker-ultra-light-xanh-den_2880_HasThumb.webp"}*/}
            {/*         alt="Nike Air Max 97 SE worn"/>*/}
            {/*</div>*/}
            {/*<h3 className={"name-style"}>Hidden lacing system was a first of its kind and delivers a streamlined*/}
            {/*    look.</h3>*/}
        </>
    )
}

export default ProductDetail;
