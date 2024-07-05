import React, { useState } from 'react';
import './FavouriteProduct.scss';
import SliderNew from "../Home/SliderNew";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const FavouriteProduct: React.FC = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [favourites, setFavourites] = useState([true, true]); // Mảng giữ trạng thái yêu thích của mỗi sản phẩm

    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
        if (!isEditMode) {
            setFavourites(favourites.map(() => true)); // Khi vào chế độ chỉnh sửa, tất cả các trái tim trở thành màu đỏ
        }
    };

    const handleHeartClick = (index: number) => {
        const newFavourites = [...favourites];
        newFavourites[index] = !newFavourites[index];
        setFavourites(newFavourites);
    };

    return (
        <>
            <div className="favourite-product">
                <h1>{isEditMode ? 'Manage Your Favourites' : 'Favourites'}</h1>
                <button className="edit-button" onClick={handleEditClick}>
                    {isEditMode ? 'Done' : 'Edit'}
                </button>
                <div className="favorite-items">
                    {[
                        {
                            id: 1,
                            name: 'Air Jordan 1 Low',
                            type: "Women's Shoes",
                            price: '3,239,000đ',
                            imgSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d6c5f9e-06be-478b-a26a-0f389579253f/ja-1-ep-basketball-shoes-XncH16.png'
                        },
                        {
                            id: 2,
                            name: 'Nike Downshifter 13',
                            type: "Men's Road Running Shoes",
                            price: '2,069,000đ',
                            imgSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d6c5f9e-06be-478b-a26a-0f389579253f/ja-1-ep-basketball-shoes-XncH16.png'
                        }
                    ].map((item, index) => (
                        <div className="favorite-item" key={item.id}>
                            <img src={item.imgSrc} alt={item.name}/>
                            <div className="item-details">
                                <h2>{item.name}</h2>
                                <p>{item.type}</p>
                                <p className="price">{item.price}</p>
                                <button className="select-size">Select Size</button>
                                {isEditMode && (
                                    <div className="heart-icon" onClick={() => handleHeartClick(index)}>
                                        {favourites[index] ? <IoIosHeart className="heart-filled"/> :
                                            <IoIosHeartEmpty/>}
                                    </div>
                                )}
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