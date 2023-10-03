import React from 'react';
import { useDispatch } from 'react-redux'
import { savePost } from '../features/postsSlice'

let AddPost = () => {

    const dispatch = useDispatch();

    let nombre;
    let descripcion;

    const handleOnSubmit = async e => {

        e.preventDefault();

        // Little validation on nombre and descripcion values.
        if (!nombre.value.trim() || !descripcion.value.trim()) {
            return;
        }

        // Preparing post object to be dispatched.
        let post = {
            id: parseInt(Math.random() * 1000),
            nombre: nombre.value,
            descripcion: descripcion.value
        };

        // Dispatch post creation.
        await dispatch(savePost(post));

        // Reset form.
        nombre.value = '';
        descripcion.value = '';

    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    placeholder='Nombre'
                    ref={node => {
                        nombre = node
                    }} />
                <input
                    placeholder='Descripción'
                    ref={node => {
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