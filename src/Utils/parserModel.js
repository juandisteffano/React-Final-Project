//Model
import ArtistModel from '../Models/ArtistModel'

//Api
import { fetchSearchArtists, fetchArtist, fetchAlbum } from '../api/api'

//Assets 
import defaultLogo from '../assets/defaultImg.PNG'

function searchArtists(artist){
    return fetchSearchArtists(artist)
        .then(data => {
            let resp = [];
            data.artists.items.forEach(e => {
                resp.push(new ArtistModel(e.id,e.name,e.genres[0],e.images.length>0 ? e.images[0].url : defaultLogo))
                });
                
            return resp
          })
        .catch(error => console.error(error)) 
}

function getArtist(idArtist){
    return fetchArtist(idArtist)
        .then(data => {
            //nuevo artista
            //Cargar albums
            //Devolver Artista
            let resp = [];
            data.artists.items.forEach(e => {
                resp.push(new ArtistModel(e.id,e.name,e.genres[0],e.images.length>0 ? e.images[0].url : null))
                });
            return resp
          })
    .catch(error => console.error(error)) 

}

function getAlbum(idAlbum){
    return fetchAlbum(idAlbum)
        .then(data => {
            //nuevo album
            //Cargar tracks
            //Devolver album
            let resp = [];
            data.artists.items.forEach(e => {
                resp.push(new ArtistModel(e.id,e.name,e.genres[0],e.images.length>0 ? e.images[0].url : null))
                });
            return resp
          })
    .catch(error => console.error(error)) 

}

export { searchArtists, getArtist, getAlbum}