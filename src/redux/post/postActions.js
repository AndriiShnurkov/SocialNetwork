import { ADD_POST, DELETE_POST, EDIT_POST } from './postTypes'

const addPost = (post) => ({
    type: ADD_POST,
    payload: post
});

const deletePost = (id) => ({
    type: DELETE_POST,
    payload: id
})

const editPost = (id, post) => ({
    type: EDIT_POST,
    payload: { id, post }
})

export { addPost, deletePost, editPost }
