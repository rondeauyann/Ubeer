import React, { Component } from 'react';
import placeholderImage from '../images/placeholder-beer.png';

class BeerItem extends Component {
    
    constructor(props) {
        super(props);
        this.beerRef = React.createRef();
    }

    render() { 

        const { beer }      = this.props;
        let beerImage       = beer.img !== undefined ? beer.img : placeholderImage;
        let beerStyle       = beer.type !== undefined ? beer.type : '';


        return (

            <tr className="beerItem" ref={this.beerRef}>

                <td className="beerItem__image">
                    <img src={beerImage} alt={beer.nom} />
                </td>

                <td className="beerItem__content">
                    <span className="beer-name">{beer.nom}</span>
                    <span className="beer-style">{beerStyle}</span>
                </td>


                <td className="beerItem__details">
                    <p>{beer.description}</p>
                </td>

            </tr>

        );

    }

}
 
export default BeerItem;