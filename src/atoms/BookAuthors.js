import React from "react";
import PropTypes from "prop-types";

const BookAuthors = ({authors}) => (
    <div className="book-authors">
        {authors ? authors.map(author =>
            <div key={author}>{author}</div>
        )
            : <div>No Authors Listed</div>

        }
    </div>
)

BookAuthors.propTypes = {
    authors: PropTypes.array
};

export default BookAuthors
