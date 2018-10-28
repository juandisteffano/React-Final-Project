import React, { Component } from 'react';

//CSS
import './SearchField.css'

class SearchField extends Component {
    constructor(props){
        super(props)

        this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
    }
    render() {
        return (
            <div className={"search-field " + this.props.className} >
                <span className="icon"/>
                <input
                    placeholder={this.props.placeholder}
                    className="input-field"
                    onKeyDown={this.onKeyDownHandler}
                />
            </div>
        );
    }


    onKeyDownHandler(e) {
        if(e.key === "Enter"){
            window.location.href = "/search/" + e.target.value
        }
    }
}



export default SearchField;