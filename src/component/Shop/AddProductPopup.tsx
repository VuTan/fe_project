// src/AddProductPopup.tsx
import React, {useEffect, useState} from 'react';
import './AddProductPopup.scss';

interface AddProductPopupProps {
    show: boolean;
    onClose: () => void;
}

const AddProductPopup: React.FC<AddProductPopupProps> = ({ show, onClose }) => {

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show]);

    if (!show) return null;

    return (
        <div className="popup-overlayy" onClick={onClose}>
            <div className="popup-contentt" onClick={(e) => e.stopPropagation()}>
                <form className="popup-form">
                <h4 className="popup-title">Add Product</h4>
                    <label className="popup-label">
                        Title
                        <input className="popup-input" type="text" placeholder="Title"/>
                    </label>
                    <label className="popup-label">
                        Category
                        <select className="popup-select">
                            <option value="">All Category</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Footwear">Footwear</option>
                            <option value="Clothes">Clothes</option>
                        </select>
                    </label>
                    <label className="popup-label">
                        Description
                        <textarea className="popup-textarea" placeholder="Description ..."/>
                    </label>
                    <label className="popup-label">
                        Product Date
                        <input className="popup-input" type="date"/>
                    </label>
                    <label className="popup-label">
                        Price
                        <input className="popup-input" type="number" placeholder="Price"/>
                    </label>
                    <label className="popup-label">
                        For this product
                        <select className="popup-select">
                            <option value="">-- Gender --</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Children">Children</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <label className="popup-label">
                        Size
                        <select className="popup-select">
                            <option value="">Size</option>
                            <option value="SM">SM</option>
                            <option value="MD">MD</option>
                            <option value="LG">LG</option>
                            <option value="XL">XL</option>
                            {/* Add more sizes as needed */}
                        </select>
                    </label>
                    <div className="popup-buttons">
                        <button type="button" className="popup-button add-btn">Add Product</button>
                        <button type="button" className="popup-button save-btn">Save Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductPopup;
