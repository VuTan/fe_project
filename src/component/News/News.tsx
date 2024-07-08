import React from 'react';
import { Link } from 'react-router-dom';
import newsData from './newsData';
import './News.scss';

const News: React.FC = () => {
    return (
        <div className="news">
            {newsData.map((news) => (
                <Link key={news.id} to={`/news/${news.id}`} className="news-article">
                    <img src={news.image} alt={news.title} className="news-article__image"/>
                    <div className="news-article__details">
                        <h3 className="news-article__title">{news.title}</h3>
                        <p className="news-article__department">{news.department}</p>
                        <p className="news-article__location">{news.location}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default News;
