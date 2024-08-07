import React, {useState} from 'react';
import './FavouriteProduct.scss';
import SliderNew from "../Home/SliderNew";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Product} from "../../models/Product.modal";
import {removeFavorite} from "../../redux/favorite.reducers";
import {useNavigate} from "react-router-dom";

const FavouriteProduct: React.FC = () => {
    const favorite = useSelector((state: RootState) => state.favorite)
    const dispath = useDispatch();
    const navigate = useNavigate()

    const handleRemoveFavorite = (product: Product) => {
        dispath(removeFavorite(product))
    }
    return (
        <>
            <div className="favourite-product">
                <br/>
                <h1>Favourites</h1>
                <div className="favorite-items">
                    {favorite.favArr.map((product) => (
                        <div className="favorite-item" key={product.id} >
                            <img src={product.main_img_src} alt={product.Name} onClick={() => {
                                navigate(`/shop/product/${product.id}`)
                            }}/>
                            <div className="item-details">
                                <h2>{product.Name}</h2>
                                <p>{product.Type}</p>
                                <p className="price">{product.Price}</p>
                                <button className="select-size"
                                        onClick={() => handleRemoveFavorite(product)}>Unfavorite
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <SliderNew/>
        </>
    );
};

export default FavouriteProduct;