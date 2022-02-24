import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';



function Header(props: any) {
    return <header className={s.header} >
        <div className={s.loginBlock}>
            {
                !props.isAuth ? 'props.login'
                    : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>

}

export default Header
