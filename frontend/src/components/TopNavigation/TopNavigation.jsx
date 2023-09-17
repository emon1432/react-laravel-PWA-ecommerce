import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import whiteLogo from "../../assets/images/logo_white.png";
import blackLogo from "../../assets/images/logo_black.png";

export class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: "navBarTitle",
      navBarLogo: [whiteLogo],
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: ["navBarTitleScroll"],
        navBarLogo: [blackLogo],
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarTitle: ["navBarTitle"],
        navBarLogo: [whiteLogo],
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  render() {
    return (
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className={this.state.navBarTitle} href="#home">
            <img src={this.state.navBarLogo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopNavigation;
