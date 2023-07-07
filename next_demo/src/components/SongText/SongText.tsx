import {Song} from "@/interfaces/Song";
import Image from "next/image";

function SongText({song}: { song: Song }) {
    return(
        <div className="linkCard">
            <div>
                <h2>{song.title}</h2>
                <p>Album: {song.album}</p>
                <p>Artist: {song.artist}</p>
                <Image src={song.img} height="500" width="500" alt="{song.title} Cover"/>
                <pre>{song.songtext}</pre>
            </div>
        </div>
    )
}

export default SongText;


