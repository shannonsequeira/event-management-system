import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { fetchEvents } from "../actions/eventActions";
import { Link } from "react-router-dom";

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [view, setView] = useState("card");

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const sortedEvents = React.useMemo(() => {
    let sortableEvents = [...events];
    if (sortConfig !== null) {
      sortableEvents.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableEvents;
  }, [events, sortConfig]);

  const filteredEvents = sortedEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      event.location.toLowerCase().includes(locationFilter.toLowerCase())
  );

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (!Array.isArray(events)) {
    console.error("Events is not an array:", events);
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
        Error: Events data is not in the correct format
      </div>
    );
  }

  return (
    <Container
      className="mt-4"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Row className="mb-4">
        <Col>
          <h1 style={{ color: "#343a40", textAlign: "center" }}>Event List</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text>Search</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search by title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text>Filter by Location</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Enter location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Button
            onClick={() => setView("card")}
            variant={view === "card" ? "primary" : "outline-primary"}
          >
            Card View
          </Button>
          <Button
            onClick={() => setView("list")}
            variant={view === "list" ? "primary" : "outline-primary"}
            style={{ marginLeft: "10px" }}
          >
            List View
          </Button>
        </Col>
      </Row>
      <Row>
        {view === "card" ? (
          <Col>
            <Card>
              <Card.Body>
                {filteredEvents.map((event, index) => (
                  <Card
                    key={event.id || index}
                    style={{ marginBottom: "1rem" }}
                  >
                    <Card.Body>
                      <Card.Title>
                        <Link
                          to={`/event/${event.id}`}
                          style={{ color: "#007bff", textDecoration: "none" }}
                        >
                          {event.title}
                        </Link>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {formatDate(event.start_date)}
                      </Card.Subtitle>
                      <Card.Text>{event.location}</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ) : (
          <Col>
            <Card>
              <Card.Body>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr style={{ textAlign: "center" }}>
                      <th
                        onClick={() => requestSort("id")}
                        style={{ cursor: "pointer" }}
                      >
                        ID
                      </th>
                      <th
                        onClick={() => requestSort("title")}
                        style={{ cursor: "pointer" }}
                      >
                        Title
                      </th>
                      <th
                        onClick={() => requestSort("start_date")}
                        style={{ cursor: "pointer" }}
                      >
                        Date
                      </th>
                      <th
                        onClick={() => requestSort("location")}
                        style={{ cursor: "pointer" }}
                      >
                        Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEvents.map((event, index) => (
                      <tr
                        key={event.id || index}
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        <td>{event.id}</td>
                        <td>
                          <Link
                            to={`/event/${event.id}`}
                            style={{ color: "#007bff", textDecoration: "none" }}
                          >
                            {event.title}
                          </Link>
                        </td>
                        <td>{formatDate(event.start_date)}</td>
                        <td>{event.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default EventList;
