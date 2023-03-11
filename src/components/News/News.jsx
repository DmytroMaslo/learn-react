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
                    <div>
                        <div onClick={()=>props.onLikeNews(newsItem.id)}><BsFillHandThumbsUpFill /></div>
                        <div onClick={()=>props.onRemoveNews(newsItem.id)}><MdDelete /></div>
                    </div>
                    
                </div>
                <div> likes: {newsItem.likes}</div>
            </div>))}
        </div>
    )
}

export default News;