import ReactStars from "react-stars";

const Nvbar = ({ change, text, ratingchange, genre }) => {
  return (
    <div>
      <h1 style={{ color: "green" }}>Movie-App Redux</h1>
      <br />
      <hr style={{ color: "white" }} />
      <select
        name=""
        id=""
        style={{ margin: "50px" }}
        onChange={(e) => genre(e.target.value)}
      >
        <option value="all">all</option>
        <option value="action">action</option>
        <option value="drama">drama</option>
        <option value="horror">horror</option>
      </select>
      <input type="text" value={text} onChange={change} />
      <div style={{ marginLeft: "625px" }}>
        <ReactStars
          count={5}
          onChange={ratingchange}
          size={24}
          color2={"#ffd700"}
        />
      </div>
    </div>
  );
};

export default Nvbar;
