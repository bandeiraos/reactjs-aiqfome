import Button from '../../common/button/Button';
import SearchInput from '../../common/search-input/SearchInput';
import CaretIcon from '../../misc/icons/CaretIcon';
import LocationIcon from '../../misc/icons/LocationIcon';
import TicketIcon from '../../misc/icons/TicketIcon';
import UserIcon from '../../misc/icons/UserIcon';
import Logo from '../../misc/Logo';

import './header.scss';

function Header() {
    return (
        <header>
            <Logo />

            <div className='location-wrapper'>
                <LocationIcon />
                <div className='location'>
                    <span>entregando em</span>
                    <span>Rua Mandaguari, 198 <CaretIcon /></span>
                </div>
            </div>

            <div className='search-and-buttons'>
                <div className='search-wrapper'>
                    <SearchInput />
                </div>

                <div className='buttons-wrapper'>
                    <Button variant={2} text='ver ticket' icon={<TicketIcon />} onClick={() => console.log('see ticket click')} />
                    <Button variant={3} text='entrar' icon={<UserIcon />} onClick={() => console.log('log in click')} />

                    <Button variant={4} icon={<UserIcon />} onClick={() => console.log('log in click mobile')} />
                </div>
            </div>
        </header>
    );
}

export default Header;