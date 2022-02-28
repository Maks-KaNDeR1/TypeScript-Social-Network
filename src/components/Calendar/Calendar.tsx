import React, { useEffect, useState } from 'react';


function CurrentTime() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let hour = h < 10 ? '0' + h : h
    let min = m < 10 ? '0' + m : m
    let sec = s < 10 ? '0' + s : s

    let d = date.getDate()
    let mn = date.getMonth() + 1

    let month = mn < 10 ? '0' + mn : mn
    let day = d < 10 ? '0' + d : d

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, []);

    return (
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* <h1> {day} {month}  </h1> */}
            <h2 style={{marginTop:'0px', color: 'aqua' }}
            > {hour} : {min} : {sec}
            </h2>
        </div>
    )

}

function Calendar() {


    return <div>
        <CurrentTime />
    </div>;
}

export default Calendar;
