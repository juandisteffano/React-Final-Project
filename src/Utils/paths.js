function getArtistSearchViewPahts(artistSearchKey) {
    return ([{
            key: "Home", 
            value: "/home"
        },
        {
            key: "Artist", 
            value: '/search/' + artistSearchKey
        },
    ])
}


function getArtistViewPahts(artistSearchKey, artistId, artistName) {
    let res = getArtistSearchViewPahts(artistSearchKey);
    res.push({
        key: artistName,
        value: '/artist/' + artistId
    })
    return (res)
}
  
function getAlbumViewPahts(artistSearchKey, artistId, artistName, albumId, albumName) {
    let res = getArtistViewPahts(artistSearchKey, artistId, artistName);
    res.push({
        key: albumName,
        value: '/album/' + albumId
    })
    return (res)
}

export { getArtistSearchViewPahts , getArtistViewPahts , getAlbumViewPahts }