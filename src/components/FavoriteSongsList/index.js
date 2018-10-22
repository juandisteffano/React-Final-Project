import React, { Component } from 'react';

//CSS
import './FavoriteSongsList.css'
//Components
import Track from '../Track'

class FavoriteSongsList extends Component {

    constructor(props){
        super(props)
        this.state = {
            favoriteSongsList: [{
                "album" : {
                  "album_type" : "album",
                  "artists" : [ {
                    "external_urls" : {
                      "spotify" : "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2DaxqgrOhkeH0fpeiQq2f4",
                    "id" : "2DaxqgrOhkeH0fpeiQq2f4",
                    "name" : "Oasis",
                    "type" : "artist",
                    "uri" : "spotify:artist:2DaxqgrOhkeH0fpeiQq2f4"
                  } ],
                  "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN", "ZA" ],
                  "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5WsCU95SaumguegxnC87TV"
                  },
                  "href" : "https://api.spotify.com/v1/albums/5WsCU95SaumguegxnC87TV",
                  "id" : "5WsCU95SaumguegxnC87TV",
                  "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/f2edfb64c847c6655fe32b32d6aa485763e09c30",
                    "width" : 640
                  }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046",
                    "width" : 300
                  }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/1a92856d0708fe8be44ef07feb8f0bb14dc740e0",
                    "width" : 64
                  } ],
                  "name" : "Be Here Now",
                  "release_date" : "1997-08-21",
                  "release_date_precision" : "day",
                  "total_tracks" : 12,
                  "type" : "album",
                  "uri" : "spotify:album:5WsCU95SaumguegxnC87TV"
                },
                "artists" : [ {
                  "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4"
                  },
                  "href" : "https://api.spotify.com/v1/artists/2DaxqgrOhkeH0fpeiQq2f4",
                  "id" : "2DaxqgrOhkeH0fpeiQq2f4",
                  "name" : "Oasis",
                  "type" : "artist",
                  "uri" : "spotify:artist:2DaxqgrOhkeH0fpeiQq2f4"
                } ],
                "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN", "ZA" ],
                "disc_number" : 1,
                "duration_ms" : 462226,
                "explicit" : false,
                "external_ids" : {
                  "isrc" : "GBBQY9700017"
                },
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/track/3SuDVRoeAU00LbpCeMgxGx"
                },
                "href" : "https://api.spotify.com/v1/tracks/3SuDVRoeAU00LbpCeMgxGx",
                "id" : "3SuDVRoeAU00LbpCeMgxGx",
                "is_local" : false,
                "name" : "D'You Know What I Mean?",
                "popularity" : 46,
                "preview_url" : "https://p.scdn.co/mp3-preview/c195452af791a59cda23c188f185c4ce43dbf572?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number" : 1,
                "type" : "track",
                "uri" : "spotify:track:3SuDVRoeAU00LbpCeMgxGx"
              },
              {
                "album" : {
                  "album_type" : "album",
                  "artists" : [ {
                    "external_urls" : {
                      "spotify" : "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2DaxqgrOhkeH0fpeiQq2f4",
                    "id" : "2DaxqgrOhkeH0fpeiQq2f4",
                    "name" : "Oasis",
                    "type" : "artist",
                    "uri" : "spotify:artist:2DaxqgrOhkeH0fpeiQq2f4"
                  } ],
                  "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN", "ZA" ],
                  "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5WsCU95SaumguegxnC87TV"
                  },
                  "href" : "https://api.spotify.com/v1/albums/5WsCU95SaumguegxnC87TV",
                  "id" : "5WsCU95SaumguegxnC87TV",
                  "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/f2edfb64c847c6655fe32b32d6aa485763e09c30",
                    "width" : 640
                  }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046",
                    "width" : 300
                  }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/1a92856d0708fe8be44ef07feb8f0bb14dc740e0",
                    "width" : 64
                  } ],
                  "name" : "Be Here Now",
                  "release_date" : "1997-08-21",
                  "release_date_precision" : "day",
                  "total_tracks" : 12,
                  "type" : "album",
                  "uri" : "spotify:album:5WsCU95SaumguegxnC87TV"
                },
                "artists" : [ {
                  "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4"
                  },
                  "href" : "https://api.spotify.com/v1/artists/2DaxqgrOhkeH0fpeiQq2f4",
                  "id" : "2DaxqgrOhkeH0fpeiQq2f4",
                  "name" : "Oasis",
                  "type" : "artist",
                  "uri" : "spotify:artist:2DaxqgrOhkeH0fpeiQq2f4"
                } ],
                "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN", "ZA" ],
                "disc_number" : 1,
                "duration_ms" : 302600,
                "explicit" : false,
                "external_ids" : {
                  "isrc" : "GBBQY9700006"
                },
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/track/7KtsHby5D21gJbLGH5Jymo"
                },
                "href" : "https://api.spotify.com/v1/tracks/7KtsHby5D21gJbLGH5Jymo",
                "id" : "7KtsHby5D21gJbLGH5Jymo",
                "is_local" : false,
                "name" : "My Big Mouth",
                "popularity" : 40,
                "preview_url" : "https://p.scdn.co/mp3-preview/9b0141bae9b1c4b9a43e1e41f1112df880ff190c?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number" : 2,
                "type" : "track",
                "uri" : "spotify:track:7KtsHby5D21gJbLGH5Jymo"
              },
              {
                "album" : {
                  "album_type" : "album",
                  "artists" : [ {
                    "external_urls" : {
                      "spotify" : "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2DaxqgrOhkeH0fpeiQq2f4",
                    "id" : "2DaxqgrOhkeH0fpeiQq2f4",
                    "name" : "Oasis",
                    "type" : "artist",
                    "uri" : "spotify:artist:2DaxqgrOhkeH0fpeiQq2f4"
                  } ],
                  "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN", "ZA" ],
                  "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5WsCU95SaumguegxnC87TV"
                  },
                  "href" : "https://api.spotify.com/v1/albums/5WsCU95SaumguegxnC87TV",
                  "id" : "5WsCU95SaumguegxnC87TV",
                  "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/f2edfb64c847c6655fe32b32d6aa485763e09c30",
                    "width" : 640
                  }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046",
                    "width" : 300
                  }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/1a92856d0708fe8be44ef07feb8f0bb14dc740e0",
                    "width" : 64
                  } ],
                  "name" : "Be Here Now",
                  "release_date" : "1997-08-21",
                  "release_date_precision" : "day",
                  "total_tracks" : 12,
                  "type" : "album",
                  "uri" : "spotify:album:5WsCU95SaumguegxnC87TV"
                },
                "artists" : [ {
                  "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4"
                  },
                  "href" : "https://api.spotify.com/v1/artists/2DaxqgrOhkeH0fpeiQq2f4",
                  "id" : "2DaxqgrOhkeH0fpeiQq2f4",
                  "name" : "Oasis",
                  "type" : "artist",
                  "uri" : "spotify:artist:2DaxqgrOhkeH0fpeiQq2f4"
                } ],
                "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN", "ZA" ],
                "disc_number" : 1,
                "duration_ms" : 462226,
                "explicit" : false,
                "external_ids" : {
                  "isrc" : "GBBQY9700017"
                },
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/track/3SuDVRoeAU00LbpCeMgxGx"
                },
                "href" : "https://api.spotify.com/v1/tracks/3SuDVRoeAU00LbpCeMgxGx",
                "id" : "3SuDVRoeAU00LbpCeMgxGx",
                "is_local" : false,
                "name" : "D'You Know What I Mean?",
                "popularity" : 46,
                "preview_url" : "https://p.scdn.co/mp3-preview/c195452af791a59cda23c188f185c4ce43dbf572?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number" : 1,
                "type" : "track",
                "uri" : "spotify:track:3SuDVRoeAU00LbpCeMgxGx"
              },
              {
                "album" : {
                  "album_type" : "album",
                  "artists" : [ {
                    "external_urls" : {
                      "spotify" : "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2DaxqgrOhkeH0fpeiQq2f4",
                    "id" : "2DaxqgrOhkeH0fpeiQq2f4",
                    "name" : "Oasis",
                    "type" : "artist",
                    "uri" : "spotify:artist:2DaxqgrOhkeH0fpeiQq2f4"
                  } ],
                  "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN", "ZA" ],
                  "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5WsCU95SaumguegxnC87TV"
                  },
                  "href" : "https://api.spotify.com/v1/albums/5WsCU95SaumguegxnC87TV",
                  "id" : "5WsCU95SaumguegxnC87TV",
                  "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/f2edfb64c847c6655fe32b32d6aa485763e09c30",
                    "width" : 640
                  }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/5fe478ce32d659d5b62391549d6b3496542cb046",
                    "width" : 300
                  }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/1a92856d0708fe8be44ef07feb8f0bb14dc740e0",
                    "width" : 64
                  } ],
                  "name" : "Be Here Now",
                  "release_date" : "1997-08-21",
                  "release_date_precision" : "day",
                  "total_tracks" : 12,
                  "type" : "album",
                  "uri" : "spotify:album:5WsCU95SaumguegxnC87TV"
                },
                "artists" : [ {
                  "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4"
                  },
                  "href" : "https://api.spotify.com/v1/artists/2DaxqgrOhkeH0fpeiQq2f4",
                  "id" : "2DaxqgrOhkeH0fpeiQq2f4",
                  "name" : "Oasis",
                  "type" : "artist",
                  "uri" : "spotify:artist:2DaxqgrOhkeH0fpeiQq2f4"
                } ],
                "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "RO", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "US", "UY", "VN", "ZA" ],
                "disc_number" : 1,
                "duration_ms" : 302600,
                "explicit" : false,
                "external_ids" : {
                  "isrc" : "GBBQY9700006"
                },
                "external_urls" : {
                  "spotify" : "https://open.spotify.com/track/7KtsHby5D21gJbLGH5Jymo"
                },
                "href" : "https://api.spotify.com/v1/tracks/7KtsHby5D21gJbLGH5Jymo",
                "id" : "7KtsHby5D21gJbLGH5Jymo",
                "is_local" : false,
                "name" : "My Big Mouth",
                "popularity" : 40,
                "preview_url" : "https://p.scdn.co/mp3-preview/9b0141bae9b1c4b9a43e1e41f1112df880ff190c?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number" : 2,
                "type" : "track",
                "uri" : "spotify:track:7KtsHby5D21gJbLGH5Jymo"
              },
            ],
        }
    }
    render() {
        
        const songs = this.state.favoriteSongsList.map( (song, index) => {
                return (
                    <Track track={song}></Track>
                )
            }
        )
        
        return (
            <section className="favoriteSongsList">
                <h2>Favorite Songs</h2>
                {songs.length>0 ? songs : "No Favorite songs"}            
            </section>
        )     
    }
}

export default FavoriteSongsList;
