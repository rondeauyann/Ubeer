import React, { Component } from 'react';

class BreweryItem extends Component {
    
    constructor(props) {
        super(props);
        this.beerRef = React.createRef();
    }

    render() { 

        const { brewery } = this.props;



        

        return ( 

            <tr className="beerItem" ref={this.beerRef}>


                <td className="beerItem__content">
                    <span className="beer-name">{brewery.nom}</span>
                </td>


            </tr>

        );

    }

}
 
export default BreweryItem;