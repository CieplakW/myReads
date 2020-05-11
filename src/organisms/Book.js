import React from "react";
import BookCover from "../atoms/BookCover";
import BookShelfChanger from "../molecules/BookShelfChanger";
import BookAuthors from "../atoms/BookAuthors";
import PropTypes from "prop-types";

const Book = ({book, onBookChangeShelf}) => (
    <li>
        <div className="book">
            <div className="book-top">
                <BookCover
                    bookImage={book.imageLinks && book.imageLinks.thumbnail}
                />
                <BookShelfChanger book={book} bookShelf={book.shelf} onBookChangeShelf={onBookChangeShelf}/>
            </div>
            <div className="book-title">{book.title}</div>
            <BookAuthors authors={book.authors}/>
        </div>
    </li>
)

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onBookChangeShelf: PropTypes.func.isRequired,
};

export default Book