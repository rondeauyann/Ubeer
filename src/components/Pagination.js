import React, { Component } from 'react';

class Pagination extends Component {
    
    state = {
        currentPage: this.props.currentPage,
        numberOfPages: this.props.numberOfPages
    };

    scrollToTop() {
        window.scrollTo(0, 0);
        document.querySelector('.js-scroll').scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    onPrevPage = event => {
        event.preventDefault();
        this.scrollToTop()
        this.props.onPageSubmit(this.state.currentPage - 1);
        this.setState({ currentPage: this.state.currentPage - 1 });
    };
    
    onNextPage = event => {
        event.preventDefault();
        this.scrollToTop()
        this.props.onPageSubmit(this.state.currentPage + 1);
        this.setState({ currentPage: this.state.currentPage + 1 });  
    };
    
    
    render() { 
        
        let paginationStyle = this.props.numberOfPages > 1 ? 'pagination' : ' pagination--is-disabled';
        let prevPageStyle   = this.state.currentPage > 1 ? 'page-item' : 'page-item disabled';
        let nextPageStyle   = this.state.currentPage < this.props.numberOfPages ? 'page-item' : 'page-item disabled';

        return (  
            
            <nav aria-label="Pagination">

                <ul className={`${paginationStyle} text-center`}>

                    <li className={prevPageStyle}><a href="/" className="page-link btn" aria-label="Previous page" onClick={this.onPrevPage}>&laquo; Previous</a></li>

                    <li>Page {this.state.currentPage} of {this.props.numberOfPages}</li>

                    <li className={nextPageStyle}><a href="/" className="page-link btn" aria-label="Next page" onClick={this.onNextPage}>Next &raquo;</a></li>

                </ul>
                
            </nav>
        
        );
    
    }

}
 
export default Pagination;