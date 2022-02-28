import React from 'react'
import { NavLink } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import s from './Header.module.css';



function Header(props: any) {
    return <header className={s.header}>
        <Calendar />
        <div className={s.loginBlock}>
            {
                !props.isAuth ? 'login'
                    : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>

}

export default Header
