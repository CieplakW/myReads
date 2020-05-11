import React from "react";

class SearchInput extends React.Component {
    state = {
        query: ''
    }

    changeSearchValue = e => {
        const query = e.target.value.trim()
        this.setState(() => ({
            query
        }), () => this.props.searchBooks(this.state.query))
    }

    render() {
        return (
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.changeSearchValue}/>
        )
    }
}

export default SearchInput