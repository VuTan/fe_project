import React from 'react';
import './NewCollection.scss';

const NewCollection: React.FC = () => {
    return (

        <div className="new-collection-section">
            <h2 className="section-title">Bộ sưu tập mới</h2>
            <div className="images">
                <img src={require('./image1.png')} alt="Create the Future 1" className="collection-image"/>
                <img src={require('./image2.png')} alt="Create the Future 2" className="collection-image"/>
            </div>
            <div className="explore">
                <h2>KHÁM PHÁ THÊM</h2>
                <p>Khám phá thêm những sản phẩm chất lượng mà 2handtropical đang cung cấp</p>
                <button onClick={() => window.location.href = 'https://yourshoplink.com'}>Đến cửa hàng</button>
            </div>

            <h2 className="section-title">Danh mục sản phẩm</h2>
            <div className="product-categories">
                <div className="category">
                    <img src={require('./im1.png')} alt="Nam" className="category-image"/>
                    <button className="category-button">Nam</button>
                </div>
                <div className="category">
                    <img src={require('./im2.png')} alt="Thời Trang Nữ" className="category-image"/>
                    <button className="category-button">Thời Trang Nữ</button>
                </div>
                <div className="category">
                    <img src={require('./im3.png')} alt="Unisex" className="category-image"/>
                    <button className="category-button">Unisex</button>
                </div>
            </div>
        </div>

    );
};

export default NewCollection;
