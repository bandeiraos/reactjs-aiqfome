import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ChangeExtraProductFuncType, ChangeProductFuncType, SelectedProductsType } from "../definitions/data";

type DefaultvaluesTypes = {
    totalPrice: number,
    amountProduct: number,
    sizePrice: number,
    selectedDrinks: SelectedProductsType;
    selectedExtras: SelectedProductsType;
    handleSetTotalPrice: (n: number) => void,
    handleSetAmountProduct: (n: number) => void;
    handleChangeSize: (n: number) => void;
    handleChangeCuterly: (n: number) => void;
    handleSelectedDrinks: ChangeProductFuncType;
    handleSelectedExtras: ChangeExtraProductFuncType;
};

const defaultValues = {
    totalPrice: 0,
    amountProduct: 0,
    sizePrice: 0,
    selectedDrinks: {},
    selectedExtras: {},
    handleSetTotalPrice: () => { },
    handleSetAmountProduct: () => { },
    handleChangeSize: () => { },
    handleChangeCuterly: () => { },
    handleSelectedDrinks: () => { },
    handleSelectedExtras: () => { },
};

export const OrderContext = createContext<DefaultvaluesTypes>(defaultValues);

const OrderProvider = ({ ...props }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [amountProduct, setAmountProduct] = useState(0);
    const [sizePrice, setSizePrice] = useState(0);
    const [cuterlyPrice, setCuterlyPrice] = useState(0);
    const [selectedDrinks, setSelectedDrinks] = useState<SelectedProductsType>({});
    const [selectedExtras, setSelectedExtras] = useState<SelectedProductsType>({});

    useEffect(() => {
        const drinksTotal = Object.keys(selectedDrinks).reduce((acc, id) => {
            const item = selectedDrinks[id];

            return acc + (item.amount! * item.price);
        }, 0);

        const extrasTotal = Object.keys(selectedExtras).reduce((acc, id) => {
            const item = selectedExtras[id];

            return acc + item.price;
        }, 0);


        setTotalPrice((amountProduct * sizePrice) + (drinksTotal + cuterlyPrice + extrasTotal));
    }, [
        sizePrice,
        amountProduct,
        selectedDrinks,
        cuterlyPrice,
        selectedExtras
    ]);

    const handleSetTotalPrice = (val: number): void => {
        setTotalPrice(val);
    };

    const handleSetAmountProduct = useCallback((val: number): void => {
        setAmountProduct(val);
    }, []);

    const handleChangeSize = useCallback((price: number): void => {
        if (!amountProduct) {
            setAmountProduct(1);
        }

        setSizePrice(price);
    }, [amountProduct]);

    const handleChangeCuterly = (price: number): void => {
        setCuterlyPrice(price);
    };

    const handleSelectedDrinks = (id: string, amount: number, price: number): void => {
        let newList = { ...selectedDrinks };
        const found = newList[id];

        if (found) {
            found.amount = amount;
            if (!amount)
                delete newList[id];
        } else {
            newList = Object.assign({}, newList, { [id]: { amount, price } });
        }

        setSelectedDrinks(newList);
    };

    const handleSelectedExtras = (id: string, price: number) => {
        let newList = { ...selectedExtras };
        const found = newList[id];

        if (found) {
            delete newList[id];
        } else {
            newList = Object.assign({}, newList, { [id]: { price } });
        }

        setSelectedExtras(newList);
    };

    return <OrderContext.Provider value={{
        totalPrice,
        amountProduct,
        sizePrice,
        selectedDrinks,
        selectedExtras,
        handleSetTotalPrice,
        handleSetAmountProduct,
        handleChangeSize,
        handleChangeCuterly,
        handleSelectedDrinks,
        handleSelectedExtras
    }} {...props} />;
};

const useOrderContext = () => useContext(OrderContext);

export { OrderProvider, useOrderContext };