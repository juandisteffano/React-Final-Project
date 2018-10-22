import React, { Component } from 'react';

//CSS
import './SearchField.css'

class SearchField extends Component {
    render() {
        return (
            <div className={"search-field " + this.props.className}>
                <span className="icon">
                </span>
                <input
                    placeholder={this.props.placeholder}
                    className="input-field"
                >
                </input>
            </div>
        );
    }
}

export default SearchField;