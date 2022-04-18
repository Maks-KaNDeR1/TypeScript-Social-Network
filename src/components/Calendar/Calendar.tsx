import React, { useEffect, useState } from 'react';


function Calendar() {

    const [show, setShow] = useState<boolean>(false)
    const [ , setCounter] = useState(0)
    const [date, setDate] = useState<Date>()
    
    const stringTime = date?.toLocaleTimeString() || <br /> // fix with date
    const stringDate = date?.toLocaleDateString()


    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
            setCounter(state => state + 1)
        }, 1000)
    }, []);

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    return (

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* <h1> {day} {month}  </h1> */}
            <div 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <h2 style={{ marginTop: '0px', color: 'black' }}
                > {stringTime}
                </h2>
            </div>
            {show ? (
                <div>
                    <h1> {stringDate} </h1>
                </div>
            ) : <br />}
        </div>
    )

}


export default Calendar;
