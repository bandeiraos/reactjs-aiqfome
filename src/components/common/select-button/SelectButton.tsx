import { useMemo } from 'react';
import './select-button.scss';
import LabelPrice from '../label-price/LabelPrice';
import { numberToReal } from '../../../utils/utils';

type SelectButtonProps = {
    name: string;
    price: number;
    onChange: () => void;
    checkboxName: string;
    checked?: boolean;
};


function SelectButton(props: SelectButtonProps) {
    const { name, onChange, checkboxName, checked, price } = props;

    const checkSquareMemo = useMemo(() => {
        return (
            <div className={`check-square${checked ? ' checked' : ''}`} />
        );
    }, [checked]);

    return (
        <div className='select-button-wrapper'>
            <label>
                <input type='checkbox' onChange={onChange} name={checkboxName} />
                {checkSquareMemo}

                <div className='item-info'>
                    <span className={`item-name${checked ? ' checked' : ''}`}>{name}</span>
                    <LabelPrice text={numberToReal(price)} />
                </div>

            </label>
        </div >
    );
}

export default SelectButton;