import { NavLink } from 'react-router-dom'
import styles from './../Dialogs.module.css'

type PropsType = {
    id: number
    name: string
    src: string
}


const DialogItem: React.FC<PropsType> = ({ id, name, src }) => {

    const path = "/dialogs/" + id;

    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <img src={src} alt='ava' />
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}


export default DialogItem


