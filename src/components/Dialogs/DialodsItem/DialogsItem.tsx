import { NavLink } from 'react-router-dom'
import styles from './../Dialogs.module.css'

type DialodsItemPropsType = {
    id: number
    name: string
    src: string
}


const DialogItem = (props: DialodsItemPropsType) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <img src={props.src} alt='ava' />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem


