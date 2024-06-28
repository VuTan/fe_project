import React, {useEffect} from 'react';
import "./NotFound.scss";
import {useNavigate} from "react-router-dom";

 function NotFound() {

     const navigate = useNavigate()
     useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 2000)
     }, []);

    return (
        <div className="not-found">
            <h1 className={"not-found-h1"}>Oops! Trang bạn tìm kiếm không tồn tại.</h1>
            <p className={"not-found-p"}>Có thể bạn đã nhập sai URL hoặc trang đã bị xóa.</p>
        </div>
    );
}

export default NotFound;