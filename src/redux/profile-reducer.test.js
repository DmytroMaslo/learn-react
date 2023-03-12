import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, post: 'Hi! first message', likes: 3 },
        { id: 2, post: 'Using props!', likes: 5 },
        { id: 3, post: 'How are you?', likes: 7 },
        { id: 4, post: 'Spam message', likes: 4 },
        { id: 5, post: 'Just another post', likes: 9 },
        { id: 6, post: 'More post is better', likes: 13 },
    ]
}
it('length of post should be incremented', () => { 
    let newState = profileReducer(state, addPostActionCreator('test text'))
    expect(newState.posts.length).toBe(7)
})

it('text should be correct', () => { 
    let newState = profileReducer(state, addPostActionCreator('Some new post'))
    expect(newState.posts[6].post).toBe('Some new post')
})

it('length of post should be decremented', () => { 
    let newState = profileReducer(state, deletePost(2))
    expect(newState.posts.length).toBe(5)
})
