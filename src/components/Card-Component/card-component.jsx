// import react from "react";
import "./card.stles.css";

export function Card(props) {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="RoboImg"
      />
      <h1>{props.monster.name}</h1>
    </div>
  );
}
