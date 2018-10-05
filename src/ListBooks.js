import React, { Component } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

class ListBooks extends Component {
  state = {currentlyReading: [], wantToRead: [], read: []}
  shelves = {
    currentlyReading: 'Currently Reading',
    wantToRead: 'Want to Read',
    read: 'Read'
  }



  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    let booksOnShelf = {};
    Object.keys(this.shelves).forEach((shelf) => {
      booksOnShelf[shelf] = [];
    })
    BooksAPI.getAll().then(books => {
      let shelfForBooks = {};
      books.forEach((book) => {
        booksOnShelf[book.shelf].push(book);
        shelfForBooks[book.id] = book.shelf;
      });
      this.setState(() => (booksOnShelf));
      //pass back the shelf information for search page
      this.props.onGetAll(shelfForBooks);
    });
  }

  render() {
      return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {
              Object.keys(this.shelves).map((shelf) => (
                <BookShelf
                  key={shelf}
                  title={this.shelves[shelf]}
                  shelf={shelf}
                  onShelfChange={this.getBooks}
                  books={this.state[shelf]}
                />
              ))
           }
          </div>
        </div>
      )
   }
}

export default ListBooks;