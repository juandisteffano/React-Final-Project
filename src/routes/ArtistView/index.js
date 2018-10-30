import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './ArtistView.css'
//Components
import Artist from '../../components/Artist'
import ListAlbums from '../../components/ListAlbums'
//Util
import { getArtist } from '../../Utils/parser'
//Redux
import { connect } from 'react-redux';

export class ArtistView extends Component {

    constructor(props){
        super(props)
        this.state = {
            artist: null,
        }
    }
    
    render() {
        if (this.state.artist){
            return(
                <article className="artistView">
                    <Artist
                        artist={this.state.artist}
                        onlyInfo={true}
                    />

                    <div className="pathNav">
                        <Link to="/home/">Home</Link> -> 
                        <Link to={"/search/" + this.state.artist.name}>Artist</Link> ->
                        <Link to={"/artist/" + this.state.artist.id}>{this.state.artist.name}</Link>  
                    </div>
                   
                    <ListAlbums
                        albums={this.state.artist.albums}
                    />
                </article>
            )
        }else{
            return (
                <p>Error: Incorrect Artist ID</p>
            )
        }
    }
    
    componentDidMount(){
        this.props.showSearchInHeader(true);
        getArtist(this.props.match.params.idartist, this.props.config)
            .then(
                (data) => {this.setState({artist: data})}
                )
            .catch(error => console.error(error)) 
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtistView);
