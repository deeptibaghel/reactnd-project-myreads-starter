import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class Book extends Component {
  handleChange = (event) => {
    const { book, onShelfChange} = this.props;
    BooksAPI.update(book, event.target.value)
      .then((res) => {
        if(onShelfChange)
        onShelfChange();
      })
  }

  render() {
    const {book} = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}")` }}></div>
          <div className="book-shelf-changer">
            <select defaultValue={book.shelf ? book.shelf : "none"} onChange={this.handleChange} >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(", "): ''}</div>
      </div>
    )
  }
}

export default Book;