import { useCallback } from 'react';
import AmountButton from '../../../../components/common/amount-button/AmountButton';
import Button from '../../../../components/common/button/Button';
import { useOrderContext } from '../../../../context/context';
import { CompanyType, ProductInfoType } from '../../../../definitions/data';
import { numberToReal } from '../../../../utils/utils';

import './order-product.scss';

type OrderProductProps = {
    company: CompanyType,
    product: ProductInfoType,
    minimumPrice: number;
};

function OrderProduct(props: OrderProductProps) {
    const { minimumPrice, company, product } = props;
    const { totalPrice, amountProduct, handleSetAmountProduct, sizePrice } = useOrderContext();
    const minPrice = numberToReal(minimumPrice);
    const totalFormatted = numberToReal(totalPrice);

    const handleAddProduct = useCallback(() => {
        if (!sizePrice) {
            const warning = document.querySelector('.warning');
            warning?.classList.add('show');

            setTimeout(() => {
                warning?.classList.remove('show');
            }, 2500);
            return;
        }

        handleSetAmountProduct(1);

    }, [handleSetAmountProduct, sizePrice]);

    return (
        <div className='order-product-wrapper'>
            <div className='company-info'>
                <img src={company.logo} alt={company.name} />
                <h1>{company.name}</h1>
            </div>

            <div className='product-info-wrapper'>
                <div className='product-info'>
                    <div className='product-info-data'>
                        <h2>{product.name}</h2>
                        <span className='p-price'>
                            a partir de <strong>{minPrice}</strong>
                        </span>
                        <span>{product.description}</span>
                    </div>

                    <div className='amount-wrapper'>
                        <div>
                            <span className='amnt-question'>quantos?</span>
                            {totalPrice > 0 &&
                                <span className='amnt-total'>total: <b>{totalFormatted}</b></span>
                            }

                        </div>

                        <div>
                            {!amountProduct ?
                                <Button
                                    variant={1}
                                    text='adicionar'
                                    onClick={handleAddProduct}
                                />
                                :
                                <AmountButton
                                    amount={amountProduct}
                                    onChange={v => handleSetAmountProduct(v)}
                                    customClear
                                />
                            }
                        </div>

                        <span className='warning'>
                            Primeiro selecione o tamanho do lanche 😎
                        </span>
                    </div>
                </div>

                <div className='product-img'>
                    <img src={product.img} alt={product.name} />
                </div>
            </div>
        </div>
    );
}

export default OrderProduct;