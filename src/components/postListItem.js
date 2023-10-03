import React from 'react';
import { useDispatch } from 'react-redux'
import { removePost } from '../features/postsSlice'

const PostListItem = ({ post }) => {

    console.log('PostListItem', post);

    const dispatch = useDispatch();

    if (!post) return

    const onClick = async (id) => {

        // Dispatching post delete instruction.
        await dispatch(removePost(id));

    };

    return <tr key={post.id}>
        <td>{post.nombre}</td>
        <td>{post.descripcion}</td>
        <td><button onClick={() => onClick(post.id)}>Eliminar</button></td>
    </tr>
};

export default PostListItem;