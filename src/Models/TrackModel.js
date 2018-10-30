export default class TrackModel {

    constructor(id, name, artist, album, albumDiscNumber, trackNumber, urlCover, duration, urlPreviewAudio){
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.album = album;
        this.albumDiscNumber = albumDiscNumber;
        this.trackNumber = trackNumber;
        this.urlCover = urlCover;
        this.duration = duration;
        this.urlPreviewAudio = urlPreviewAudio;
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

    get albumDiscNumber(){
      return this._albumDiscNumber;
    }
    set albumDiscNumber(newAlbumDiscNumber){
      this._albumDiscNumber = newAlbumDiscNumber;
    }

    get trackNumber(){
        return this._trackNumber;
    }
    set trackNumber(newTrackNumber){
        this._trackNumber = newTrackNumber;
    }

    get urlCover(){
      return this._urlCover;
    }
    set urlCover(newUrlCover){
        this._urlCover = newUrlCover;
    }

    get duration(){
      return this._duration;
    }
    set duration(newDuration){
        this._duration = newDuration;
    }

    get urlPreviewAudio(){
      return this._urlPreviewAudio;
    }
    set urlPreviewAudio(newUrlPreviewAudio){
        this._urlPreviewAudio = newUrlPreviewAudio;
    }
    
}

export function parseToTrackModel(object){
  let trackModel = new TrackModel();
  Object.assign(trackModel, object)
  return trackModel;
}
