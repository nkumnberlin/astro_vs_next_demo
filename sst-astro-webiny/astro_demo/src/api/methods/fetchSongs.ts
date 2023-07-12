import webinyClient from "../client";
import {fetchSongsQuery} from "../querys/fetchSongs";
import type {Song} from "../../interfaces/Song";

async function fetchSongs() {
    const response = await webinyClient(fetchSongsQuery);
    const songs: Song[] = response.listSongs.data
    return songs satisfies Song[];
}

export default fetchSongs
