import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//CSS
import './PathBar.css'

export default class PathBar extends Component {

    render() {
        const pathsListComponents = this.props.pathlist.map( (path, index) => {
            if (index < (Object.keys(this.props.pathlist).length - 1)){
                return (
                    <div className="link" key={index}>
                        <Link to={path.value}>{path.key}</Link> /
                    </div>
                )
            } else {
                return (
                    <div className="link" key={index}>
                        <Link to={path.value}>{path.key}</Link>  
                    </div>
                )
            }
        })

        return(
            <div className="pathBar">
                {
                    pathsListComponents
                }
            </div>
        )
    }
}
