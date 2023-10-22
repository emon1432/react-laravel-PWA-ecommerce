import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Technology: "React", Projects: 100 },
        { Technology: "Angular", Projects: 90 },
        { Technology: "Vue", Projects: 80 },
        { Technology: "Laravel", Projects: 100 },
        { Technology: "Django", Projects: 60 },
        { Technology: "Spring", Projects: 70 },
        { Technology: "Node", Projects: 100 },
        { Technology: "Express", Projects: 100 },
      ],
    };
  }
  render() {
    return (
      <Fragment>
        <Container>
          <h2 className="serviceMainTitle text-center">TECHNOLOGY USED</h2>
          <div className="bottom"></div>
          <Row style={{ marginTop: "100px", marginBottom: "100px" }}>
            <Col lg={6} md={12} sm={12}>
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Technology" />
                  <Tooltip />
                  <Bar dataKey="Projects" fill="#3f5dbd"></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className="serviceDescription text-justify">
                Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for
                teaching I am a founder of easy Learning and a passionate Web
                Developer, Programmer & Instructor. <br />
                <br />I am working online for the last 9 years and have created
                several successful websites running on the internet. I try to
                create a project-based course that helps you to learn
                professionally and make you fell as a complete developer. easy
                learning exists to help you succeed in life. <br />
                <br />
                Each course has been hand-tailored to teach a specific skill. I
                hope you agree! Whether you’re trying to learn a new skill from
                scratch or want to refresh your memory on something you’ve
                learned in the past, you’ve come to the right place. <br />
                <br />
                Education makes the world a better place. Make your world better
                with new skills.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
