import React, {useEffect} from 'react';
import "./NotFound.scss";
import {useNavigate} from "react-router-dom";
import "../../i18n/i18n"
import {useTranslation} from 'react-i18next'

 function NotFound() {
    const { t } = useTranslation('notfound')
     // const navigate = useNavigate()
     // useEffect(() => {
     //    setTimeout(() => {
     //        navigate('/')
     //    }, 10000)
     // }, []);

    return (
        <div className="not-found">
            <h1 className={"not-found-h1"}>{t('aside filter.eror404')}</h1>
            <p className={"not-found-p"}>{t('aside filter.goback')}</p>
        </div>
    );
}

export default NotFound;