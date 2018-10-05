import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import Book from "./Book";

class Search extends Component {
  state ={ books: [], searchTerm: ''}
  handleSearch = (val) => {
    BooksAPI.search(val).then((books) => {
      this.setState(() => (
        {
          books,
          searchTerm: val
        }));
    })

  }

render() {
    const { books, searchTerm } = this.state;
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
           {searchTerm && books.length > 0 ? (
             <ol className="books-grid">
               {
                 books.map((book) => (
                   <li key={book.id}><Book book={book}/></li>
                 ))
               }
             </ol>
            ) : ''
           }

         </div>
       </div>
     )
  }
}

export default Search;