import React from "react";
import Book from "../organisms/Book";
import PropTypes from "prop-types";

class BooksList extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookChangeShelf: PropTypes.func.isRequired,
    };
    render() {
        const {books, onBookChangeShelf} = this.props
        return (
            <ol className="books-grid">
                {books.length === 0 ? <p> Currently No Books To Show </p>
                    : books.map(book =>
                        <Book
                            key={book.id}
                            book={book}
                            onBookChangeShelf={onBookChangeShelf}
                        />
                )}
            </ol>
        )
    }
}

export default BooksList
