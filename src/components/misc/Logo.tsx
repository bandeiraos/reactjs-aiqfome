import logoSvg from '../../assets/logo.svg';
import logoMobilrSvg from '../../assets/logo-mobile.svg';

function Logo() {
    return (
        <>
            <a href='/' title='aiqfome - Homepage' className='logo'>
                <img src={logoSvg} alt='aiqfome - logo' />
            </a>
            <a href='/' title='aiqfome - Homepage' className='logo-mobile'>
                <img src={logoMobilrSvg} alt='aiqfome - logo' />
            </a>
        </>
    );
}

export default Logo;
