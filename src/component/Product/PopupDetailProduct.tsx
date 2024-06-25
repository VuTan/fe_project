import React from "react";
import "./ProductDetail.scss";

const PopupDetailProduct = () => {

    return (
        <>
            <h2 className={""}>Nike Pegasus 41</h2>
            <p className={""}>3,829,000₫</p>
            <p className={""}>Responsive cushioning in the Pegasus provides an energised ride for everyday road running.
                Experience
                lighter-weight energy return with dual Air Zoom units and a ReactX foam midsole. Plus, improved
                engineered mesh on the upper decreases weight and increases breathability.</p>
            <p className={""}>Key features</p>
            <ul className={"list"}>
                <li>Upgraded breathable engineered mesh upper</li>
                <li>ReactX foam midsole surrounds forefoot and heel Air Zoom units for an energised ride.</li>
                <li>Signature waffle-inspired rubber outsole for traction and flexibility</li>
                <li>A plush collar, tongue and sockliner for a secure and comfortable fit</li>
                <li>New ReactX foam midsole is 13% more responsive than previous React technology.</li>
                <li>Eco-friendly design, reduced carbon footprint by at least 43% compared to prior React foam.</li>
            </ul>
            <p className={""}>Product details:</p>
            <ul className={"list"}>
                <li>Weight: Approx. 251g (women's size 6.5)</li>
                <li>Heel-to-toe drop: 10mm</li>
                <li>MR-10 last—our best, most consistent fit (same as Pegasus 40)</li>
                <li>Not intended for use as personal protective equipment (PPE)</li>
                <li>Colour Shown: Volt/Barely Volt/Black</li>
                <li>Style: FD7273-701</li>
                <li>Country/Region of Origin: Vietnam</li>
            </ul>
        </>
    );
};
export default PopupDetailProduct;