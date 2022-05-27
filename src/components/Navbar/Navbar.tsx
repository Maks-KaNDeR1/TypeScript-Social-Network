import React from 'react'
import { FaCogs, FaCommentDots, FaFacebookMessenger, FaMusic, FaRegCalendarAlt, FaRegUserCircle, FaUsers } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.nav}>
            <div className={styles.item} >
               <FaRegUserCircle style={styleIcon} />
                <NavLink to="/profile/">Profile</NavLink>
            </div>
            <div className={styles.item}>
              <FaFacebookMessenger style={styleIcon} />
              {/* <FaCommentDots /> */}
                <NavLink to="/dialogs/">Messages</NavLink>
            </div>
            <div className={styles.item}>
             <FaMusic style={styleIcon} />
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={styles.item}>
                <FaUsers style={styleIcon} />
                <NavLink to="/users">Users</NavLink>
            </div>
            <div className={styles.item}>
                <FaCogs style={styleIcon} />
                <NavLink to="/setting">Setting</NavLink>
            </div>
            <div className={styles.item}>
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
