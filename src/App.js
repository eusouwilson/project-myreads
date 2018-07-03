import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    books:[],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
      <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                  <ListBooks
                      books={this.state.books.filter((book)=> book.shelf === "currentlyReading")} 
                  />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <ListBooks
                      books={this.state.books.filter((book)=> book.shelf === "wantToRead")} 
                  />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <ListBooks
                      books={this.state.books.filter((book)=> book.shelf === "read")} 
                  />
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
               <Link 
               to="/search"              
               />
            </div>
          </div>
        )}
      />
       <Route path="/search" render = {() => (
        <SearchBooks/>
      )}
      />
      </div>
    )
  }
}

export default BooksApp
