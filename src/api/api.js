//Model
import ArtistModel from '../Models/ArtistModel'

//Config
import config from '../config' 

function searchArtists(artist){
    const url = config.config.base_url + "search?q=" + artist + "&type=artist"
    console.log(url);
    return fetch(url, config)
        .then(response => response.json())
        .then(data => {
            let resp = [];
            data.artists.items.forEach(e => {
                resp.push(new ArtistModel(e.id,e.name,e.genres[0],e.images.length>0 ? e.images[0].url : null))
                });
        return resp
          })
    .catch(error => console.error(error)) 

}


function getArtist(idArtist){
    return fetch("https://api.spotify.com/v1/search?q=Ciro&type=artist")
        .then(response => response.json())
        .then(data => {
            let resp = [];
            data.artists.items.forEach(e => {
                resp.push(new ArtistModel(e.id,e.name,e.genres[0],e.images.length>0 ? e.images[0].url : null))
                });
        return resp
          })
    .catch(error => console.error(error)) 

}

export { searchArtists, getArtist}