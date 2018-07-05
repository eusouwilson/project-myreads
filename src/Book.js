import React,{Component} from 'react';
import SelectBook from './SelectBook';
var Rating = require('react-rating');
class Book extends Component{


  render() {
    const defaultCoverImage = "public/no_tb.jpg";
    return (
        <li key={this.props.book.id}>
          <div className="book">
            <div className="book-top">
             {this.props.book.averageRating ? (
            <Rating 
             className="book-shelf-rating"
             initialRating={this.props.book.averageRating}
             emptySymbol="glyphicon glyphicon-star-empty"
             fullSymbol="glyphicon glyphicon-star"
             readonly
             />
             ):(<div></div>) }
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : defaultCoverImage})`}}> </div>
              <SelectBook book={this.props.book} updateBookInfo={this.props.updateBookInfo}/>
              </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
          </div>
        </li>
    )
  }
}

export default Book