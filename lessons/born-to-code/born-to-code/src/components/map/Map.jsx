import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerPoint from "./Marker";
import { studentInformation } from "../student-info";
import { useParams } from "react-router-dom";
import { urlBuilder } from "../../helper/urlBuilder";

const Map = (props) => {
  const position = [39.77443859405725, -86.11902330969728];
  const { studentName } = useParams();
  console.log(studentName);

  let studentList = studentName
    ? studentInformation.filter(
        (student) => urlBuilder(student.name) === studentName
      )
    : studentInformation;
  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {studentList.map((student, index) => (
          <MarkerPoint location={student.location} name={student.name} />
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
