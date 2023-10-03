import React from 'react';
import PostListItem from './postListItem';
import { useSelector } from 'react-redux'

const PostsList = () => {

  // This list needs to be updated each time a post
  // creation, post elimination or post filtering ocurrs.
  const posts = useSelector(state => state.filter ? state.posts.filter(p => p.nombre.includes(state.filter)) : state.posts);

  return <table>
    <thead >
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