

import React from 'react'
import s from './Paginator.module.css';

type PropsType = {
    pageSize: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}
function Paginator(props: PropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => {
            return <span className={ props.currentPage ===  p ? s.selectedPage : '' }
                onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
        })}
    </div>
}

export default Paginator
