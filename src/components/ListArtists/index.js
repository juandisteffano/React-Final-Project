import React, { Component } from 'react';
//Components
import ListElements from '../../components/ListElements'
import Artist from '../../components/Artist'
//Util
import { searchArtists } from '../../Utils/parser'
//Redux
import { connect } from 'react-redux';

export class ListArtist extends Component {

    constructor(props){
        super(props)
        this.state = {
            keySearch: null,
            artistsSearchList: []
        }
    }

    render() {
        const artists = this.state.artistsSearchList.map( (artist, index) => {
            return (
                <Artist artist={artist} key={index} onlyInfo={false} />
            )
        })

        return(
            <ListElements
                elements={artists}
                msj="Searching..."
            />
        )
    }

    componentDidMount(){
        if (this.props.artistSearchKey.localeCompare(this.state.keySearch) !== 0){
            searchArtists(this.props.artistSearchKey, this.props.config)
                .then(
                    (data) => {this.setState({
                        keySearch: this.props.artistSearchKey,
                        artistsSearchList: data
                        })}
                    )
                .catch(error => console.error(error)) 
        }
    }
}

const mapStateToProps = state => {
    return {
        artistSearchKey: state.artistSearchKey
    };
}


export default connect(mapStateToProps, null)(ListArtist);