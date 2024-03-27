import SearchIcon from '../../misc/icons/SearchIcon';
import './search-input.scss';

function SearchInput() {
    return (
        <div className='search-input'>
            <SearchIcon />
            <input
                type='search'
                placeholder='busque pela loja ou culinária'
                onChange={({ target }) => console.log('search term:', target.value)}
            />
        </div>

    );
}

export default SearchInput;