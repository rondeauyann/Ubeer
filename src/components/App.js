/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import brewery from '../api/api';

import SearchBar from './SearchBar';
import SearchNav from './SearchNav';
import Pagination from './Pagination';
import BeerList from './BeerList';
import '../css/Main.css';

import ubeer from './../images/ubeer.png';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Brewery from './Brewery';


class App extends Component {

    // initialize state with properties
    state = { 
        beers: null,
        currentPage: 1,
        numberOfPages: '',
        totalResults: 0,
    };

 
    componentDidMount = async () => {
        
        const response      = await brewery.get('/bieres/1');
        this.setState({
            beers: response.data,
            currentPage: response.data.currentPage,
            numberOfPages: response.data.numberOfPages,
            totalResults: response.data.totalResults,
        }); 
        
    };
    

    getAllBeers = async () => {
        const response = await brewery.get('/bieres');

        this.setState({
            beers: response.data,
            currentPage: response.data.currentPage,
            numberOfPages: response.data.numberOfPages,
            totalResults: response.data.totalResults
        });
    };


    handleTermSubmit = async () => {
        
        const response = await brewery.get('/brasseries');
        console.log(response.data);

        this.setState({
            brewery: response.data,
        }); 

    };

    
    handlePagination = async currentPage => {

        const response = await brewery.get('/bieres', {
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
                                <img className='ubeerImg' src={ubeer} />

                                <SearchBar onBeerSubmit={this.handleTermSubmit} />

                                <SearchNav 
                                    onBeerSubmit={this.handleTermSubmit} 
                                    currentPage={this.state.currentPage}
                                    getAllBeers={this.getAllBeers}
                                />
                                <Brewery brewery={this.state.brewery} />

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