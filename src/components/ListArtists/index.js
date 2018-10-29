import React, { Component } from 'react';

//Components
import ListElements from '../../components/ListElements'
import Artist from '../../components/Artist'

//Util
import { searchArtists } from '../../Utils/parser'



export default class ListArtist extends Component {
    constructor(props){
        super(props)
        this.state = {
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
                msj="No Results Found"
            />
        )
    }

    componentDidMount(){
        searchArtists(this.props.artistKeySearch, this.props.config)
            .then(
                (data) => {this.setState({artistsSearchList: data})}
                )
            .catch(error => console.error(error)) 
    }

}


