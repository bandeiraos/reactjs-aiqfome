import OrderProduct from './components/order-product/OrderProduct';
import { getOrderInfo } from '../../api/api';
import { getMinimumPrice } from '../../utils/utils';
import OrderCategory from './components/order-category/OrderCategory';
import { useOrderContext } from '../../context/context';
import RadioButtonGroup from '../../components/common/radio-button-group/RadioButtonGroup';
import ProductAmountGroup from '../../components/common/product-amount-group/ProductAmountGroup';
import SelectButtonGroup from '../../components/common/select-button-group/SelectButtonGroup';
import Textarea from '../../components/common/textarea/Textarea';

function Order() {
    const { company, product, product_sizes, drinks, cutlery, extras } = getOrderInfo();
    const minimumPrice = getMinimumPrice(product_sizes);
    const {
        selectedDrinks,
        selectedExtras,
        handleChangeSize,
        handleChangeCuterly,
        handleSelectedDrinks,
        handleSelectedExtras,
    } = useOrderContext();

    return (
        <div className='order-wrapper'>
            <OrderProduct
                company={company}
                product={product}
                minimumPrice={minimumPrice}
            />
            <OrderCategory title='qual o tamanho?' description='escolha 1' required >
                <RadioButtonGroup data={product_sizes} onChange={handleChangeSize} name='size' />
            </OrderCategory>

            <OrderCategory title='vai querer bebida?' description='escolha quantos quiser'>
                <ProductAmountGroup list={drinks} selectedItems={selectedDrinks} onChange={handleSelectedDrinks} />
            </OrderCategory>

            <OrderCategory title='precisa de talher?' description='escolha até 1'>
                <RadioButtonGroup withPlus={true} data={cutlery} onChange={handleChangeCuterly} name='cuterly' />
            </OrderCategory>

            <OrderCategory title='mais alguma coisa?' description='escolha até 2'>
                <SelectButtonGroup list={extras} selectedItems={selectedExtras} onChange={handleSelectedExtras} name='extras' />
            </OrderCategory>

            <OrderCategory>
                <Textarea />
            </OrderCategory>
        </div>
    );
}

export default Order;