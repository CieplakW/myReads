import React from "react";
import BooksList from "./BooksList";
import {camelCaseToText} from "../Shared/camelCaseToText";
import PropTypes from 'prop-types';

const BookShelf = ({title, books, onBookChangeShelf}) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{camelCaseToText(title)}</h2>
        <div className="bookshelf-books">
            <BooksList books={books} onBookChangeShelf={onBookChangeShelf} />
        </div>
    </div>
)
BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    onBookChangeShelf: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};
export default BookShelf
