export default class Album {
    constructor(id, name, genere, urlCover){
        this.id = id;
        this.name = name;
        this.genere = genere;
        this.urlCover = urlCover;
        this.albums = [];
    }

    get id(){
        return this.id;
    }
    set id(newId){
        this._id = newId;
    }
    
    get name(){
        return this.name;
    }
    set name(newName){
        this._name = newName;
    }

    get genere(){
        return this.genere;
    }
    set genere(newGenere){
        this._genere = newGenere;
    }

    get urlCover(){
        return this.urlCover;
    }
    set urlCover(newUrlCover){
        this._urlCover = newUrlCover;
    }

    get albums(){
        return this.albums;
    }

    addAlbum(album){
        this._albums.push(album);
    }
}