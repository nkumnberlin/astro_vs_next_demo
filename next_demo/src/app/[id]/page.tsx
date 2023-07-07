import React from "react";
import fetchSong from "../../database/fetchSong";
import SongText from "@/components/SongText/SongText";
import {Song} from "../../interfaces/Song";

function SongTextView({params}: {params: {id: string}}) {
    const {id} = params
    const song: Song | undefined = fetchSong(id)
    return (
        <>
            <p style={{color: 'white', paddingTop: '1rem'}}></p>
            {song ? <SongText song={song}/> : <p style={{color: 'white'}}>Oh well, that is sad. No song found</p>}
        </>
    )
}

export default SongTextView
