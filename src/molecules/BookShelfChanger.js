import React from "react";
import { options } from "./consts";
import { camelCaseToText } from "../Shared/camelCaseToText";
import PropTypes from "prop-types";

class BookShelfChanger extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onBookChangeShelf: PropTypes.func.isRequired,
        bookShelf: PropTypes.string
    };

    render() {
        const { book, bookShelf='none', onBookChangeShelf } = this.props
        return(
            <div className="book-shelf-changer">
                <select defaultValue={bookShelf} onChange={(e) => onBookChangeShelf(book, e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    {options.map((optionValue) =>
                        <option
                            key={optionValue}
                            value={optionValue}
                        >
                            {camelCaseToText(optionValue)}
                        </option>
                    )}
                </select>
            </div>
        )
    }
}

export default BookShelfChanger