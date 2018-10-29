import React, { Component } from 'react';

//CSS
import './ButtonsBar.css'

//Components
import ButtonClean from '../ButtonClean'
import ButtonSort from '../ButtonSort'


export default class ButtonsBar extends Component {

    render() {
        return (
            <article className="buttonsBar">
                <ButtonSort 
                    orderBy="Asc"
                />
                <ButtonSort 
                    orderBy="Desc"
                />
                <ButtonClean />
            </article>
        )
      
    }
}
