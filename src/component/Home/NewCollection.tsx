import React from 'react';
import './NewCollection.scss';
import Button from "../Button/Button";

const NewCollection: React.FC = () => {
    return (
        <div className="new-collection-section">
            <h2 className="section-title">Bộ sưu tập mới</h2>
            <div className="images">
                <img src={require('../images/image1.png')} alt="Create the Future 1" className="collection-image"/>
                <img src={require('../images/image2.png')} alt="Create the Future 2" className="collection-image"/>
            </div>
            <div className="explore">
                <h2>KHÁM PHÁ THÊM</h2>
                <p>Khám phá thêm những sản phẩm chất lượng mà 2handtropical đang cung cấp</p>
                <Button title={"Đến cửa hàng"} isBlack/>
            </div>
        </div>
    );
};

export default NewCollection;
