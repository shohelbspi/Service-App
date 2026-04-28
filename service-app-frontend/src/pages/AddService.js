import ServiceForm from "../components/ServiceForm";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

function AddService() {
  return (
    <Container fluid>
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h2>Add New Service</h2>
            <Link to="/" className="btn btn-secondary">
              ← Back to Dashboard
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title className="mb-4">Service Details</Card.Title>
              <ServiceForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AddService;
