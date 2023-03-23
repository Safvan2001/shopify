import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>   <Navbar variant="dark" style={{backgroundColor:"#505050"}}>
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://i.postimg.cc/sD5VzrKZ/image.png"
          width="100"
          height="100"
          className="d-inline-block align-center"
          style={{mixBlendMode:"lighten"}}
        />{' '}
       
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header