import './button.scss';

type ButtonProps = {
    icon?: React.ReactElement,
    text?: string,
    onClick: () => void,
    variant: 1 | 2 | 3 | 4;
};

function Button(props: ButtonProps) {
    const { icon, text, onClick, variant } = props;

    const styleClassname = `button variant-${variant} ${icon ? 'withIcon' : ''}`;

    return (
        <button className={styleClassname} onClick={onClick}>
            {icon}
            <span>{text}</span>
        </button>
    );
}

export default Button;