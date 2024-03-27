import { useCallback } from 'react';
import ThrashIcon from '../../misc/icons/ThrashIcon';

import './amount-button.scss';

type AmountButtonProps = {
    amount: number;
    customClear?: boolean;
    onChange: (amount: number) => void;
};

function AmountButton(props: AmountButtonProps) {
    const { onChange, customClear, amount } = props;
    const customBtn = customClear && amount === 1;

    const handleDecrement = useCallback(() => {
        const res = amount - 1;
        onChange(res);

    }, [onChange, amount]);

    const handleIncrement = useCallback(() => {
        const res = amount + 1;
        onChange(res);
    }, [onChange, amount]);

    return (
        <div className={`amount-button ${customClear ? 'big-btn' : ''}`}>
            <button className={customBtn ? 'custom-btn' : ''} disabled={amount === 0} onClick={handleDecrement}>
                {customBtn ? <ThrashIcon /> : '-'}
            </button>
            <span>
                {amount}
            </span>
            <button onClick={handleIncrement}>{'+'}</button>
        </div>
    );
}

export default AmountButton;