import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books:[],
    updateCount:0,
    showSearchPage: false

  }

  updateBookInfo = () => {
    BooksAPI.getAll().then((books) =>{
      this.setState({books})
      this.setState( prevState => ({
        updateCount:prevState.updateCount + 1
      })
      )
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>{
      console.log(books)
      this.setState({
        books:books,
      })
    })
  }
  render() {
    return (<div className="app">
        <Route exact path="/" render={() => {
          return (
              <ListBooks books={this.state.books} updateBookInfo={this.updateBookInfo}/>)
        }}/>
        
            <Route  path="/search" render={() => (
              <SearchBooks updateBookInfo={this.updateBookInfo}/>
            )}/>
      </div>)

  }
}
export default BooksApp
