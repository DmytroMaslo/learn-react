import React from "react";
import { addNews,likeNews,removeNews } from "../../redux/news-reducer";
import News from "./News";
import { connect } from "react-redux";
let mapStateToProps = (state) => {

    return {
        news: state.newsPage.news,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onAddNews: (news) => {
            dispatch(addNews(news))
        },
        onRemoveNews: (newsId) => {
            dispatch(removeNews(newsId))
        },
        onLikeNews:(newsId)=>{
            dispatch(likeNews(newsId))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(News);
