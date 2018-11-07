export default class ArtistModel {

    constructor(id, name, genres, urlCover){
        this.id = id;
        this.name = name;
        this.genres = genres;
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

    get genres(){
        let res = "";
        this._genres.forEach((element, index) => {
           // if(element.length < 20 && !res.includes(element)){
                if(index < this._genres.length-1)
                    res += capitalizeFirstLetter(element) + " - "
                else{
                    res += element;
                }
            //}
        });
        return res;
    }
    set genres(newGenres){
        this._genres = newGenres;
    }
    addGenres(genres){
        this._genres.push(genres);
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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}