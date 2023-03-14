import React, { useState } from "react";
import styles from './Paginator.module.css'
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
let Paginator = (props) => {

    //let [portionNumber,setPortionNumber] = useState(1)
    let [portionNumber, setPortionNumber] = useState(1)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let protionCount = Math.ceil(pagesCount / props.paginatorSize)
    let rightBorder = portionNumber * props.paginatorSize
    let leftBorder = rightBorder - props.paginatorSize

    return (

        <div className={styles.pagination}>
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}><BsArrowLeftShort /></button>

            {pages.filter(p => p >= leftBorder && p <= rightBorder)
                .map(p => <span className={p == props.currentPage ? styles.currentPage : null}
                    onClick={() => { props.onPageChanged(p) }} >{p}
                </span>)}
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}><BsArrowRightShort /></button>
        </div>
    )
}


export default Paginator;