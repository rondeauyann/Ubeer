import React, { Component } from 'react';
import brewery from '../api/api';

import SearchBar from './SearchBar';
import SearchNav from './SearchNav';
import Pagination from './Pagination';
import BeerList from './BeerList';
import '../css/Main.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

    // initialize state with properties
    state = { 
        beers: null,
        currentPage: 1,
        numberOfPages: '',
        totalResults: 0,
    };

 
    componentDidMount = async () => {
        
        const response      = await brewery.get('/beers');

        this.setState({
            beers: response.data.data,
            currentPage: response.data.currentPage,
            numberOfPages: response.data.numberOfPages,
            totalResults: response.data.totalResults,
        }); 
        
    };
    

    getAllBeers = async () => {

        const response = await brewery.get('/beers');

        this.setState({
            beers: response.data.data,
            currentPage: response.data.currentPage,
            numberOfPages: response.data.numberOfPages,
            totalResults: response.data.totalResults
        }); 
        
    };


    handleTermSubmit = async term => {
        
        const response = await brewery.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            beers: response.data.data,
            numberOfPages: response.data.numberOfPages,
            totalResults: response.data.totalResults
        }); 

    };

    
    handlePagination = async currentPage => {

        const response = await brewery.get('/beers', {
            params: {
                p: currentPage
            }
        });

        this.setState({
            beers: response.data.data
        }); 

    }


    render() {
        
        return (
                            
            <Router>
            
                <div className="content-area">
                    
                    <main className="site-main container col-sm-8">   

                        <div className="site-content">
                        
                            <Route path="/" exact>

                                <SearchBar onBeerSubmit={this.handleTermSubmit} totalResults={this.state.totalResults} />

                                <SearchNav 
                                    onBeerSubmit={this.handleTermSubmit} 
                                    currentPage={this.state.currentPage}
                                    getAllBeers={this.getAllBeers}
                                />
                                
                                <BeerList beers={this.state.beers} />

                                <Pagination
                                    currentPage={this.state.currentPage}
                                    numberOfPages={this.state.numberOfPages}
                                    onPageSubmit={this.handlePagination}
                                /> 
                                
                            </Route>
                                                
                        </div>
                        
                    </main>
                    
                </div>
            
            </Router>

        );

    }

}

export default App;