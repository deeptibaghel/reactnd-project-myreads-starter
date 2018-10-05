import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {debounce} from 'throttle-debounce';
import * as BooksAPI from './BooksAPI';
import Book from "./Book";

class Search extends Component {
  state ={ books: [], searchTerm: '', searching: false}

  constructor() {
    super();
    this.searchAPI = debounce(500, this.searchAPI);
  }

  handleSearch = (val) => {
    this.setState(() => ({searchTerm: val, searching: true}));
    if(val) {
      this.searchAPI(val);
    }
  }

  searchAPI = (val) => {
    console.log("Searching", val);
    BooksAPI.search(val).then((books) => {
      this.setState(() => ({books, searching: false}));
    })
 }

render() {
    const { books, searchTerm, searching } = this.state;
    const { shelfForBooks } = this.props;
     return(
       <div className="search-books">
         <div className="search-books-bar">
           <Link className="close-search" to ='/'>Close</Link>
           <div className="search-books-input-wrapper">
             <input type="text"
                onChange={(event) => this.handleSearch(event.target.value)}
                placeholder="Search by title or author"
                value={searchTerm}
             />
          </div>
         </div>
         <div className="search-books-results">
           {searchTerm && books && books.length > 0 ? (
             <ol className="books-grid">
               {
                 books.map((book) => (
                   <li key={book.id}><Book book={book} shelf={shelfForBooks[book.id]} /></li>
                 ))
               }
             </ol>
            ) : searchTerm && !searching ? (<h4>Oops.. we could not find any matching book..</h4>) : ''
           }

         </div>
       </div>
     )
  }
}

export default Search;