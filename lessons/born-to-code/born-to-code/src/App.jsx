import "./App.css";
import Header from "./components/Header";
import Map from "./components/map/Map";
import { Col, Container, Row } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md="4">
            <SideBar />
          </Col>
          <Col md="8">
            <Routes>
              <Route path="/" element={<Map />} />
              <Route path="/:studentName" element={<Map />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
