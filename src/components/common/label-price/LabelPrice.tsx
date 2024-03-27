import './label-price.scss';

type LabelPriceProps = {
    text: string;
    withPlus?: boolean;
};

function LabelPrice(props: LabelPriceProps) {
    return (
        <span className='label-price'>
            {props.withPlus && '+'}{props.text}
        </span>
    );
}

export default LabelPrice;