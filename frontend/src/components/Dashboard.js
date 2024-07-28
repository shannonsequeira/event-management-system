import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  Filler
} from 'chart.js';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea, Bubble, Scatter } from 'react-chartjs-2';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  Filler
);

const Dashboard = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.message) {
      toast.success(location.state.message);
    }
  }, [location]);

  // Sample data for charts
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Event Attendance',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40, 70, 85, 90, 100, 75],
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Event Creation Over Time',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40, 70, 85, 90, 100, 75],
      },
    ],
  };

  const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Event Categories',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        data: [300, 50, 100, 40, 120, 50],
      },
    ],
  };

  const doughnutData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Event Categories',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        data: [200, 150, 100, 70, 90, 60],
      },
    ],
  };

  const radarData = {
    labels: ['Attendance', 'Engagement', 'Satisfaction', 'Retention', 'Growth'],
    datasets: [
      {
        label: 'Event Metrics',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56],
      },
      {
        label: 'Target Metrics',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [80, 70, 95, 75, 60],
      },
    ],
  };

  const polarData = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        label: 'Event Types',
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      },
    ],
  };

  const bubbleData = {
    datasets: [
      {
        label: 'Bubble Chart Data',
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 10, r: 10 },
          { x: 25, y: 15, r: 25 },
          { x: 35, y: 25, r: 15 },
        ],
        backgroundColor: '#FF6384',
        hoverBackgroundColor: '#FF6384',
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: 'Scatter Dataset',
        data: [
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
          { x: 0.5, y: 5.5 },
        ],
        backgroundColor: '#36A2EB',
        hoverBackgroundColor: '#36A2EB',
      },
    ],
  };

  return (
    <Container>
      <h1>Dashboard</h1>
      <Row className="my-4">
        <Col md={6}>
          <h2>Event Attendance</h2>
          <Bar
            data={data}
            options={{
              title: {
                display: true,
                text: 'Average Event Attendance per Month',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </Col>
        <Col md={6}>
          <h2>Event Creation Over Time</h2>
          <Line
            data={lineData}
            options={{
              title: {
                display: true,
                text: 'Event Creation Over Time',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <h2>Event Categories</h2>
          <Pie
            data={pieData}
            options={{
              title: {
                display: true,
                text: 'Event Categories',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </Col>
        <Col md={6}>
          <h2>Event Categories (Doughnut)</h2>
          <Doughnut
            data={doughnutData}
            options={{
              title: {
                display: true,
                text: 'Event Categories (Doughnut)',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <h2>Event Metrics</h2>
          <Radar
            data={radarData}
            options={{
              title: {
                display: true,
                text: 'Event Metrics',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </Col>
        <Col md={6}>
          <h2>Event Types</h2>
          <PolarArea
            data={polarData}
            options={{
              title: {
                display: true,
                text: 'Event Types',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <h2>Bubble Chart</h2>
          <Bubble
            data={bubbleData}
            options={{
              title: {
                display: true,
                text: 'Bubble Chart Example',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </Col>
        <Col md={6}>
          <h2>Scatter Plot</h2>
          <Scatter
            data={scatterData}
            options={{
              title: {
                display: true,
                text: 'Scatter Plot Example',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Dashboard;
