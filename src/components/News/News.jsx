import React from "react"
import styles from "./News.module.css"
import { MdDelete } from "react-icons/md";
import { BsFillHandThumbsUpFill } from "react-icons/bs";


const News = (props) => {

    return (
        <div>
            {props.news.map((newsItem) => (<div key={newsItem.id} className={styles.newsItem}>
                <div >

                    <h3>{newsItem.title}</h3>
                    <div>{newsItem.description}</div>

                </div>
                <div className={styles.panel}>
                    <div><BsFillHandThumbsUpFill /></div>
                    <div><MdDelete /></div>
                    <div></div>
                </div>
            </div>))}
        </div>
    )
}

export default News;