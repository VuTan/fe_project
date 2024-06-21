import React from 'react';
import './Cart.scss';
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SliderNew from "../Home/SliderNew";
const Cart = () => {
    return (
        <>
            <Header/>
            <div className="cart-container">
                <div className="cart-content">
                    <div className="bag">
                        <div className="free-delivery">
                            <span>Free Delivery</span>
                            <p>Applies to orders of ₹ 14 000.00 or more. <a href="#">View details</a></p>
                        </div>
                        <h2>Bag</h2>
                        <div className="cart-item">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6244746e-1606-4df9-81d8-f8a812fba677/paris-saint-germain-essential-football-t-shirt-QhQL0Z.png" alt="Nike Dri-FIT ADV TechKnit Ultra"/>
                            <div className="item-details">
                                <h3>Nike Dri-FIT ADV TechKnit Ultra</h3>
                                <p>Men's Short-Sleeve Running Top</p>
                                <p>Ashen Slate/Cobalt Bliss</p>
                                <p>Size: L</p>
                                <p>Quantity: 1</p>
                                <p>MRP: ₹ 3 895.00</p>
                            </div>
                            <div className="item-actions">
                                <button className="favorite"><IoIosHeartEmpty/></button>
                                <button className="delete"><AiOutlineDelete/></button>
                            </div>
                        </div>
                        <div className="cart-item">
                            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d6c5f9e-06be-478b-a26a-0f389579253f/ja-1-ep-basketball-shoes-XncH16.png" alt="Nike Air Max 97 SE"/>
                            <div className="item-details">
                                <h3>Nike Air Max 97 SE</h3>
                                <p>Men's Shoes</p>
                                <p>Flat Pewter/Light Bone/Black/White</p>
                                <p>Size: 8</p>
                                <p>Quantity: 1</p>
                                <p>MRP: ₹ 16 995.00</p>
                            </div>
                            <div className="item-actions">
                                <button className="favorite"><IoIosHeartEmpty/></button>
                                <button className="delete"><AiOutlineDelete/></button>
                            </div>
                        </div>
                    </div>
                    <div className="summary">
                        <h2>Summary</h2>
                        <div className="summary-details">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span>₹ 20 890.00</span>
                            </div>
                            <div className="delivery">
                                <span>Estimated Delivery & Handling</span>
                                <span>Free</span>
                            </div>
                            <div className="total">
                                <span>Total</span>
                                <span>₹ 20 890.00</span>
                            </div>
                            <Button title={"Member Checkout"} isBlack/>
                        </div>
                    </div>
                </div>
                <div className="favourites">
                    <h2>Favourites</h2>
                    <p>There are no items saved to your favourites.</p>
                </div>
            </div>
            <SliderNew/>
            <Footer/>
        </>
    );
};

export default Cart;
