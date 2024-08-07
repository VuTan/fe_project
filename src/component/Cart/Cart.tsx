import React,{useEffect, useState} from 'react';
import './Cart.scss';

import {IoIosHeart, IoIosHeartEmpty} from "react-icons/io";
import {AiOutlineDelete} from "react-icons/ai";
import Button from "../Button/Button";
import SliderNew from "../Home/SliderNew";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {decrementQuantity, deleteProduct, getTotals, incrementQuantity, clearCart} from "../../redux/cart.reducers";
import {buyProduct, convertToProduct, formatPriceVND} from "../../models/Product.modal";
import CheckoutPopup from './CheckoutPopup';
import {addFavorite, removeFavorite} from "../../redux/favorite.reducers";
import {useGetProductByIdQuery} from "../../service/ProductService";
import {useParams} from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const favorite = useSelector((state: RootState) => state.favorite)
    const dispatch = useDispatch()
    const {id} = useParams()

    const {data} = useGetProductByIdQuery({id: id})
    const [showPopup, setShowPopup] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        phone: '',
        email: '',
        address: ''
    });

    const handleDelete = (product: buyProduct) => {
        dispatch(deleteProduct(product));
    };

    const decrement = (product: buyProduct) => {
        dispatch(decrementQuantity(product));
    };

    const increment = (product: buyProduct) => {
        dispatch(incrementQuantity(product));
    };

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const formatterVND = new Intl.NumberFormat('vi-VN', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    const formatterVNDSymbol = (price: number) => {
        return formatterVND.format(price) + " đ";
    };

    const handleCheckout = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        document.body.style.overflow = 'auto';
    };

    const handleSubmit = () => {

        console.log('Thông tin khách hàng:', customerInfo);
        dispatch(clearCart());
        setShowPopup(false);
    };
    return (
        <>
            <div className="cart-container">
                <div className="cart-content">
                    <div className="bag">
                        <div className="free-delivery">
                            <span>Free Delivery</span>
                            <p>Applies to orders of $14.000
                            </p>
                        </div>
                        <h2>Bag</h2>
                        {cart.cartArr.length === 0 ? (
                            <h1>No product</h1>
                        ) : (
                            cart.cartArr.map((product) => (
                                <div className="cart-item" key={product.id}>
                                    <div>
                                        <img
                                            src={product.main_img_src}
                                            alt={product.Name}
                                        />
                                    </div>
                                    <div className="item-details">
                                        <h3>{product.Name}</h3>
                                        <p>{product.Type}</p>
                                        <p>Size: {product.sizeBuy}</p>
                                        <div className="quantity-control">
                                            <button onClick={() => decrement(product)}>-</button>
                                            <span>{product.quantity}</span>
                                            <button onClick={() => increment(product)}>+</button>
                                        </div>
                                        <p>MRP: {formatterVNDSymbol(product.Price)}</p>
                                    </div>
                                    <div className="item-actions">
                                        <button className="favorite" onClick={() => {
                                            const isFavorite = favorite.favArr.some(index => index.id === product.id); // Use === for strict comparison
                                            if (isFavorite) {
                                                dispatch(removeFavorite(convertToProduct(product)))
                                            } else {
                                                dispatch(addFavorite(convertToProduct(product)))
                                            }
                                        }}>
                                            {favorite.favArr.some(item => item.id === product.id) ? (<IoIosHeart/>) : (
                                                <IoIosHeartEmpty/>)}
                                        </button>
                                        <button className="delete" onClick={() => handleDelete(product)}>
                                            <AiOutlineDelete/>
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="summary">
                        <h2>Summary</h2>
                        <div className="summary-details">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span>{formatPriceVND(cart.cartTotalAmount)}</span>
                            </div>
                            <div className="delivery">
                                <span>Estimated Delivery & Handling</span>
                                <span>Free</span>
                            </div>
                            <div className="total">
                                <span>Total</span>
                                <span>{formatPriceVND(cart.cartTotalAmount)}</span>
                            </div>
                            <Button title={"Member Checkout"} isBlack onClick={handleCheckout}/>
                        </div>
                    </div>
                </div>
                <div className="favourites">
                    <h2>Favourites</h2>
                    <p>There are no items saved to your favourites.</p>
                </div>
            </div>

            <SliderNew/>

            {showPopup && (
                <CheckoutPopup
                    customerInfo={customerInfo}
                    setCustomerInfo={setCustomerInfo}
                    handleSubmit={handleSubmit}
                    handleClosePopup={handleClosePopup}
                    clearCart={clearCart}/>
            )}
        </>
    );
};

export default Cart;