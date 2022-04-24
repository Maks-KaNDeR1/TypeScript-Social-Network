import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

function Header(props: PropsType) {
    return <header className={s.header}>
        <div className={s.loginBlock}>
            {
                props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to='/login' > Login </NavLink>
            }
        </div>
    </header>

}

export default Header
