import React, {Fragment, useEffect, useState} from 'react';
import './ShopPage.scss';
import CardProduct from "../Product/CardProduct";
import ReactPaginate from "react-paginate";
import ProductFilter from "./Filter/ProductFilter";
import SkeletonProduct from "../Product/SkeletonProduct";
import {useTranslation} from "react-i18next";
import AddProductPopup from "./AddProductPopup";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {useGetProductFilterPerPageQuery, useGetProductFilterQuery} from "../../service/ProductService";

interface Filter {
}


const ShopPage: React.FC = () => {

    const {t} = useTranslation('shoppage')

    const productPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState("");
    const [totalProduct, setTotalProduct] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSort, setSelectedSort] = useState<string>("");
    const [showPopup, setShowPopup] = useState(false);
    const userStorage = useSelector((state: RootState) => state.user);
    const [isAdmin, setIsAdmin] = useState(false)

    const [sortQuery, setSortQuery] = useState<string>("");
    const [filterQuery, setFilterQuery] = useState<string>("");
    const [query, setQuery] = useState<string>("")

    const {data: dataProductPerPage, isFetching} = useGetProductFilterPerPageQuery({
        query: query,
        page: currentPage,
        limit: productPerPage
    });
    const {data: productsLength} = useGetProductFilterQuery(query);

    useEffect(() => {
        window.scrollTo(0, 0)
        checkAdmin()
    }, []);

    useEffect(() => {
        if (sortQuery !== '') {
            setQuery(`${filterQuery}${sortQuery}`);
        } else {
            setQuery(filterQuery);
        }
    }, [sortQuery, filterQuery]);

    useEffect(() => {
        console.log(productsLength)
        if (productsLength) {
            setTotalProduct(productsLength.length);
        }
    }, [productsLength]);

    const checkAdmin = () => {
        if (userStorage.user && userStorage.user.email == "admin@123") {
            setIsAdmin(true);
        }
    }
    const handleQueryChange = (newQuery: string) => {
        setFilterQuery(newQuery);
    }


    const handleChangePage = (event: { selected: number }) => {
        setCurrentPage(event.selected + 1);
    };

    const handleAddProductClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleSortBy = (event: React.MouseEvent<HTMLUListElement>) => {
        const clickedElement = event.target as HTMLLIElement; // Cast to HTMLLIElement for type safety
        const id = clickedElement.id;
        switch (id) {
            case 'low-high':
                setSelectedSort("asc");
                setSort("Price");
                setCurrentPage(1);
                break;
            case 'high-low':
                setSelectedSort("desc");
                setSort("Price");
                setCurrentPage(1);
                break;
            case 'a-z':
                setSelectedSort("asc");
                setSort("Name");
                setCurrentPage(1);
                break;
            case 'z-a':
                setSelectedSort("desc");
                setSort("Name");
                setCurrentPage(1);
                break;
        }
        setSortQuery(`&_sort=${sort}&_order=${selectedSort}`)
    };

    return (
        <>
            <div className="shop-page">
                <ProductFilter onQueryChange={handleQueryChange}/>
                <div className="product-list">
                    <div className="filter-sort">
                        <span>{t('shoppage.fast filter')}</span>
                        <div className={"filter-sort-right"}>
                            <p className={"sort-by"}>
                                {t('shoppage.rank')}

                                <ul className="dropdown-sort-by" onClick={handleSortBy}>
                                    <li id={"high-low"}>Giá cao - thấp</li>
                                    <li id={"low-high"}>Giá thấp - cao</li>
                                    <li id={"a-z"}>Tên A - Z</li>
                                    <li id={"z-a"}>Tên Z - A</li>
                                </ul>
                            </p>
                            {isAdmin && (
                                <p className={"sort-by"} onClick={handleAddProductClick}>Add</p>
                            )}
                            <AddProductPopup show={showPopup} onClose={handleClosePopup}/>
                        </div>
                    </div>
                    <div className="products">
                        {isFetching && (
                            <Fragment>
                                <SkeletonProduct/>
                                <SkeletonProduct/>
                                <SkeletonProduct/>
                            </Fragment>)
                        }
                        {(dataProductPerPage)?.map((product) => {
                            return (<CardProduct key={product.id} product={product} sizeCard={"medium"}/>);
                        })}
                    </div>
                    <div className="paginate">
                        <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handleChangePage}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={Math.ceil(totalProduct / productPerPage)}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default ShopPage;
