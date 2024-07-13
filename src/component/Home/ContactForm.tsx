import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.scss';

const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Kiểm tra xem tất cả các trường đã được điền đầy đủ chưa
        if (!formState.name || !formState.email || !formState.subject || !formState.message) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }

        emailjs.send(
            'service_sbkrluo', // Thay thế bằng ID dịch vụ của bạn
            'template_8sp1x6t', // Thay thế bằng ID template của bạn
            formState,
            'rG0d7NPrOAJL1osIH' // Thay thế bằng Public Key của bạn
        ).then((result) => {
            console.log(result.text);
            alert("Email đã được gửi thành công!");

            // Reset lại form sau khi gửi thành công
            setFormState({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        }, (error) => {
            console.log(error.text);
            alert("Có lỗi xảy ra khi gửi email.");
        });
    };

    return (
        <div className="contact-form-container container mt-5">
            <h2 className="mb-4">LIÊN HỆ CHÚNG TÔI</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tên Của Bạn"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email của Store (21130219@st.hcmuaf.edu.vn)"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tiêu Đề"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <textarea
                        className="form-control"
                        rows={5}
                        placeholder="Nội Dung"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-warning">Gửi Phản Hồi</button>
            </form>
        </div>
    );
};

export default ContactForm;
