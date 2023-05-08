import { Marker, Popup } from "react-leaflet";

const MarkerPoint = (props) => {
  return (
    <Marker position={props.location}>
      <Popup>
        <h2>{props.name}</h2>
        <a href={props.linkedIn} target="blank">LinkedIn Profile</a>
      </Popup>
    </Marker>
  );
};

export default MarkerPoint;
