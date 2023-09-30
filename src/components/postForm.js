import React from 'react';
import { useDispatch } from 'react-redux'
import { addPost } from '../features/postsSlice'

let AddPost = () => {

    const dispatch = useDispatch();

    let nombre;
    let descripcion;

    return (
        <div>
            <form onSubmit={e => {
                
                e.preventDefault();

                if (!nombre.value.trim() || !descripcion.value.trim()) {
                    return;
                }

                let post = {
                    id : parseInt(Math.random() * 1000),
                    nombre: nombre.value,
                    descripcion: descripcion.value
                };

                dispatch(addPost(post));
                
                nombre.value = '';
                descripcion.value = '';

            }}>
                <input ref={node => {
                    nombre = node
                }} />
                <input ref={node => {
                    descripcion = node
                }} />
                <button type="submit">
                    Crear
                </button>
            </form>
        </div>
    )
}
// AddPost = connect()(AddPost);

export default AddPost;