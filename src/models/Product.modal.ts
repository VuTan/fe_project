export interface Product {
    id: string,
    Name: string,
    Type: string,
    Price: number,
    describe: string,
    size: number[]
    benefit: string[]
    main_img_src: string
    img_src: string[]
}

export interface buyProduct {
    id: string,
    Name: string,
    Type: string,
    Price: number,
    sizeBuy: number,
    quantity: number,
    main_img_src: string
}



export const createBuyProduct = (product: Product, size: number, quantity: number): buyProduct => ({
    id: product.id,
    Name: product.Name,
    Type: product.Type,
    Price: product.Price,
    sizeBuy: size, // Implement size selection logic
    quantity: quantity,
    main_img_src: product.main_img_src,
});

export function formatPriceVND(price: number): string {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND', // Adjust currency code as needed (e.g., 'VND' for Vietnamese Dong)
    }).format(price);
}

export function convertToProduct(buyProduct: buyProduct): Product {
    return {
        id: buyProduct.id,
        Name: buyProduct.Name,
        Type: buyProduct.Type,
        Price: buyProduct.Price,
        describe: "", // Assuming no description is available in buyProduct
        size: [], // Assuming no size information is available in buyProduct
        benefit: [], // Assuming no benefit information is available in buyProduct
        main_img_src: buyProduct.main_img_src,
        img_src: [], // Assuming no additional images are available in buyProduct
    };
}




