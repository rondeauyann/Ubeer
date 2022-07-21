import React, { Component } from 'react';

class SearchNav extends Component {

    setBeerType = event => {
        event.preventDefault();

        // triggers the callback after the term has been set into state
        this.setState({ term: event.target.dataset.beertype }, this.handleBeerSubmit);
    };

    // callback for setting the beer type
    handleBeerSubmit = () => {
        this.props.onBeerSubmit(this.state.term);
    };


    render() {

        const beerTypes = ['La licorne dorée', 'Brewerie2', 'Brewerie3', 'Brewerie4'];

        const beerTypesList = beerTypes.map((beerType, index) =>
            <li className="list-group-item" key={index}>
                <a href="/" data-beertype={beerType} onClick={this.setBeerType}>{beerType}</a>
            </li>
        );

        return (

            <div className="search-nav mb-2">
                <ul className="nav">
                    <li className="list-group-item"><button onClick={() => this.props.getBrewery()}>All Beers</button></li>
                    {beerTypesList}
                </ul>
            </div>

        );

    }

}

export default SearchNav;