import { NavLink } from 'react-router-dom'
import styles from './../Dialogs.module.css'

type DialodsItemPropsType = {
    id: number
    name: string
    src: string
}


const DialogItem = (props: DialodsItemPropsType) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <img src={props.src} />
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem


