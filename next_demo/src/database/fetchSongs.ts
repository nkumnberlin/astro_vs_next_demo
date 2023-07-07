import SONGS from '../assets/tmpSongs.json'
import type {Song} from "../interfaces/Song";


export default function fetchSongs(): Song[]{
    return SONGS as Song[]
}
