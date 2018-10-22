function getUrlAlbumImg(track, size){
    let url = null
    track.album.images.forEach(element => {
        if( size === element.height)
            url = element.url
    })
    return url;
}

function getAltAlbumImg(track){
    return "Album Cover " + getAlbumName(track) + " from " + getArtistName(track);
};

function getArtistName(track){
    return track.artists[0].name;
};

function getAlbumName(track){
    return track.album.name;
};

function getTrackName(track){
    return track.name;
};

export { getUrlAlbumImg, getAltAlbumImg, getArtistName, getAlbumName, getTrackName}