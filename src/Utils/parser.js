//Model
import ArtistModel from '../Models/ArtistModel'
import AlbumModel from '../Models/AlbumModel'
import TrackModel from '../Models/TrackModel'

//Api
import { fetchSearchArtists, fetchArtist, fetchArtistAlbums, fetchAlbum, fetchAlbumTracks } from '../api/api'

//Assets 
import defaultLogo from '../assets/defaultImg.PNG'

function searchArtists(artist,config){
    return fetchSearchArtists(artist,config)
        .then(data => {
            let resp = [];
            data.artists.items.forEach(e => {
                resp.push(new ArtistModel(e.id,e.name,e.genres,e.images.length>0 ? e.images[0].url : defaultLogo))
                });
                
            return resp
          })
        .catch(error => console.error(error)) 
}

function getArtist(idArtist,config){
    return fetchArtist(idArtist,config)
        .then(async (data) => {
            let artist = new ArtistModel(data.id,data.name,data.genres,data.images.length>0 ? data.images[0].url : defaultLogo);
            
            const albums = await fetchArtistAlbums(idArtist,config);
            albums.items.forEach(e => {
                artist.addAlbum(new AlbumModel(e.id, e.name, e.artists[0].name, e.artists[0].id, e.release_date, e.images.length>0 ? e.images[0].url : defaultLogo))
                });
    
            return artist
          })
    .catch(error => console.error(error)) 

}



function getAlbum(idAlbum,config){
    return fetchAlbum(idAlbum,config)
        .then(async (data) => {
            let album = new AlbumModel(data.id, data.name, data.artists[0].name, data.artists[0].id, data.release_date, data.images.length>0 ? data.images[0].url : defaultLogo)
            
            const tracks = await fetchAlbumTracks(idAlbum,config);
            tracks.items.forEach(e => {
                album.addTrack(new TrackModel(e.id, e.name, e.artists[0].name, album.name, e.disc_number, e.track_number, album.urlCover, e.duration_ms, e.preview_url))
                });
            
            return album
          })
    .catch(error => console.error(error)) 

}

export { searchArtists, getArtist, getAlbum}