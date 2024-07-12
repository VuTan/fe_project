import React from 'react';
import './CustomerInfoPopup.scss';
import Button from '../Button/Button';

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
}

const CustomerInfoPopup: React.FC<CustomerInfoPopupProps> = ({ customerInfo, setCustomerInfo, handleSubmit, handleClosePopup }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCustomerInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="popup-overlay" onClick={handleClosePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={handleClosePopup}>&times;</span>
                <h2>Billing Information</h2>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <div>
                        <label>Họ tên</label>
                        <input
                            type="text"
                            name="name"
                            value={customerInfo.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Số điện thoại</label>
                        <input
                            type="text"
                            name="phone"
                            value={customerInfo.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={customerInfo.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Địa chỉ</label>
                        <input
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

export default CustomerInfoPopup;
