import React from "react";
import PropTypes from "prop-types";

const Book = (props) =>{
    Book.PropTypes = {
        book: PropTypes.array.isRequired,
        getBookshelf: PropTypes.func.isRequired,
        changeBookshelf: PropTypes.func.isRequired
    };
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${props.book.imageLinks.thumbnail})`
                    }}
                />
                <div className="book-shelf-changer hvr-push">
                    <select
                        defaultValue={props.getBookshelf(props.book.id)}
                        onChange={e => props.changeBookshelf(e.target.value, props.book)}
                    >
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="book-title">
                    {props.book.title}
                </div>
                <div className="book-authors">
                    {props.book.authors}
                </div>
            </div>
        </div>
    );
}

export default Book;
