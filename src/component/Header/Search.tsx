import React, {useRef, useState} from 'react';
import './Search.scss';
import './Header.scss';
import {FiSearch} from 'react-icons/fi';
import {useTranslation} from 'react-i18next';
import {useNavigate, useParams} from 'react-router-dom';
import Tippy from "@tippyjs/react/headless";
import {useSearchProductQuery} from "../../service/ProductService";

const Search: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showResult, setShowResult] = useState(true);
    const {t} = useTranslation('header');
    const {id} = useParams<{ id?: string }>();

    const inputRef = useRef<HTMLInputElement>(null);

    const {data, isLoading} = useSearchProductQuery(searchTerm, {skip: !searchTerm});

    const navigate = useNavigate();
    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div className="search">
            <Tippy
                placement={"bottom"}
                visible={showResult && searchTerm.length > 0}
                onClickOutside={handleHideResult}
                interactive
                render={attrs => (
                    <div className={`search-results-open`}>
                        {!!searchTerm && data && data.length > 0 ? (
                            <>
                                {data.slice(0, 4).map((result) => (
                                    <div className="search-result-item" key={result.id}
                                         onClick={() => {
                                             navigate(`/shop/product/${result.id}`)
                                             setShowResult(false)
                                         }}>
                                        <div><img src={result.main_img_src} alt=""/></div>
                                        <div className={"item-text"}>
                                            <h3>{result.Name}</h3>
                                            <p>{result.Type}</p>
                                            <p>{result.Price}</p>
                                        </div>
                                    </div>
                                ))}
                                {4 < data.length && (
                                    <div className={"search-results-open-more"}>
                                        <a>
                                            Load More
                                        </a>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="no-results">No results found.</div>
                        )}
                    </div>
                )}
            >
                <input
                    ref={inputRef}
                    className="search-input"
                    type="text"
                    placeholder={t('header-show.search')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
            </Tippy>
            <button onClick={() => {
                setSearchTerm("");
                inputRef.current?.focus();
            }}>
            </button>

            <button>
                <FiSearch/>
            </button>
        </div>
    );
};

export default Search;
