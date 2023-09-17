import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/custom.css";
import blackLogo from "../../assets/images/logo_black.png";
import whiteLogo from "../../assets/images/logo_white.png";

export class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: "navBarTitle",
      navBarLogo: [whiteLogo],
      navBarBackground: "navBarBackground",
      navItem: "navItem",
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: ["navBarTitleScroll"],
        navBarLogo: [blackLogo],
        navBarBackground: ["navBarBackgroundScroll"],
        navItem: ["navItemScroll"],
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarTitle: ["navBarTitle"],
        navBarLogo: [whiteLogo],
        navBarBackground: ["navBarBackground"],
        navItem: ["navItem"],
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  render() {
    return (
      <Navbar className={this.state.navBarBackground} collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className={this.state.navBarTitle} href="#home">
            <img src={this.state.navBarLogo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className={this.state.navItem} href="#home">Home</Nav.Link>
              <Nav.Link className={this.state.navItem} href="#about">About</Nav.Link>
              <Nav.Link className={this.state.navItem} href="#service">Service</Nav.Link>
              <Nav.Link className={this.state.navItem} href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link className={this.state.navItem} href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopNavigation;
