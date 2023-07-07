import {Song} from "@/interfaces/Song";
import Image from "next/image";
import styles from './SongText.module.css'
import React from "react";

function SongText({song}: { song: Song }) {
    return(
        <div className={styles.linkCard}>
            <div>
                <h2 className={styles.h2}>{song.title}</h2>
                <p className={styles.p}>Album: {song.album}</p>
                <p className={styles.p}>Artist: {song.artist}</p>
                {song.img && <Image className={styles.img} src={song.img} height={500} width={500} alt={song.title} />}
                <pre>{song.songtext}</pre>
            </div>
        </div>
    )
}

export default SongText;


