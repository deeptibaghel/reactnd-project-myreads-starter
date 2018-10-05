import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Search from './Search';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = { shelfForBooks:'' }
  onGetAll = (shelfForBooks) => {
    this.setState({shelfForBooks: shelfForBooks});
  }
  render() {
    const {shelfForBooks} = this.state
    return (
      <div className="app">
            <Route exact path='/' render={() => (
              <ListBooks onGetAll={this.onGetAll}/>
            )}
            />
            <Route path='/search' render={({ history }) => (
              <Search
                onSearch={() => {
                  history.push('/');
                }}
                shelfForBooks={shelfForBooks}
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
