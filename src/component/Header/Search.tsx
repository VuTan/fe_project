import React, { useState } from 'react';
import './Search.scss';
import './Header.scss';
import { FiSearch } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { Product } from '../../models/Product.modal';
import { fetchProductById } from '../../service/ProductService';
import { useParams } from 'react-router-dom';

const Search: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { t } = useTranslation('header');
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const { id } = useParams<{ id?: string }>();

    const handleSearch = async (searchTerm: string) => {
        console.log('Search term:', searchTerm);
        if (!searchTerm.trim()) {
            setSearchResults([]);
            return;
        }

        let res = await fetchProductById(id);
        if (res && res.data) {
            const filteredResults = res.data.filter((result: Product) =>
                result.Name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredResults);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
        handleSearch(term);
    };

    return (
        <div className="search">
            <input
                className="search-input"
                type="text"
                placeholder={t('header-show.search')}
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={() => handleSearch(searchTerm)}>
                <FiSearch />
            </button>
            <div className={`search-results ${searchResults.length > 0 ? '-open' : ''}`}>
                {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                        <div className="search-result-item" key={result.id}>
                            <img src="#" alt="" />
                            <div>
                                <h3>{result.Name}</h3>
                                <p>{result.Type}</p>
                                <p>{result.Price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">No results found.</div>
                )}
            </div>
        </div>
    );
};

export default Search;
