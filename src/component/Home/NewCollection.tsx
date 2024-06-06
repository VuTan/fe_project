import React from 'react';
import './NewCollection.scss';

const NewCollection: React.FC = () => {
    return (
        <div className="new-collection-section">
            <h2 className="section-title">Bộ sưu tập mới</h2>
            <div className="images">
                <img src={require('./image1.png')} alt="Create the Future 1" className="collection-image" />
                <img src={require('./image2.png')} alt="Create the Future 2" className="collection-image" />
            </div>
            <div className="explore">
                <h2>KHÁM PHÁ THÊM</h2>
                <p>Khám phá thêm những sản phẩm chất lượng mà 2handtropical đang cung cấp</p>
                <button onClick={() => window.location.href='https://yourshoplink.com'}>Đến cửa hàng</button>
            </div>
        </div>
    );
};

export default NewCollection;
