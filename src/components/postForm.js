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
    let errorMsg = '';

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
      errorMsg = 'Por favor, rellene todos los campos.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { nombre, valor } = event.target;
    switch (nombre) {
      case 'cantidad':
        if (valor === '' || parseInt(valor) === +valor) {
          setPost((prevState) => ({
            ...prevState,
            [nombre]: valor
          }));
        }
        break;
      case 'precio':
        if (valor === '' || valor.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setPost((prevState) => ({
            ...prevState,
            [nombre]: valor
          }));
        }
        break;
      default:
        setPost((prevState) => ({
          ...prevState,
          [nombre]: valor
        }));
    }
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
