import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Search from './Search';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
            <Route exact path='/' render={() => (
              <ListBooks />
            )}
            />
            <Route path='/search' render={({ history }) => (
              <Search
                onSearch={() => {
                  history.push('/');
                }}
              />
            )}
            />
            <div className="open-search">
              <Link to = '/search'>Add a book</Link>
            </div>
      </div>
    )
  }
}

export default BooksApp
