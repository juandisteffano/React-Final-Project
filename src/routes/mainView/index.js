import './mainView.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class MainView extends Component {
    render() {
        return (
            <article className="main-view">
                <nav className="main-view__nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </article>
        );
    }
}

export default MainView;
