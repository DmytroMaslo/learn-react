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
            {portionNumber>1 ?<button onClick={() => { setPortionNumber(portionNumber - 1) }}><BsArrowLeftShort /></button>: null }
            

            {pages.filter(p => p >= leftBorder && p <= rightBorder)
                .map(p => <span className={p == props.currentPage ? styles.currentPage : null}
                    onClick={() => { props.onPageChanged(p) }} >{p}
                </span>)}
                {protionCount>portionNumber ?  <button onClick={() => { setPortionNumber(portionNumber + 1) }}><BsArrowRightShort /></button> : null}
        </div>
    )
}


export default Paginator;