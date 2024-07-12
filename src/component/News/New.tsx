import React, {useEffect, useState} from 'react';
import './News.scss';
import {fetchAllNews} from "../../service/NewsService";
import {News} from "../../models/News.modal";
import {Link} from "react-router-dom";

const New: React.FC = () => {
    const [newsList, setNewsList] = useState<News[]>()
    useEffect(() => {
        getNews();
    }, []);
    const getNews = async () => {
        let res = await fetchAllNews();
        if (res && res.data.length > 0) {
            setNewsList(res.data);
        }
    };

    return (
        <div className="news">
            {newsList && newsList.length > 0
                && newsList.map((news) => {
                    return (<Link className="news-article" to={news.link}>
                        <img src={news.thumbnail} alt={news.title} className="news-article__image"/>
                        <div className="news-article__details">
                            <h3 className="news-article__title">{news.title}</h3>
                            <p className="news-article__location">{news.date}</p>
                        </div>
                    </Link>);
                })}
        </div>
    );
}

export default New;
