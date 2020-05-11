import React from "react";
import PropTypes from "prop-types";
const BookCover = ({bookImage}) => (
    <div
        className="book-cover"
        style={{
            width: 128,
            height: 192,
            backgroundImage: `url(${bookImage})`
        }}
    />
)
BookCover.propTypes = {
    bookImage: PropTypes.string.isRequired
};
export default BookCover