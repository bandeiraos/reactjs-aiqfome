export type CompanyType = {
    name: string;
    logo: string;
};

export type ProductInfoType = {
    name: string;
    img: string;
    description: string;
};

export type ProductType = {
    id: string,
    name: string,
    price: number;
    old_price?: number;
};

export type OrderType = {
    company: CompanyType;
    product: ProductInfoType;
    product_sizes: ProductType[];
    drinks: ProductType[];
    cutlery: ProductType[];
    extras: ProductType[];
};

export type SelectedProductsType = {
    [id: string]: {
        amount?: number;
        price: number;
    };
};

export type ChangeProductFuncType = (id: string, am: number, p: number) => void;
export type ChangeExtraProductFuncType = (id: string, p: number) => void;