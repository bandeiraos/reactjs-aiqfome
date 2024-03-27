import { ProductType } from "../definitions/data";

export function getMinimumPrice(productSizes: ProductType[]) {
    let min = Infinity;

    productSizes.forEach(element => {
        if (element.price < min) {
            min = element.price;
        }
    });

    return min;
}

export function numberToReal(price: number) {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}