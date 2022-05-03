
import React, { useState } from 'react'
import styles from './Paginator.module.css';
import cn from "classnames";

type PaginatorPropsType = {
    pageSize: number
    totalItemsCount: number
    onPageChanged: (pageNumber: number) => void
    currentPage?: number
    portionSize?: number
}
const Paginator: React.FC<PaginatorPropsType> = (
    {
        pageSize, totalItemsCount, onPageChanged,
        currentPage, portionSize = 20,
    }
) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    

    return <div className={cn(styles.paginator)}>
        {/* <button onClick={(e) => { onPageChanged(1)}} >{'<<'}</button> */}
        <button className={styles.buttonPrev}
            disabled={portionNumber < 2}
            onClick={() => { setPortionNumber(portionNumber - 1) }}
        >
           {'<PREV'}
        </button>
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <button 
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p);
                    }}>{p}</button>
            })}
        <button className={styles.buttonNext}
        style={{opacity:  portionCount < portionNumber + 1 ? '0.1' : ''}}
            disabled={portionCount < portionNumber + 1}
            onClick={() => { setPortionNumber(portionNumber + 1) }}
        >
            {'NEXT>'}
        </button>
        {/* <button onClick={(e) => { onPageChanged(pagesCount)}}  >{'>>'}</button> */}
    </div>
}

export default Paginator
