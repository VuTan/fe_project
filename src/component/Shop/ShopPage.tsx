import React, {useEffect, useState} from 'react';
import './ShopPage.scss';
import {fetchProductPerPage} from "../../service/ProductService";
import CardProduct from "../Product/CardProduct";
import ReactPaginate from "react-paginate";
import {Product} from "../../models/Product.modal";

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
    const productPerPage = 12;
    const [listProduct, setListProduct] = useState<Product[]>();
    const [totalProduct, setTotalProduct] = useState();
    const [totalPage, setTotalPage] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        getProduct(1);
    }, []);

    const getProduct = async (page: number) => {
        let res = await fetchProductPerPage(page, productPerPage);
        if (res && res.data.data.length > 0) {
            setListProduct(res.data.data);
            setTotalProduct(res.data.items);
            setTotalPage(res.data.pages);
        }
    };

    const handleChangePage = (event: { selected: number }) => {
        getProduct(event.selected + 1);
    };


    return (
        <>
            <div className="shop-page">

                <div className="product-list">
                    <div className="filter-sort">
                        <span>Bộ lọc nhanh</span>
                        <span>Xếp theo</span>
                    </div>
                    <div className="products">
                        {listProduct && listProduct.length > 0
                            && listProduct.map((product) => {
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
