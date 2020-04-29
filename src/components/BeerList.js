import React from 'react';
import BeerItem from './BeerItem';


const BeerList = ({ beers }) => {
    
    if (beers) {
    
        if (beers.length > 0) {

            const renderedList = beers.map(beer => {
        
                return (

                    <BeerItem key={beer.id} beer={beer} />

                );

            });

            return <table className="beer-list"><tbody className="js-scroll">{renderedList}</tbody></table>;
            
        } else if (beers.length === 0) {

            return <p className="list-group-item">Sorry, there are no results for your search.</p>;
            
        }
        
    } else if (beers === undefined) {

        return <p className="list-group-item">Sorry, there are no results for your search.</p>;
    
    }
    
    return <div className="spinner"><div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div></div>;

};

export default BeerList;