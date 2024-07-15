import React, {Fragment, useEffect, useState} from 'react';
import './ShopPage.scss';
import {useGetProductPerPageQuery, useGetProductSortByQuery} from "../../service/ProductService";
import CardProduct from "../Product/CardProduct";
import ReactPaginate from "react-paginate";
import ProductFilter from "./Filter/ProductFilter";
import SkeletonProduct from "../Product/SkeletonProduct";
import {useTranslation} from "react-i18next";
import AddProductPopup from "./AddProductPopup";

interface Filter {

}


const ShopPage: React.FC = () => {

    const categories = [
        "Shoes",
        "Sports Bras",
        "Tops & T-Shirts",
        "Hoodies & Sweatshirts",
        "Jackets",
        "Trousers & Tights",
        "Shorts",
        "Tracksuits",
        "Jumpsuits & Rompers",
        "Skirts & Dresses",
        "Socks",
        "Accessories & Equipment"
    ];
    const {t} = useTranslation('shoppage')

    const productPerPage = 18;
    const [totalPage, setTotalPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState("");
    const [totalProduct, setTotalProduct] = useState();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSort, setSelectedSort] = useState<boolean>(true);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const {data: sortedData, isFetching: isSortingFetching} = useGetProductSortByQuery({
        sort: sort,
        lowToHigh: selectedSort,
        page: currentPage,
        perPage: productPerPage,
    });
    const {data: paginatedData, isFetching: isPaginatingFetching} = useGetProductPerPageQuery({
        page: currentPage,
        perPage: productPerPage
    });

    const handleChangePage = (event: { selected: number }) => {
        setCurrentPage(event.selected + 1);
    };

    const handleSortBy = (event: React.MouseEvent<HTMLUListElement>) => {
        const clickedElement = event.target as HTMLLIElement; // Cast to HTMLLIElement for type safety
        const id = clickedElement.id;

        switch (id) {
            case 'low-high':
                setSelectedSort(true);
                setSort("Price");
                setCurrentPage(1)
                break;
            case 'high-low':
                setSelectedSort(false);
                setSort("Price");
                setCurrentPage(1)
                break;
            case 'a-z':
                setSelectedSort(true);
                setSort("Name");
                setCurrentPage(1)
                break;
            case 'z-a':
                setSelectedSort(false);
                setSort("Name");
                setCurrentPage(1)
                break;
            default:
                break; // Handle invalid IDs (optional)
        }
    };

    return (
        <>
            <div className="shop-page">
                <ProductFilter/>
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
                        </div>
                    </div>
                    <div className="products">
                        {isSortingFetching || isPaginatingFetching && (
                            <Fragment>
                                <SkeletonProduct/>
                                <SkeletonProduct/>
                                <SkeletonProduct/>
                            </Fragment>)
                        }
                        {(sortedData || paginatedData)?.map((product) => {
                            return (<CardProduct key={product.id} product={product} sizeCard={"medium"}/>);
                        })}
                    </div>
                    <div className="paginate">
                        <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handleChangePage}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={totalPage}
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
