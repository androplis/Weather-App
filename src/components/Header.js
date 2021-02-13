import React from 'react';

// Components
import SearchForm from './SearchForm.js';

const Header = (props) => {
    return (
        <header>
            <i class="fas fa-cloud"></i>
            <SearchForm onSearch={props.onSearch}/>
        </header>
    );
}

export default Header;