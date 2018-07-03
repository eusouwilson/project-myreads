import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import './App.css';

 

class ListBooks extends Component {
    static prototypes = {
        books: PropTypes.array.isRequired,
    
    }
    state = {
        query: ''
    }
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    } 

    render() {
        const { books } = this.props
        const { query } = this.state

        let showingBooks
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingBooks = books.filter((books) => match.test(books.title))
        } else {
            showingBooks = books
        }

        return(
            <ol className="books-grid">
            {showingBooks.map((book)=>

            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
                )
             }
        </ol>

        )

    }    
}
export default ListBooks;