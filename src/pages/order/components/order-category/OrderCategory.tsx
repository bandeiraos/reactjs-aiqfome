import './order-category.scss';

type OrderCategoryProps = {
    title?: string,
    description?: string,
    required?: boolean,
    children: React.ReactNode;
};

function OrderCategory(props: OrderCategoryProps) {
    const { title, description, required, children } = props;
    return (
        <div className='order-category-wrapper'>
            <div className='oc-header'>
                <div>
                    <h3>{title}</h3>
                    <span>{description}</span>
                </div>

                <div>
                    {
                        required && (
                            <div className='oc-required'>
                                <span>obrigatório</span>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='oc-content'>
                {children}
            </div>
        </div>
    );
}

export default OrderCategory;