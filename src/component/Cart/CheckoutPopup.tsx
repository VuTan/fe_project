import React from 'react';
import './CheckoutPopup.scss';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CustomerInfoPopupProps {
    customerInfo: {
        name: string;
        phone: string;
        email: string;
        address: string;
    };
    setCustomerInfo: React.Dispatch<React.SetStateAction<{
        name: string;
        phone: string;
        email: string;
        address: string;
    }>>;
    handleSubmit: () => void;
    handleClosePopup: () => void;
    clearCart: () => void; // Thêm clearCart vào đây
}

const CheckoutPopup: React.FC<CustomerInfoPopupProps> = ({ customerInfo, setCustomerInfo, handleSubmit, handleClosePopup, clearCart }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCustomerInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleFormSubmit = () => {
        handleSubmit();
        toast.success("Order placed successfully!", {
            position: "bottom-left"
        });
        clearCart(); // Xóa giỏ hàng
        handleClosePopup();
    }

    return (
        <div className="popup-cart-overlay" onClick={handleClosePopup}>
            <div className="popup-cart-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={handleClosePopup}>&times;</span>
                <h2>Billing Information</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleFormSubmit();
                }}>
                    <div>
                        <label>Full Name</label>
                        <input className={"cart-input"}
                            type="text"
                            name="name"
                            value={customerInfo.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input className={"cart-input"}
                            type="text"
                            name="phone"
                            value={customerInfo.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input className={"cart-input"}
                            type="email"
                            name="email"
                            value={customerInfo.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Address</label>
                        <input className={"cart-input"}
                            type="text"
                            name="address"
                            value={customerInfo.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <Button title={"Checkout"} isBlack type="submit" />
                </form>
            </div>
        </div>
    );
};

export default CheckoutPopup;