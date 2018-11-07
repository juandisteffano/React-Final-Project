import React, { Component } from 'react';
//CSS
import './ListElements.css'
//Components
import LoadingBar from '../../components/LoadingBar'

class ListElements extends Component {
    render() {
        return (
            <section className="listElements">
                {
                    this.props.elements.length>0 ? 
                    this.props.elements 
                    : 
                    <LoadingBar />
                }            
            </section>
        )     
    }
}

export default ListElements;
