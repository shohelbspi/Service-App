import { useEffect, useState } from "react";
import { createService, getService, updateService } from "../api/serviceApi";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function ServiceForm({ id }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    status: "active",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      loadService();
    }
  }, [id]);

  const loadService = async () => {
    const res = await getService(id);
    setForm(res.data.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (id) {
      await updateService(id, form);
    } else {
      await createService(form);
    }

    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Service Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter service title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter service category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Enter service description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="status">
        <Form.Label>Status</Form.Label>
        <Form.Select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit" variant="primary" className="w-100">
        {id ? "Update Service" : "Create Service"}
      </Button>
    </Form>
  );
}

export default ServiceForm;
