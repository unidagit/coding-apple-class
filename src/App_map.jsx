import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
// import photo1 from '../public/img/photo.jpg';

function App() {
  let [item] = useState(data);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          {/* <Card item={item[0]} i={1} />
          <Card item={item[1]} i={2} />
          <Card item={item[2]} i={3} /> */}

          {item.map((a, i) => {
            return <Card item={item[i]} i={i + 1} />;
          })}
        </div>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <>
      <div className="col-md-4">
        {/* <img src={`${process.env.PUBLIC_URL}/img/06.jpg`} width="100%" /> */}
        <img
          src={process.env.PUBLIC_URL + '/img/co' + props.i + '.jpg'}
          width="100%"
        />
        <h4 className="photo-txt">{props.item.title}</h4>
        <p>{props.item.price}</p>
      </div>
    </>
  );
}

export default App;
