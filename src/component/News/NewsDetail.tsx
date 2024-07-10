import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import newsData from './newsData';
import './NewDetail.scss';
import { IoMdArrowRoundBack } from "react-icons/io";

const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const news = newsData.find(n => n.id === parseInt(id as string, 10));

    if (!news) {
        return <div>News item not found</div>;
    }

    return (
        <div className="news-detail">
            <div className={"header"}>
                <span className="date">July 6, 2024</span>
                <span className="share">
          <span>Share</span>
        </span>
            </div>
            <main>
                <img src={news.image} alt={news.title} className="news-detail__image" />
                <h1 className="news-detail__title">{news.title}</h1>
                <p className="news-detail__department">{news.department}</p>
                <p className="news-detail__location">{news.location}</p>
                <div className="news-detail__details">
                    {news.details.map((detail, index) => (
                        <div key={index}>
                            <h2>{detail.heading}</h2>
                            <p>{detail.content}</p>
                        </div>
                    ))}
                </div>
                <button className="news-detail__back-button" onClick={() => navigate(-1)}><IoMdArrowRoundBack/></button>
            </main>
        </div>
    );
};

export default NewsDetail;
