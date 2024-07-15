import React, {useEffect, useState} from 'react';
import './Cart.scss';
import {IoIosHeartEmpty} from "react-icons/io";
import {AiOutlineDelete} from "react-icons/ai";
import Button from "../Button/Button";
import SliderNew from "../Home/SliderNew";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {decrementQuantity, deleteProduct, getTotals, incrementQuantity, clearCart} from "../../redux/cart.reducers";
import {buyProduct} from "../../models/Product.modal";
import CheckoutPopup from './CheckoutPopup';
import Popup from "../Product/PopupDetailProduct";
import {useParams} from "react-router-dom";
import {useGetProductByIdQuery} from "../../service/ProductService";

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
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

    const handleOpenPopup = () => {
        setShowPopup(true);
        document.body.style.overflow = 'hidden';
        window.scrollTo({top: 0, behavior: 'smooth'})
    };

    const handleSubmit = () => {
        // Xử lý logic thanh toán ở đây
        console.log('Thông tin khách hàng:', customerInfo);
        dispatch(clearCart()); // Gọi action clearCart để xóa giỏ hàng
        setShowPopup(false);
    };

    return (
        <>
            <div className="cart-container">
                <div className="cart-content">
                    <div className="bag">
                        <div className="free-delivery">
                            <span>Free Delivery</span>
                            <p>Applies to orders of $ 14 000.00 or more.
                                <h6 className="details-show" onClick={handleOpenPopup}>More Detail</h6>
                                {showPopup && (
                                    <>
                                        <div onClick={(e) => {
                                            e.stopPropagation()
                                        }} className="popup">
                                            <div className="popup-content">
                                                <p className="close-button" onClick={handleClosePopup}>&times;</p>
                                                <Popup product={data}/>
                                            </div>
                                        </div>
                                    </>
                                )}
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
                                        <p>MRP: {product.Price}</p>
                                    </div>
                                    <div className="item-actions">
                                        <button className="favorite"><IoIosHeartEmpty/></button>
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
                                <span>{formatterVNDSymbol(cart.cartTotalAmount)}</span>
                            </div>
                            <div className="delivery">
                                <span>Estimated Delivery & Handling</span>
                                <span>Free</span>
                            </div>
                            <div className="total">
                                <span>Total</span>
                                <span>{formatterVNDSymbol(cart.cartTotalAmount)}</span>
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
