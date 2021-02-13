import React from 'react';

// Components
import SearchForm from './SearchForm.js';

const Header = (props) => {
    return (
        <header>
            <h1>LOGO</h1>
            <SearchForm onSearch={props.onSearch}/>
        </header>
    );
}

export default Header;