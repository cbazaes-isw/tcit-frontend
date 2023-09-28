import React from 'react';
import PostForm from './postForm';

const PostCreate = () => {
  const handleOnSubmit = (post) => {
    console.log(post);
  };

  return (
    <React.Fragment>
      <PostForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default PostCreate;