import React, {useEffect, useState} from 'react';
import './Cart.scss';
import {IoIosHeart, IoIosHeartEmpty} from "react-icons/io";
import {AiOutlineDelete} from "react-icons/ai";
import Button from "../Button/Button";
import SliderNew from "../Home/SliderNew";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {clearCart, decrementQuantity, deleteProduct, getTotals, incrementQuantity} from "../../redux/cart.reducers";
import {buyProduct, convertToProduct, formatPriceVND} from "../../models/Product.modal";
import CheckoutPopup from './CheckoutPopup';
import {addFavorite, removeFavorite} from "../../redux/favorite.reducers";

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const favorite = useSelector((state: RootState) => state.favorite)
    const dispatch = useDispatch()
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

    const handleCheckout = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleSubmit = () => {
        // Xử lý logic thanh toán ở đây
        console.log('Thông tin khách hàng:', customerInfo);
        dispatch(clearCart()); // Gọi action clearCart để xóa giỏ hàng
        setShowPopup(false);
    };

    // const handleAddToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     if (data)
    //         dispath(addFavorite(data))
    //     setIsFavorite(true)
    // }
    // const handleRemoveFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     if (data)
    //         dispath(removeFavorite(data))
    //     setIsFavorite(false)
    // }

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
                        {cart.cartArr.length === 0 ? (
                            <h1>No product</h1>
                        ) : (
                            cart.cartArr.map((product) => (
                                <div className="cart-item" key={product.id}>
                                    <img
                                        src={product.main_img_src}
                                        alt={product.Name}
                                    />
                                    <div className="item-details">
                                        <h3>{product.Name}</h3>
                                        <p>{product.Type}</p>
                                        <p>Size: {product.sizeBuy}</p>
                                        <div className="quantity-control">
                                            <button onClick={() => decrement(product)}>-</button>
                                            <span>{product.quantity}</span>
                                            <button onClick={() => increment(product)}>+</button>
                                        </div>
                                        <p>MRP: {formatPriceVND(product.Price)}</p>
                                    </div>
                                    <div className="item-actions">
                                        <button className="favorite" onClick={() => {
                                            // Logic to handle favoriting the product
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
