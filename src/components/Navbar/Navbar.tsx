import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.nav}>
            <div className={`${styles.item} ${styles.active}`} >
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/users">Users</NavLink>
            </div>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/setting">Setting</NavLink>
            </div>
        </div>
    )
}

export default Navbar
