
//Config
import config from '../config' 

function fetchSearchArtists(artist){
    const url = config.baseUrl + "search?q=" + artist + "&type=artist"
    return fetchData(url); 
}


function fetchArtist(idArtist){
    const url = config.baseUrl + "/artist/" + idArtist; 
    return fetchData(url); 
}

function fetchAlbum(idAlbum){
    const url = config.baseUrl + "/albums/" + idAlbum; 
    return fetchData(url); 
}

function fetchAlbumTracks(idAlbum){
    const url = config.baseUrl + "/albums/" + idAlbum + "/tracks"; 
    return fetchData(url); 
}


function fetchData(url){
    return fetch(url, config.options)
        .then(response => response.json())
        .then(data => {return data})
    .catch(error => console.error(error)) 
}

export { fetchSearchArtists, fetchArtist , fetchAlbum , fetchAlbumTracks}