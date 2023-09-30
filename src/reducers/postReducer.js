import { ADD_POST, DELETE_POST, FILTER_POSTS } from "../actions/postActions";

const initialState = {
    filter: "",
    posts: [],
    filtered: []
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:

            let postsAfterAdding = [...state.posts, action.post];

            return {
                ...state,
                posts: postsAfterAdding
            };

        case DELETE_POST:

            let postIndex = state.posts.findIndex(p => p.id === action.id);
            let postsAfterDeleting = [...state.posts];
            postsAfterDeleting.splice(postIndex);

            return {
                ...state,
                posts: postsAfterDeleting
            };

        case FILTER_POSTS:

            let filteredPosts = state.posts.filter(p => p.includes(action.query));

            return {
                ...state,
                filtered: filteredPosts
            };

        default:

            return state;

    }
};