export const ADD_POST = "ADD_POST";
export const POST_ADDED = "POST_ADDED";
export const DELETE_POST = "DELETE_POST";
export const POST_DELETED = "POST_DELETED";
export const FILTER_POSTS = "FILTER_POSTS";

const addPost = (post) => {
  return {
    type: ADD_POST,
    post
  };
};

const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id
  };
};

const filterPost = (query) => {
  return {
    type: FILTER_POSTS,
    query
  };
};

export { addPost, deletePost, filterPost };