import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PostForm = (props) => {

    const [post, setPost] = useState({
        nombre: props.post ? props.post.nombre : '',
        descripcion: props.post ? props.post.descripcion : ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { nombre, descripcion } = post;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [nombre, descripcion];
        let errorMessage = '';

        const fillupFields = values.every(f => {
            const value = `${f}`.trim();
            return value !== '' && value !== '0';
        });

        if (fillupFields) {
            const post = {
                nombre,
                descripcion
            };
            props.handleOnSubmit(post);
        } else {
            errorMessage = 'Por favor, rellene todos los campos.';
        }
        setErrorMsg(errorMessage);
    };

    const handleInputChange = (event) => {
        
        const { name, value } = event.target;

        setPost(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

    return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="nombre">
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="nombre"
                        value={nombre}
                        placeholder="Nombre"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="descripcion">
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="descripcion"
                        value={descripcion}
                        placeholder="Descripción"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                    Crear
                </Button>
            </Form>
        </div>
    );
};

export default PostForm;
