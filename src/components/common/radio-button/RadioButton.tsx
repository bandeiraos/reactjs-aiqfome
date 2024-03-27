import { useCallback, useMemo } from 'react';
import { ProductType } from '../../../definitions/data';
import DiscountIcon from '../../misc/icons/DiscountIcon';
import { numberToReal } from '../../../utils/utils';
import LabelPrice from '../label-price/LabelPrice';

import './radio-button.scss';

type RadioButtonProps = {
    data: ProductType;
    onChange: (id: string, n: number) => void;
    name: string;
    checked: boolean;
    withPlus?: boolean;
};

function RadioButton(props: RadioButtonProps) {
    const { data, onChange, name, checked, withPlus } = props;
    const { price, old_price, id } = data;

    const inputSvgMemo = useMemo(() => {
        return (
            <div className='input-svg'>
                {checked ?
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M8.00019 15.9995C6.41794 15.9995 4.87145 15.5309 3.55586 14.6518C2.24026 13.7728 1.21507 12.5218 0.609567 11.06C0.00406611 9.59821 -0.155169 7.99077 0.153512 6.43892C0.462194 4.88707 1.22415 3.46204 2.34297 2.34322C3.46179 1.2244 4.8878 0.462447 6.43965 0.153765C7.99149 -0.154917 9.59991 0.00334185 11.0617 0.608843C12.5235 1.21434 13.7725 2.23856 14.6516 3.55416C15.5306 4.86975 16.0002 6.41722 16.0002 7.99947C16.0002 10.1212 15.1577 12.1554 13.6574 13.6557C12.1571 15.156 10.1219 15.9995 8.00019 15.9995ZM4.00019 7.49947C3.87123 7.64649 3.8 7.83514 3.8 8.03072C3.8 8.22629 3.87123 8.41494 4.00019 8.56197L6.54414 11.1616L6.56172 11.1811L6.57929 11.1928L6.63789 11.2514C6.69161 11.3045 6.75534 11.3463 6.82539 11.3745C6.89543 11.4026 6.9706 11.4166 7.04609 11.4155C7.14025 11.4269 7.23545 11.4163 7.32539 11.3862C7.41533 11.3561 7.49827 11.3074 7.5666 11.2417L12.5666 6.06392C12.7047 5.92253 12.7807 5.73226 12.7795 5.53462C12.7783 5.33699 12.6995 5.14703 12.5598 5.00728C12.42 4.86753 12.231 4.7897 12.0334 4.78853C11.8358 4.78736 11.6455 4.86333 11.5041 5.00142L7.09297 9.58931L5.68672 8.12447L5.06367 7.49947C4.91723 7.36593 4.72468 7.29503 4.52656 7.30025C4.33283 7.29627 4.14476 7.36724 4.00312 7.49947H4.00019Z' fill='#00A296' />
                    </svg>
                    :
                    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' clipRule='evenodd' d='M8 14.5C9.28558 14.5 10.5423 14.1188 11.6112 13.4046C12.6801 12.6903 13.5132 11.6752 14.0052 10.4874C14.4972 9.29973 14.6259 7.99279 14.3751 6.73192C14.1243 5.47104 13.5052 4.31285 12.5962 3.40381C11.6872 2.49477 10.529 1.8757 9.26809 1.6249C8.00721 1.37409 6.70028 1.50282 5.51256 1.99479C4.32484 2.48676 3.30968 3.31988 2.59545 4.3888C1.88122 5.45772 1.5 6.71443 1.5 8C1.5 9.72391 2.18482 11.3772 3.40381 12.5962C4.62279 13.8152 6.27609 14.5 8 14.5ZM8 16C9.58225 16 11.129 15.5308 12.4446 14.6518C13.7602 13.7727 14.7855 12.5233 15.391 11.0615C15.9965 9.59966 16.155 7.99113 15.8463 6.43928C15.5376 4.88743 14.7757 3.46197 13.6569 2.34315C12.538 1.22433 11.1126 0.462403 9.56072 0.153721C8.00887 -0.15496 6.40034 0.00346625 4.93853 0.608967C3.47672 1.21447 2.22729 2.23985 1.34824 3.55544C0.469192 4.87103 0 6.41775 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z' fill='#A8ADB7' />
                    </svg>
                }
            </div>
        );
    }, [checked]);

    const priceMemo = useMemo(() => {
        const priceReal = numberToReal(price);
        const oldPriceReal = old_price ? numberToReal(old_price) : null;

        return (
            <div className='item-price'>
                {old_price ? (
                    <span className='p-discount'>
                        de {oldPriceReal} por <strong>{priceReal}</strong>
                    </span>
                ) : (
                    price > 0 && <LabelPrice withPlus={withPlus} text={priceReal} />
                )}
            </div>
        );
    }, [old_price, price, withPlus]);

    const handleOnChange = useCallback(() => {
        onChange(id, price);
    }, [onChange, id, price]);

    return (
        <div className='radio-button-wrapper'>
            <label>
                <input type='radio' onChange={handleOnChange} name={name} />

                {inputSvgMemo}

                {old_price &&
                    <div className='disc-icon'>
                        <DiscountIcon />
                    </div>
                }

                <div className='item-info'>
                    <span className={`item-name${checked ? ' checked' : ''}`}>{data.name}</span>

                    {priceMemo}
                </div>
            </label>
        </div >
    );
}

export default RadioButton;