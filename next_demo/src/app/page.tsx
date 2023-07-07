'use client'
import styles from './page.module.css'
import Searchbar from "@/components/Searchbar/Searchbar";
import Card from "@/components/Card";
import React from "react";
import fetchSongs from "../database/fetchSongs";
import {useRouter} from "next/navigation";

export default function Home() {
    const songs = fetchSongs();
    const router = useRouter()

    return (
        <main className={styles.main}>
            <Searchbar router={router}/>
            <ul role="list" className={styles.linkCardGrid}>
                {songs.map(({title, img, artist}) => <Card
                    key={title}
                    href={title}
                    title={title}
                    body={artist}
                    image={img}
                />)}
            </ul>
        </main>
    )
}
