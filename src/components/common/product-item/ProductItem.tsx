import React from 'react';
import LabelPrice from '../label-price/LabelPrice';
import { numberToReal } from '../../../utils/utils';

import './product-item.scss';

type ProductItemProps = {
    widget: React.ReactNode;
    price: number;
    name: string;
    withPlus?: boolean;
};

function ProductItem(props: ProductItemProps) {
    return (
        <div className='product-item-wrapper'>
            <div className='pi-widget'>
                {props.widget}
                <span>{props.name}</span>
            </div>

            <LabelPrice withPlus={props.withPlus} text={numberToReal(props.price)} />
        </div>
    );
}

export default ProductItem;