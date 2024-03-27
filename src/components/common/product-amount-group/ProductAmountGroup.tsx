import ProductItem from '../product-item/ProductItem';
import AmountButton from '../amount-button/AmountButton';
import { ChangeProductFuncType, ProductType, SelectedProductsType } from '../../../definitions/data';

type ProductAmountGroupProps = {
    list: ProductType[],
    selectedItems: SelectedProductsType,
    onChange: ChangeProductFuncType,
};

function ProductAmountGroup(props: ProductAmountGroupProps) {
    const { list, selectedItems, onChange } = props;
    return (
        <div>
            {
                list.map((item) => (
                    <ProductItem
                        key={item.id}
                        widget={
                            <AmountButton
                                key={item.id}
                                amount={selectedItems[item.id]?.amount || 0}
                                onChange={(amnt) => onChange(item.id, amnt, item.price)}
                            />
                        }
                        price={item.price}
                        name={item.name}
                        withPlus
                    />
                ))
            }
        </div>
    );
}

export default ProductAmountGroup;