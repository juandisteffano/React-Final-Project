import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './AlbumView.css'
//Components
import Album from '../../components/Album'
import ListSongsAlbum from '../../components/ListSongsAlbum'
//Util
import { getAlbum } from '../../Utils/parser'
//Redux
import { connect } from 'react-redux';

export class AlbumView extends Component {

    constructor(props){
        super(props)
        this.state = {
            album: null
        }
    }

    render() {
        if (this.state.album){
            return(
                <article className="albumView">
                    <Album
                        album={this.state.album}
                        onlyInfo={true}
                    />

                    <div className="pathNav">
                        <Link to="/home/">Home</Link> -> 
                        <Link to={"/search/" + this.state.album.artist}>Artist</Link> -> 
                        <Link to={"/artist/" + this.state.album.artistId}>{this.state.album.artist}</Link> -> 
                        <Link to={"/album/" + this.state.album.id}>{this.state.album.name}</Link>
                    </div>

                    <ListSongsAlbum
                        album={this.state.album}
                    />
                </article>
            )
        }else{
            return (
                <p>Error: Incorrect Album ID</p>
            )
        }
    }

    componentDidMount(){
        this.props.showSearchInHeader(true);
        getAlbum(this.props.match.params.idalbum, this.props.config)
            .then(
                (data) => {this.setState({album: data})}
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumView);
