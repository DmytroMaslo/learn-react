const ADD_NEWS = 'ADD-NEWS';
const REMOVE_NEWS = 'REMOVE-NEWS';
const LIKE_NEWS = 'LIKE_NEWS';



let initialState = {
    news: [
        { id: 1, title: 'Lorem ipsumirst', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque quis elit in placerat.', text: '', views: 0, likes: 0, isLiked: false },
        { id: 2, title: 'Duis dictum', description: 'Duis dictum est in hendrerit sagittis. Sed eget sem eget leo sagittis viverra vitae a felis.', text: '', views: 0, likes: 0, isLiked: false },
        { id: 3, title: 'Nunc molestie', description: 'Nunc molestie nunc convallis sem venenatis scelerisque. Curabitur cursus pulvinar vestibulum. Sed malesuada massa lacus', text: '', views: 0, likes: 0, isLiked: false },
        { id: 4, title: 'Duis id', description: 'Duis id odio a odio venenatis varius ut quis odio. Sed lectus nisi, maximus in imperdiet non, luctus id felis', text: '', views: 0, likes: 0, isLiked: false },
        { id: 5, title: 'Phasellus sagittis est', description: 'Phasellus sagittis est vel leo dignissim euismod. ', text: '', views: 0, likes: 0, isLiked: false },
        { id: 6, title: 'Etiam lobortis enim ', description: 'Etiam lobortis enim id mattis commodo.', text: '', views: 0, likes: 0, isLiked: false },
        { id: 7, title: 'Proin egestas,', description: 'Proin egestas, mi vel vehicula malesuada', text: '', views: 0, likes: 0, isLiked: false },
        { id: 8, title: 'Nulla id', description: 'Nulla id pellentesque felis. ', text: '', views: 0, likes: 0, isLiked: false },
    ],

}
const newsRemove = (arr, value) => {


}
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS: {
            return {
                ...state,
                news: [...state.news, action.newNews]
            }
        }
        case REMOVE_NEWS: {
            return {
                ...state,
                news: state.news.filter((ele) => {
                    return ele.id != action.newsId;
                })
            }
        }
        case LIKE_NEWS: {
            return {
                ...state,
                news: state.news.map(
                    (newsItem) => newsItem.id === action.newsId && newsItem.isLiked===false ? { ...newsItem, likes: newsItem.likes + 1, isLiked:true }
                        : newsItem
                )
            }
        }
        default:
            return state
    }
}
export const addNews = (newNews) => ({ type: ADD_NEWS, newNews: { id: 9, title: 'Add new news', description: 'some description', text: 'Long long text', views: 0 } })
export const removeNews = (newsId) => ({ type: REMOVE_NEWS, newsId })
export const likeNews = (newsId) => {
    return { type: LIKE_NEWS, newsId }
}



export default newsReducer;