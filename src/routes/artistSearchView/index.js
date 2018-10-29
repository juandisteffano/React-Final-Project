import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './ArtistSearchView.css'

//Components
import SearchField from '../../components/SearchField'
import ListArtists from '../../components/ListArtists'


//Redux
import { connect } from 'react-redux';


export class ArtistSearchView extends Component {
 
    render() {

        return(
            <article className="artistSearchView">
                <div className="infoArtistSearchView">
                    <h2>Artists</h2>
                    <h3>You are currently searching: "{this.props.match.params.searchkey}"</h3>
                </div>
                
                <SearchField
                    placeholder="Search for your favorite artist here"
                    className="vertical-center horizontal-center"
                />
                
                <div className="pathNav">
                    <Link to="/home/">Home</Link> -> 
                    <Link to={"/search/" + this.props.match.params.searchkey}>Artist</Link>
                </div>

                <ListArtists 
                    artistKeySearch={this.props.match.params.searchkey}
                    config={this.props.config}
                />
            </article>
        )
    }

    componentDidMount(){
        this.props.showSearchInHeader(false);
    }
  

}

const mapStateToProps = state => {
    return {
        config: state.config
    };
}

const mapDispatchToProps = dispatch => {
    return{
        showSearchInHeader(showSearchInHeader){
            const action = {
                type: "SHOW_SEARCH_IN_HEADER",
                showSearchInHeader
            }
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ArtistSearchView);
