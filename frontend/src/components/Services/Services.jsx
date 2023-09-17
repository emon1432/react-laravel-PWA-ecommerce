import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import designIcon from "../../assets/images/design.png";
import ecommerceIcon from "../../assets/images/ecommerce.png";
import webIcon from "../../assets/images/web.png";

export class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <h2 className="serviceMainTitle text-center">MY SERVICES</h2>
            <div className="bottom"></div>
          <Row style={{ marginTop: "100px", marginBottom: "100px" }}>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img
                  className="serviceIcon"
                  src={designIcon}
                  alt="web-design"
                />
                <h2 className="serviceTitle">Web Design</h2>
                <p className="serviceDescription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, repellat.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img
                  className="serviceIcon"
                  src={webIcon}
                  alt="web-development"
                />
                <h2 className="serviceTitle">Web Development</h2>
                <p className="serviceDescription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, repellat.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img
                  className="serviceIcon"
                  src={ecommerceIcon}
                  alt="ecommerce"
                />
                <h2 className="serviceTitle">Ecommerce</h2>
                <p className="serviceDescription">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, repellat.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
