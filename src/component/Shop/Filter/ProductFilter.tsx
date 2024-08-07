import React from "react";
import "./ProductFilter.scss"
import FilterByCategory from "./FilterByCategory";
import {useTranslation} from "react-i18next";

interface Filter {

}

const ProductFilter = (filter?: Filter) => {

    const {t} = useTranslation('productfitler')

    return (
        <div className="sidebar">
            <h3 className={"sidebar-h3"}>{t('product filter.existing products')} ()</h3>
            <div className="category-buttons">
                <h4 className={"sidebar-h4"}>{t('product filter.Brand')}</h4>
                <label className={"check"}><input type="checkbox"/>{t('product filter.Nike')}</label>
                <label className={"check"}><input type="checkbox"/>{t('product filter.Nike')}</label>
                <label className={"check"}><input type="checkbox"/>{t('product filter.Nike')}</label>
                <label className={"check"}><input type="checkbox"/>{t('product filter.Nike')}</label>
                <label className={"check"}><input type="checkbox"/>{t('product filter.Nike')}</label>
                <label className={"check"}><input type="checkbox"/>{t('product filter.Nike')}</label>
                <label className={"check"}><input type="checkbox"/>{t('product filter.Nike')}</label>
                <label className={"check"}><input type="checkbox"/>{t('product filter.Nike')}</label>
            </div>
            <h4 className={"sidebar-h4"}>{t('product filter.gender')}</h4>
            <label className={"check"}><input type="checkbox"/>{t('product filter.male')}</label>
            <label className={"check"}><input type="checkbox"/>{t('product filter.female')}</label>
            <label className={"check"}><input type="checkbox"/>{t('product filter.Unisex')}</label>
            <h4 className={"sidebar-h4"}>{t('product filter.attributers')}</h4>
            <label className={"check"}><input type="checkbox"/>{t('product filter.in stock')}</label>
            <label className={"check"}><input type="checkbox"/>{t('product filter.Pre order')}</label>
            <h4 className={"sidebar-h4"}>{t('product filter.Price Range')}</h4>
            <label className={"check"}><input type="checkbox"/> 550.000đ - 1.200.000đ</label>
            <label className={"check"}><input type="checkbox"/> 1.200.000đ - 2.000.000đ</label>
            <label className={"check"}><input type="checkbox"/> 2.000.000đ - 2.500.000đ</label>
        </div>)
}

export default ProductFilter;

const FilterTest = () => {

}