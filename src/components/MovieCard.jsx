import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleDelete } from "../redux/action";
import ReactStars from "react-stars";

const MovieCard = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: "24rem", height: "650px", margin: "30px" }}>
        <Card.Img variant="top" src={el.img} style={{ height: "350px" }} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>{el.text}</Card.Text>
          <div style={{ marginLeft: "120px", marginBottom: "10px" }}>
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              value={el.rating}
            />
          </div>
          <Button
            variant="danger"
            onClick={() => dispatch(handleDelete(el.id))}
            style={{ marginRight: "30px" }}
          >
            Delete{" "}
          </Button>
          <Button variant="primary">More Details </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
