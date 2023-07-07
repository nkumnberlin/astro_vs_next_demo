import SONGS from "../assets/tmpSongs.json";

export default function fetchSong(id: string) {
    return SONGS.find((song)=> song.title.toLowerCase() === id.toLowerCase());
}
