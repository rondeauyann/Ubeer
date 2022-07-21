import React from 'react';
import BreweryItem from './BreweryItem';


const Brewery = ({ brewery }) => {
    
    if (brewery) {
    
        if (brewery.length > 0) {

            const renderedList = brewery.map(brewery => {
        
                return (

                    <BreweryItem key={brewery.id} brewery={brewery} />

                );

            });

            return <table className="beer-list"><tbody className="js-scroll">{renderedList}</tbody></table>;
            
        } else if (brewery.length === 0) {

            return <p className="list-group-item">Sorry, there are no results for your search.</p>;
            
        }
        
    } else if (brewery === undefined) {

        return <p className="list-group-item">Sorry, there are no results for your search.</p>;
    
    }
    
    return "";

};

export default Brewery;