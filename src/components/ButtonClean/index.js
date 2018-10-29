import React, { Component } from 'react';

//CSS
import './ButtonClean.css'

//Redux
import { connect } from 'react-redux';

export class ButtonClean extends Component {

    render() {
        return (
            <button 
                className="buttonClean" 
                onClick={this.props.cleanFavList}
                disabled={!this.props.favoriteSongsList.length>0}
            >
                Delete All
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
        cleanFavList(){
            const action = {
                type: "CLEAN_FAV_LIST"
            }
            dispatch(action);
        }    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonClean);
