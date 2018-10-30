import React, { Component } from 'react';
//CSS
import './ButtonSort.css'
//Redux
import { connect } from 'react-redux';

export class ButtonSort extends Component {

    render() {
        return (
            <button 
                className="buttonSort" 
                onClick={()=> this.props.sort(this.props.orderBy)}
            >
                {this.props.orderBy}
            </button>
        )
    }  
}

const mapStateToProps = state => {
    return {
        favoriteSongsList: state.favoriteSongsList,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        sort(orderBy){
            const action = {
                type: "SORT",
                orderBy
            }
            dispatch(action);
        }    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSort);
