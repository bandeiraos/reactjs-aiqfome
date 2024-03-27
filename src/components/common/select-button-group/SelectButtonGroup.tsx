import { ChangeExtraProductFuncType, ProductType, SelectedProductsType } from '../../../definitions/data';
import SelectButton from '../select-button/SelectButton';

type SelectButtonGroupProps = {
    list: ProductType[],
    onChange: ChangeExtraProductFuncType;
    name: string;
    selectedItems: SelectedProductsType;
};

function SelectButtonGroup(props: SelectButtonGroupProps) {
    const { list, onChange, name, selectedItems } = props;
    return (
        <div>
            {
                list.map((item) => (
                    <SelectButton
                        key={item.id}
                        name={item.name}
                        onChange={() => onChange(item.id, item.price)}
                        checkboxName={name}
                        checked={!!selectedItems[item.id]}
                        price={item.price}
                    />
                ))
            }
        </div>
    );
}

export default SelectButtonGroup;