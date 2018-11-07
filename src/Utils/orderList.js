export default function sortSongsDuration(songs, orderBy){
    let res = [];
    if (orderBy === "Asc"){
        res = res.concat(songs.sort(durationCompareAsc));
    };
    if (orderBy === "Desc"){
        res = res.concat(songs.sort(durationCompareDesc));
    };
    return res;
}

function durationCompareAsc(a,b) {
    if (a._duration < b._duration)
      return -1;
    if (a._duration > b._duration)
      return 1;
    return 0;
}

function durationCompareDesc(a,b) {
    if (a._duration < b._duration)
      return 1;
    if (a._duration > b._duration)
      return -1;
    return 0;
}
  