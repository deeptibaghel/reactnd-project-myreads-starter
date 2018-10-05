import React, { Component } from 'react';
import Book from "./Book";

class BookShelf extends Component {
  render() {
    const { title, shelf, books, onShelfChange } = this.props;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                books.map((book) => (
                  <li key={book.id}><Book book={book} onShelfChange={onShelfChange}/></li>
                ))
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf;