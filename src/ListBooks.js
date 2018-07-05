import React from 'react'
import BookShelf from "./BookShelf"
import {Link} from "react-router-dom"

const ListBooks = ({books, updateBookInfo}) => {

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Reads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf books={books} distinc="currentlyReading" updateBookInfo={updateBookInfo}/>
              <BookShelf books={books} distinc="wantToRead" updateBookInfo={updateBookInfo}/>
              <BookShelf books={books} distinc="read" updateBookInfo={updateBookInfo}/>
            </div>
          </div>

          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    )
  }

export default ListBooks