import React from "react";
import LocationLogo from "../images/location.png";

export default function Main(props) {
  console.log(props.data.title);
  return (
    <div className="journal-info">
      <img className="location--image" src={props.data.imageUrl} />
      <img className="location--logo" src={LocationLogo} />
      <span className="location-info">
        {props.data.location}{" "}
        <a href={props.data.googleMapsUrl}>View on Google Maps</a>
      </span>
      <h1>{props.data.title}</h1>
      <p className="startend">
        <strong>
          {props.data.startDate} - {props.data.endDate}
        </strong>
      </p>

      <p className="desc">{props.data.description}</p>
    </div>
  );
}
