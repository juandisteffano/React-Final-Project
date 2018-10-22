export default class ArtistModel {
    constructor(id, name, genere, urlCover){
        this.id = id;
        this.name = name;
        this.genere = genere;
        this.urlCover = urlCover;
        this.albums = [];
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

    get genere(){
        return this._genere;
    }
    set genere(newGenere){
        this._genere = newGenere;
    }

    get urlCover(){
        return this._urlCover;
    }
    set urlCover(newUrlCover){
        this._urlCover = newUrlCover;
    }

    get albums(){
        return this._albums;
    }

    set albums(albums){
        this._albums = albums;
    }

    addAlbum(album){
        this._albums.push(album);
    }
}