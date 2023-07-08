const artistNameEl = document.getElementById('artist-name')?.value
const albumNameEl = document.getElementById('album-name')?.value






interface JazzAlbum {
  albumName: string
  artistName: string
  date: string
  recordLabel: string
}


function createJazzAlbum(albumName: string, artistName: string, date: string, recordLabel: string):JazzAlbum {
  const jazzAlbum: JazzAlbum = {
    albumName,
    artistName,
    date,
    recordLabel
  }


  return jazzAlbum
}



function saveJazzAlbumToLocalStorage(jazzAlbum: JazzAlbum): void {
  const jsonData = JSON.stringify(jazzAlbum);
  localStorage.setItem('jazzAlbum', jsonData);
}


function getJazzAlbumFromLocalStorage(): JazzAlbum | null {
  const jsonData = localStorage.getItem('jazzAlbum');
  if (jsonData) {
    return JSON.parse(jsonData);
  }
  return null;
}



const newAlbum = createJazzAlbum("Kind of blue", "Miles Davis", "1959", "Columbia Records")

console.log(newAlbum)
console.log(artistNameEl)
console.log(newAlbum)
