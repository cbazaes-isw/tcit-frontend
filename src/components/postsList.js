import React from 'react';
import PostListItem from './postListItem';
import { useSelector } from 'react-redux'

const PostsList = () => {

  const posts = useSelector(state => state.filter ? state.filtered : state.posts)

  // console.log('PostsList', posts);

  return <table>
    < thead >
      <tr>
        <th>Nombre</th>
        <th>Descripcion</th>
        <th>Acción</th>
      </tr>
    </thead >
    <tbody>
      {posts.map(post => <PostListItem key={post.id} post={post} />)}
    </tbody>
  </table >
};

export default PostsList;