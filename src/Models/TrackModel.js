export default class TrackModel {
    constructor(id, name, artist, album, urlCover){
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.album = album;
        this.urlCover = urlCover;
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

    get album(){
        return this._album;
    }
    set album(newAlbum){
        this._album = newAlbum;
    }

    get urlCover(){
        return this._urlCover;
    }
    set urlCover(newUrlCover){
        this._urlCover = newUrlCover;
    }
}