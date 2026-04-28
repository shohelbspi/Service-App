import { useEffect, useState } from "react";
import { getServices, deleteService } from "../api/serviceApi";
import { Link } from "react-router-dom";
import { Card, Table, Badge, Button, Container } from "react-bootstrap";

function Dashboard() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getServices();
    setServices(res.data.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      await deleteService(id);
      fetchData();
    }
  };

  const getStatusBadge = (status) => {
    return status === "active" ? "success" : "danger";
  };

  return (
    <Container fluid>
      <Card className="shadow-sm border-0">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="mb-0">Service Dashboard</h2>
              <p className="text-muted mb-0">Manage and monitor all your services</p>
            </div>
            <Link to="/add" className="btn btn-primary">
              + Add New Service
            </Link>
          </div>

          <div className="mb-3">
            <span className="fw-bold">Total Services: {services.length}</span>
          </div>

          <Table responsive hover className="align-middle">
            <thead className="table-light">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-5 text-muted">
                    No services found. <Link to="/add">Add your first service</Link>
                  </td>
                </tr>
              ) : (
                services.map((s) => (
                  <tr key={s.id}>
                    <td className="fw-medium">{s.title}</td>
                    <td>{s.category}</td>
                    <td>
                      <Badge bg={getStatusBadge(s.status)} pill>
                        {s.status}
                      </Badge>
                    </td>
                    <td>
                      <Link to={`/edit/${s.id}`} className="btn btn-sm btn-warning me-2">
                        Edit
                      </Link>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(s.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Dashboard;
