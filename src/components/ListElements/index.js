import React, { Component } from 'react';

//CSS
import './ListElements.css'

class ListElements extends Component {
    render() {
        return (
            <section className="listElements">
                {this.props.elements.length>0 ? this.props.elements : this.props.msj}            
            </section>
        )     
    }
}

export default ListElements;
