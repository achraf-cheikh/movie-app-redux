import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Nvbar from "./components/Nvbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AddingMovie from "./components/AddingMovie";

function App() {
  const [text, setText] = useState("");
  const [stars, setStars] = useState(0);
  const [nature, setNature] = useState("all");

  const handlegenre = (newval) => {
    setNature(newval);
  };

  const handlechange = (e) => {
    setText(e.target.value);
  };

  const ratingchange = (newrating) => {
    setStars(newrating);
  };

  return (
    <div className="App">
      <Nvbar
        change={handlechange}
        text={text}
        ratingchange={ratingchange}
        genre={handlegenre}
      />
      <MovieList text={text} stars={stars} nature={nature} />
      <AddingMovie />
    </div>
  );
}

export default App;
