import React, { Component } from 'react';

class SearchBar extends Component {

    state = { term: '' };

    handleInputChange = event => {
        this.setState({ term: event.target.value })
    };

    onBeerSubmit = event => {
        event.preventDefault();
        this.props.onBeerSubmit(this.state.term);
    };

    render() {

        return (
            
            <div className="search-bar">
            
                <form onSubmit={this.onBeerSubmit}>

                    <div className="mb-2">
                        <h3 className="search-bar__title">Beers</h3>
                        <span className="total-results">{this.props.totalResults} results</span>

                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={this.handleInputChange} className="form-control form-control-lg" placeholder="search for a beer..." aria-label="ex: guinness" 
                        />
                    </div>
                    
                </form>

            </div>

        );

    }

}

export default SearchBar;