import React from 'react'
import { FaCogs, FaFacebookMessenger, FaMusic, FaRegCalendarAlt, FaRegUserCircle, FaUsers } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

function Navbar() {
    return (
        <div className={s.nav}>
            <div className={s.item} >
                <FaRegUserCircle style={styleIcon} />
                <NavLink to="/profile/">Profile</NavLink>
            </div>
            <div className={s.item}>
                <FaFacebookMessenger style={styleIcon} />
                <NavLink to="/dialogs/">Messages</NavLink>
            </div>
            <div className={s.item}>
                <FaFacebookMessenger style={styleIcon} />
                <NavLink to="/chat/">Chat</NavLink>
            </div>
            <div className={s.item}>
                <FaMusic style={styleIcon} />
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <FaUsers style={styleIcon} />
                <NavLink to="/users">Users</NavLink>
            </div>
            <div className={s.item}>
                <FaCogs style={styleIcon} />
                <NavLink to="/setting">Setting</NavLink>
            </div>
            <div className={s.item}>
                <FaRegCalendarAlt style={styleIcon} />
                <NavLink to="/calendar">Сalendar</NavLink>
            </div>
        </div>
    )
}


let styleIcon: React.CSSProperties = {
    color: 'rgb(56, 0, 0)'
}


export default Navbar
