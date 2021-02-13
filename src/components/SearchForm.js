import React, { Component } from 'react';

class SearchForm extends Component {

    state = {
        searchText: ''
    }
    
    onSearchChange = e => {
        this.setState({
            searchText: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value, "city");
        e.currentTarget.value = '';
    }

    render() {
        return (
            <form className="search-form">
                <input type="search" 
                       onChange={this.onSearchChange} 
                       name="search"
                       ref={(input) => this.query = input}
                       placeholder="Enter a location" />
                <button type="submit" id="submit" className="search-btn" onClick={this.handleSubmit}>Search</button>
            </form>
        );
    }
}

export default SearchForm;