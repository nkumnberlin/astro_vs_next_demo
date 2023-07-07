'use client'

import confetti from 'canvas-confetti';
import {KeyboardEvent, useState} from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";

function Searchbar({router}: {router: AppRouterInstance}) {
    const [song, setSong] = useState<string>('')
    const explosion = () => confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
            x: Math.random(),
            y: Math.random() - 0.2
        }
    });

    const navigate = () => router.push(song)

    const onEnterPress = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            navigate()
        }
    }

    return (
        <div>
            <form>
                <label form="name" style={{color: 'white', paddingRight: '1rem'}}>Search a Song</label>
                <input type="text" id="name" name="name" onInput={(val) => {
                    explosion()
                    setSong(val.currentTarget.value)
                }}/><br/><br/>
            </form>
            <button data-confetti-button="" type="submit" value="submit" onKeyPress={onEnterPress}
                    onClick={navigate}>Search!
            </button>
        </div>
    )
}

export default Searchbar

