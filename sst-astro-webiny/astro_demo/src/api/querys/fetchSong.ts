export const fetchSongQuery = (id: string) => `
{
  listSongs(where: {title: "${id}"}){
    data {
      entryId
      title
      artist
      album
      img
      songtext
    }
  }
}
`
