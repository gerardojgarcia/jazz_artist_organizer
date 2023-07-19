const artistNameEl = document.getElementById('artist-name')?.value 
const albumNameEl = document.getElementById('album-name')?.value

const formBtn = document.getElementById('form-btn')






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

  const newAlbum = createJazzAlbum(jazzAlbum)
  const jsonData = JSON.stringify(jazzAlbum);
  localStorage.setItem('jazzAlbum', jsonData);

  console.log(newAlbum)
}


function getJazzAlbumFromLocalStorage(): JazzAlbum | null {
  const jsonData = localStorage.getItem('jazzAlbum');
  if (jsonData) {
    return JSON.parse(jsonData);
  }
  return null;
}





console.log(newAlbum)
console.log(artistNameEl)
console.log(newAlbum)


formBtn.addEventListener('click', function(){

  console.log(newAlbum)
})