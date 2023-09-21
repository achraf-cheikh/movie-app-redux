import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { movieadd } from "../redux/action";

const AddingMovie = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //---------------------------------------------------------
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [rate, setRate] = useState(1);

  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    const newobj = {
      id: Math.random(),
      img: image,
      title: name,
      text: desc,
      rating: rate,
    };
    image && name && desc && rate
      ? dispatch(movieadd(newobj))
      : alert("there are a missing information");

    setImage("");
    setName("");
    setDesc("");
    setRate("");
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add new Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie-img</Form.Label>
              <Form.Control
                type="text"
                placeholder="img-url"
                autoFocus
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie-name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie-rating</Form.Label>
              <Form.Control
                type="number"
                placeholder="rate"
                autoFocus
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose} type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddingMovie;
