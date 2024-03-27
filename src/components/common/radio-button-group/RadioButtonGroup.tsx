import { useCallback, useState } from 'react';
import { ProductType } from '../../../definitions/data';
import RadioButton from '../radio-button/RadioButton';

type RadioButtonGroup = {
    data: ProductType[],
    onChange: (n: number) => void;
    name: string;
    withPlus?: boolean;
};

function RadioButtonGroup(props: RadioButtonGroup) {
    const [checked, setChecked] = useState<string | null>(null);
    const { data, onChange, name, withPlus } = props;

    const handleChange = useCallback((id: string, price: number) => {
        setChecked(id);
        onChange(price);
    }, [onChange]);

    return (
        <div className='radio-button-group'>
            {
                data.map(item => (
                    <RadioButton
                        key={item.id}
                        data={item}
                        onChange={handleChange}
                        name={name}
                        checked={item.id === checked}
                        withPlus={withPlus}
                    />
                ))
            }
        </div>
    );
}

export default RadioButtonGroup;