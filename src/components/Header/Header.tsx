import React from 'react'
import { FaUserCheck, FaUserMinus } from 'react-icons/fa';
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
                props.isAuth ? <FaUserCheck style={{ margin: '4px' }} />
                    : <FaUserMinus style={{ margin: '4px' }} />
            }
            {
                props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <div><NavLink to='/login' > Login </NavLink> </div>
            }
        </div>
    </header>

}

export default Header
