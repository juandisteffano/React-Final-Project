export default class Album {
    constructor(id, name, artist, artistId, year, urlCover){
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.artistId = artistId;
        this.year = year;
        this.urlCover = urlCover;
        this.tracks = [];
    }

    get id(){
        return this._id;
    }
    set id(newId){
        this._id = newId;
    }
    
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }

    get artist(){
        return this._artist;
    }
    set artist(newArtist){
        this._artist = newArtist;
    }

    get artistId(){
        return this._artistId;
    }
    set artistId(newArtistId){
        this._artistId = newArtistId;
    }

    get year(){
        return this._year;
    }
    set year(newYear){
        this._year = newYear;
    }

    get urlCover(){
        return this._urlCover;
    }
    set urlCover(newUrlCover){
        this._urlCover = newUrlCover;
    }

    get tracks(){
        return this._tracks;
    }

    set tracks(tracks){
        this._tracks = tracks;
    }

    addTrack(track){
        this._tracks.push(track);
    }
}