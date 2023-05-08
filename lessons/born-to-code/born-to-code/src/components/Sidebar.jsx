import { NavLink } from "react-router-dom";
/* make sure it is linked here and not to basic react */
import { ListGroup, ListGroupItem } from "reactstrap";
import { studentInformation } from "./student-info";
import { urlBuilder } from "../helper/urlBuilder";

const SideBar = (props) => {
  return (
    <>
      <h2>Hello From sidebar</h2>
      <ListGroup>
        <ListGroupItem>
          <NavLink to={"/"}>View All Students</NavLink>
        </ListGroupItem>
        {studentInformation.map((student, index) => (
          <ListGroupItem key={index}>
            <NavLink to={urlBuilder(student.name)}>{student.name}</NavLink>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default SideBar;
