import React from 'react'
import { FaCogs, FaCommentDots, FaFacebookMessenger, FaMusic, FaRegCalendarAlt, FaRegUserCircle, FaUsers } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {

    return (
        <div className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`} >
               <FaRegUserCircle />
                <NavLink to="/profile/">Profile</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
              <FaFacebookMessenger />
              {/* <FaCommentDots /> */}
                <NavLink to="/dialogs/">Messages</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
             <FaMusic />
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <FaUsers />
                <NavLink to="/users">Users</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <FaCogs  />
                <NavLink to="/setting">Setting</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
               <FaRegCalendarAlt />
                <NavLink to="/calendar">Сalendar</NavLink>
            </div>
        </div>
    )
}

export default Navbar
