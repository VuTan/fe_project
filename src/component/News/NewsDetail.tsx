import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import './NewDetail.scss';

const NewsDetail: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const navigate = useNavigate();

    return (
        <div className="news-detail">
            {/*//     <header>*/}
            {/*//         <span className="date">July 6, 2024</span>*/}
            {/*//         <span className="share">*/}
            {/*//   <span>Share</span>*/}
            {/*// </span>*/}
            {/*//     </header>*/}
            {/*//     <main>*/}
            {/*//         <img src={news.image} alt={news.title} className="news-detail__image" />*/}
            {/*//         <h1 className="news-detail__title">{news.title}</h1>*/}
            {/*//         <p className="news-detail__department">{news.department}</p>*/}
            {/*//         <p className="news-detail__location">{news.location}</p>*/}
            {/*//         <div className="news-detail__details">*/}
            {/*//             {news.details.map((detail, index) => (*/}
            {/*//                 <div key={index}>*/}
            {/*//                     <h2>{detail.heading}</h2>*/}
            {/*//                     <p>{detail.content}</p>*/}
            {/*//                 </div>*/}
            {/*//             ))}*/}
            {/*//         </div>*/}
            {/*//         <button className="news-detail__back-button" onClick={() => navigate(-1)}>Back</button>*/}
            {/*//     </main>*/}
        </div>
    );
};

export default NewsDetail;
