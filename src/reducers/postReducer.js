import { ADD_POST, DELETE_POST } from "../actionTypes/actionTypes";

const initialState = {
    posts: []
}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:

            state.posts.push(action.payload);

            return { ...state };

        case DELETE_POST:

            let postIndex = state.posts.findIndex(p => p.id === action.payload.id);
            state.posts.splice(postIndex);

            return { ...state };

        default:
            return state;
    }
};