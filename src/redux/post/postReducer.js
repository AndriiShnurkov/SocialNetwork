import { ADD_POST, DELETE_POST, EDIT_POST } from './postTypes'

const postInitialState = {
    posts: [],
    post: {}
};

const postReducer = (state = postInitialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return { ...state, posts: [...state.posts, action.payload] };
        case DELETE_POST:
            return { ...state, posts: [...state.posts.filter(post => post.id !== action.payload)] };
        case EDIT_POST:
            return { ...state, posts: [...state.posts.filter(post => post.id !== action.payload.id), action.payload.post] };
        default:
            return state;
    }
};

export default postReducer;
