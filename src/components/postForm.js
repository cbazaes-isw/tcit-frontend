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

                // Little validation on nombre and descripcion values.
                if (!nombre.value.trim() || !descripcion.value.trim()) {
                    return;
                }

                // Preparing post object to be dispatched.
                let post = {
                    id : parseInt(Math.random() * 1000),
                    nombre: nombre.value,
                    descripcion: descripcion.value
                };

                // Dispatch post creation.
                dispatch(addPost(post));
                
                // Reset form.
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

export default AddPost;