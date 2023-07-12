import webinyClient from "../client";
import type {Song} from "../../interfaces/Song";
import {fetchSongQuery} from "../querys/fetchSong";

async function fetchSong(id: string) {
    const response = await webinyClient(fetchSongQuery(id));
    const song: Song = response.listSongs.data
    return song satisfies Song;
}

export default fetchSong
