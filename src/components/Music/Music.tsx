import React, { useState } from 'react';
import styles from './Music.module.css'


function Music(props: any) {

    const [switchOnOff, setSwitchOnOff] = useState(false)

    let url = "http://streaming.tdiradio.com:8000/house.mp3";

    let audio = new Audio(url);

    const handleOnOffClick = () => {
        if (switchOnOff === false) {
            setSwitchOnOff(true)
            audio.pause()
        } else {
            setSwitchOnOff(false)
            audio.play()
        }
    }

    return (
        <div className={styles.pleer}>
            <div>
                <div className={styles.item}>Radio📻</div>
            </div>
            <button
                onClick={() => handleOnOffClick()}
            >
                {
                    !switchOnOff ? <h2>▶️</h2> : <h2>⏸️</h2>
                }
            </button>
        </div>
    )
}


export default Music
