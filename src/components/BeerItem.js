import React, { Component } from 'react';
import placeholderImage from '../images/placeholder-beer.png';

class BeerItem extends Component {
    
    constructor(props) {
        super(props);
        this.beerRef = React.createRef();
    }

    render() { 

        const { beer }      = this.props;
        let beerImage       = beer.labels !== undefined ? beer.labels.medium : placeholderImage;
        let beerStyle       = beer.style !== undefined ? beer.style.shortName : '';
        let beerAbv         = beer.abv !== undefined ? `${beer.abv}%` : '';
        let beerAbvStyles   = beer.abv !== undefined ? 'badge beer-abv' : 'beer-abv--is-hidden';
        let beerLinkStyle   = beer.description !== undefined ? 'beerItem__link' : 'beerItem__link--is-hidden'

        const showDetails = event => {
            event.preventDefault();
            this.beerRef.current.cells[3].classList.add('beerItem__details--is-open'); // refactor
        }
        

        return ( 

            <tr className="beerItem" ref={this.beerRef}>

                <td className="beerItem__image">
                    <img src={beerImage} alt={beer.name} />
                </td>

                <td className="beerItem__content">
                    <span className="beer-name">{beer.name}</span>
                    <span className={beerAbvStyles}>{beerAbv}</span>
                    <span className="beer-style">{beerStyle}</span>
                </td>

                <td className={beerLinkStyle}>
                    <a href="/" onClick={showDetails} className="btn btn-light btn-sm">View Details</a>
                </td>

                <td className="beerItem__details">
                    <p>{beer.description}</p>
                </td>

            </tr>

        );

    }

}
 
export default BeerItem;