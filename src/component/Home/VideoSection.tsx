import React, { useState } from 'react';
import './VideoSection.css';

const VideoSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        const video = document.getElementById('video') as HTMLVideoElement;
        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                video.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="container">
            <div className="video-section">
                <video id="video" className="main-video" poster="">
                    <source src="/videos/your_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {!isPlaying && (
                    <div className="play-button" onClick={handlePlay}>
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                        </svg>
                    </div>
                )}
            </div>
            <div className="text-section">
                <h1>SỰ LỰA CHỌN HÀNG ĐẦU</h1>
                <p>Cùng 2handtropical khám phá xem xu hướng thời trang hiện tại đang là gì. Và những nhãn hàng nào đang là sự lựa chọn hàng đầu của những tín đồ thời trang.</p>
                <button onClick={() => window.location.href='https://yourshoplink.com'}>Đến cửa hàng</button>
            </div>
        </div>
    );
};

export default VideoSection;