import React from 'react';
import './News.scss';

interface NewsArticle {
    image: string;
    title: string;
    department: string;
    location: string;
}

const newsData: NewsArticle[] = [
    {
        image: 'https://s3-alpha-sig.figma.com/img/e6fe/9eeb/d03ba70cd9259771014ac7d6ea6cfbc2?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m62ep6hqSaRJY1h4rsnSIzw35f1yfGpJ3Kc-WQS2AR7yxjI-EsELpqoZCHYW8PiNU48Nfc4guNLN~u-5iqnu~jIiuWgSR6-hq46B9Xt9DGeeR0SbTH0E-WQesVf3gzUWW0RNQmrHttovS11vrGOt5RrnqIWMBfK9QrUZqnEfhETCfivKC4nbQJWD5J-gmeDWCnRSTXKq9u5hDBQ27mlDyxkEhmYP48fX9WrI91ZbXN92FkzBcXsxuf4iwkGLUy6SydDwfWc8ClrnxjZpRfNoA9g5oPXnbKMUnC1LWqdaepV9-Pa4U32KpKPLZBIDDymIVv32xSCyQbbponQVSrNOAA__',
        title: 'Korea - Distribution Center (Customer Service Center) Operations Associate (Icheon)',
        department: 'Supply Chain, Distribution & Logistics',
        location: 'Icheon, South Korea'
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/0094/fc97/153f3effaa88ef215b4874327b236b4b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RnBDmZiclC7fZlvUefiqSvguhVqByWzVqOGO0SgDpTolNIec5xXoKmIlvlEZFf024KdP8yDVtqajU0rSkqtc6nb33WUrOu7VKP0jGenNw20TrkRgqE0cVHDBqPqR6uqdo4vVx9706OTVBDk~8fNp1h20QH5Ihd3f1IjuXAI6RfDt0B4dv~SN~iE2DLZ2uISGCMv9M3n1BoxrFtmd7gJsJt7eigawZEJ-vGae2qGmn9kfYvZDaTVBJrdF0HaDx4v~ZPcZxtoiKzN8nS6tz~ULBrzyYzBHN7~6I58GeHpbyHSkbgeoVcf-QMuQrt7lgyj2zY-mClQqx~oLSoEq3LhzqQ__',
        title: 'Korea - Distribution Center (Customer Service Center) Operations Associate (Icheon)',
        department: 'Supply Chain, Distribution & Logistics',
        location: 'Icheon, South Korea'
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/121b/d0cc/5a65980a6940513ab78ff7ef5e4ce16f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dpDxlKzMc7P1BTJXelR7Jh~fYZH4qkUudcForNpVCBYFWArjZlkLDG6BeTT503T~~8GH0XhR1dFvp3EUMGx4PrC3w4WZTaqD4PoVHSiCpgpmyWqclmdXgLiqCCUYUA8F5F10hY33hc4BC23hWPYrk30N8IsB~wY0GRy0RSRjEevOrl2fmhsrPDQHH1ntVeC30LaodwPuBEg~VzTxcBDUw4Kguhn445v8lucx9i23s0H1LfUBcA4akMJrWznRKrxCauNK9Y2S~bUG8kXrj9f8Cc2s~Q4j4tJ5GIybSe73y1Geoln4-5TmiuNpD8MWg4aPup3xeuDNKYfGUAgpaIuCwg__',
        title: 'Infrastructure and End User Support Specialist',
        department: 'Technology',
        location: 'Melbourne, Victoria'
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/6350/6e3e/2daaed939a6027121560ee6a8224daf9?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YT9ev-YLX4X-aBBaz3xk3V7BbTdrKB995jEMGu3ttpn~QGImtvVRDQDMs5fSE9m4yzeXDekZ0xVnM9tqogI6JGrWs4ReXFdOCch-dHriF7b3RVgIkm~T2unpc6bM4iel4ePnGmB7ML5akjsxkCB~DaoFF0d1ZMGjsvahePQHGAtIF19FRM3EPTdAUBHISA8fqoetatpPbn7peuXroeDS6kO5sWN2MhRbbcnIrdYcbg5DSRHJqAQ3tEBl0GO36XFj9rpWwEw379n7qPPZAT-cftJ~vomVmQjyujGFMF~PyaV1O01OJoqTcIF3sv~0w6O3gBbb30l4bd7Udbo~KUUzlw__',
        title: 'Nike Memphis Employee Store Retail Sales Associate Full-Time ("Athlete")',
        department: 'Retail Stores',
        location: 'Memphis, Tennessee'
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/121b/d0cc/5a65980a6940513ab78ff7ef5e4ce16f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dpDxlKzMc7P1BTJXelR7Jh~fYZH4qkUudcForNpVCBYFWArjZlkLDG6BeTT503T~~8GH0XhR1dFvp3EUMGx4PrC3w4WZTaqD4PoVHSiCpgpmyWqclmdXgLiqCCUYUA8F5F10hY33hc4BC23hWPYrk30N8IsB~wY0GRy0RSRjEevOrl2fmhsrPDQHH1ntVeC30LaodwPuBEg~VzTxcBDUw4Kguhn445v8lucx9i23s0H1LfUBcA4akMJrWznRKrxCauNK9Y2S~bUG8kXrj9f8Cc2s~Q4j4tJ5GIybSe73y1Geoln4-5TmiuNpD8MWg4aPup3xeuDNKYfGUAgpaIuCwg__',
        title: 'Infrastructure and End User Support Specialist',
        department: 'Technology',
        location: 'Melbourne, Victoria'
    },
    {
        image: 'https://s3-alpha-sig.figma.com/img/996c/9f9d/fa7c8bb51f433d0c0fc196f341f86d0a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n5Pw4tj2Ous5a78ReJeJ3UKWUHQcdEMP~R5VKyKMy77mVlY0oGWHPZ7uRl1LxTRvrnsazAhY7IXKMn0BfpMKaza~roPAQAfRA58YoTNH3mT0r-wiaUI6pdu2SN8jKFkt1EZJZJ9siqI9-FZVB34epPKxuPGEKcHPgHROFz8fSwp0LmXbMwXkrP~6goX61zae3zEEDWVxOyE06ce4dpqurmBMdsUn3p8K80Xc8Zh2IAVmz8aSVeLdmUrZfkHuQL08gTeAJUD0skqCNUDvPmfj4ro2ZNAhRnfdDsNyd59f9nPtdZonJqV~g7vUpnRHvRrJ0DsdDQ8qDAFdPFvXVMTDkQ__',
        title: 'Finance Manager - Membership and Platforms',
        department: 'Finance & Accounting',
        location: 'Memphis, Tennessee'
    }
];

const News: React.FC = () => {
    return (
        <>
            <div className="news">
                {newsData.map((news, index) => (
                    <div key={index} className="news-article">
                        <img src={news.image} alt={news.title} className="news-article__image"/>
                        <div className="news-article__details">
                            <h3 className="news-article__title">{news.title}</h3>
                            <p className="news-article__department">{news.department}</p>
                            <p className="news-article__location">{news.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>

    );
}

export default News;
