export interface Product {
    id: string,
    Name: string,
    Type: string,
    Price: string,
    describe: string,
    size: [number]
    benefit: [string]
    main_img_src: string
    img_src: [string]
}

export interface buyProduct {
    id: string,
    Name: string,
    Type: string,
    Price: string,
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


