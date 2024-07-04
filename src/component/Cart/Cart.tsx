import React, { useState } from 'react';
import './Cart.scss';
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "../Button/Button";
import SliderNew from "../Home/SliderNew";

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            description: "Men's Short-Sleeve Running Top",
            color: "Ashen Slate/Cobalt Bliss",
            size: "L",
            quantity: 1,
            price: 3895.00,
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6244746e-1606-4df9-81d8-f8a812fba677/paris-saint-germain-essential-football-t-shirt-QhQL0Z.png"
        },
        {
            id: 2,
            name: "Nike Air Max 97 SE",
            description: "Men's Shoes",
            color: "Flat Pewter/Light Bone/Black/White",
            size: "8",
            quantity: 1,
            price: 16995.00,
            image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d6c5f9e-06be-478b-a26a-0f389579253f/ja-1-ep-basketball-shoes-XncH16.png"
        }
    ]);

    const incrementQuantity = ({id}: { id: any }) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decrementQuantity = ({id}: { id: any }) => {
        setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
    };

    const removeItem = ({id}: { id: any }) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <>
            <div className="cart-container">
                <div className="cart-content">
                    <div className="bag">
                        <div className="free-delivery">
                            <span>Free Delivery</span>
                            <p>Applies to orders of $ 14 000.00 or more. <a href="#">View details</a></p>
                        </div>
                        <h2>Bag</h2>
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p>{item.color}</p>
                                    <p>Size: {item.size}</p>
                                    <div className="quantity-control">
                                        <button onClick={() => decrementQuantity({id: item.id})}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => incrementQuantity({id: item.id})}>+</button>
                                    </div>
                                    <p>MRP: $ {item.price.toFixed(2)}</p>
                                </div>
                                <div className="item-actions">
                                    <button className="favorite"><IoIosHeartEmpty /></button>
                                    <button className="delete" onClick={() => removeItem({id: item.id})}><AiOutlineDelete /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="summary">
                        <h2>Summary</h2>
                        <div className="summary-details">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span>$ {calculateSubtotal()}</span>
                            </div>
                            <div className="delivery">
                                <span>Estimated Delivery & Handling</span>
                                <span>Free</span>
                            </div>
                            <div className="total">
                                <span>Total</span>
                                <span>$ {calculateSubtotal()}</span>
                            </div>
                            <Button title={"Member Checkout"} isBlack />
                        </div>
                    </div>
                </div>
                <div className="favourites">
                    <h2>Favourites</h2>
                    <p>There are no items saved to your favourites.</p>
                </div>
            </div>
            <SliderNew />
        </>
    );
};

export default Cart;
