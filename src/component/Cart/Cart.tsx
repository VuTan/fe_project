import React from 'react';
import './Cart.scss';
import {IoIosHeartEmpty} from "react-icons/io";
import {AiOutlineDelete} from "react-icons/ai";
import Button from "../Button/Button";
import SliderNew from "../Home/SliderNew";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {deleteProduct} from "../../redux/Cart/reducers";
import {buyProduct} from "../../models/Product.modal";

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart)
    const dispath = useDispatch();
    const handleDelete = (product: buyProduct) => {
        dispath(deleteProduct(product))
    }

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

                        {cart.cartArr.length === 0 ? (<div></div>) : (cart.cartArr.map((product) => (
                            <div className="cart-item">
                                <img
                                    src={product.main_img_src}
                                    alt={product.Name}/>
                                <div className="item-details">
                                    <h3>{product.Name}</h3>
                                    <p>{product.Type}</p>
                                    <p>Size: {product.sizeBuy}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <br/>
                                    <p>MRP: {product.Price}</p>
                                </div>
                                <div className="item-actions">
                                    <button className="favorite"><IoIosHeartEmpty/></button>
                                    <button className="delete" onClick={() => handleDelete(product)}><AiOutlineDelete/>
                                    </button>
                                </div>
                            </div>)))}
                    </div>
                    <div className="summary">
                        <h2>Summary</h2>
                        <div className="summary-details">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span>$ 20 890.00</span>
                            </div>
                            <div className="delivery">
                                <span>Estimated Delivery & Handling</span>
                                <span>Free</span>
                            </div>
                            <div className="total">
                                <span>Total</span>
                                <span>$ 20 890.00</span>
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
        </>
    );
};

export default Cart;
