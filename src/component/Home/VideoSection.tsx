import React, { useState, useEffect, useRef } from 'react';
import './VideoSection.css';

const VideoSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isEnded, setIsEnded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.onended = () => {
                setIsPlaying(false);
                setIsEnded(true);
            };
        }
    }, []);

    const handlePlay = () => {

        const video = videoRef.current;
        if (video) {
            if (isPlaying) {
                video.pause();
            } else {
                if (isEnded) {
                    video.currentTime = 0;
                    setIsEnded(false);
                }
                video.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="container">
            <h2 className="section-title">2handtropcial tvc</h2>
            <div className="video-section">
                <video ref={videoRef} id="video" className="main-video" poster="">
                    <source src="/videos/your_video.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="play-button" onClick={handlePlay}>
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {isPlaying ? (
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="white"/>
                        ) : (
                            <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                        )}
                    </svg>
                </div>
            </div>
            <div className="text-section">
                <h1>SỰ LỰA CHỌN HÀNG ĐẦU</h1>
                <p>Cùng 2handtropical khám phá xem xu hướng thời trang hiện tại đang là gì. Và những nhãn hàng nào đang
                    là sự lựa chọn hàng đầu của những tín đồ thời trang.</p>
                <button onClick={() => window.location.href = 'https://yourshoplink.com'}>Đến cửa hàng</button>
            </div>
        </div>
    );
};

export default VideoSection;
