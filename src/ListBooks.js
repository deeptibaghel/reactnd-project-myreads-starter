import React, { Component } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

class ListBooks extends Component {

  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then(books => {
      let booksOnShelf = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
      };
      books.forEach((book) => {
        booksOnShelf[book.shelf].push(book);
      });
      this.setState(() => (booksOnShelf));
    });
  }

  render() {
      const { currentlyReading, wantToRead, read } = this.state;
      return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
              <BookShelf shelf="Currently Reading" books={currentlyReading} onShelfChange={this.getBooks} />
              <BookShelf shelf="Want to Read" books={wantToRead} onShelfChange={this.getBooks} />
              <BookShelf shelf="Read" books={read} onShelfChange={this.getBooks} />
          </div>
        </div>
      )
   }
}

export default ListBooks;