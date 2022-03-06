import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Filter from "views/Filters";
import Axios from "axios";
export default function FilterDataOfPopulation() {
  let [data, setData] = useState({});

  useEffect(() => {
    const categories = () => {
      try {
        Axios.get("https://jsonblob.com/api/948003900255125504").then(
          (response) => {
            setData(response.data);
          }
        );
      } catch (error) {
        console.error(error.message);
      }
    };

    categories();
  }, []);

  // console.log(data['nationality']);

  return (
    <Container>
      <Row>
        <Col>
          <Tabs
            defaultActiveKey="podaci"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="državljanstvo" title={"Prema državljanstvu"}>
              <Col>
                <Row>
                  <Filter
                    title={"Prema državljanstvu"}
                    id={"nationality"}
                    categories={data["nationality"]}
                    key={1}
                  />
                </Row>
              </Col>
            </Tab>
            <Tab eventKey="maternjemjeziku" title={"Prema maternjem jeziku"}>
              <Col>
                <Row>
                  <Filter
                    title={"Prema maternjem jeziku"}
                    id={"mothertongue"}
                    categories={data["mothertongue"]}
                    key={2}
                  />
                </Row>
              </Col>
            </Tab>
            <Tab eventKey="vjeroispovijesti" title={"Prema vjeroispovijesti"}>
              <Col>
                <Row>
                  <Filter
                    title={"Prema vjeroispovijesti"}
                    id={"populationbyreligion"}
                    categories={data["populationbyreligion"]}
                    key={3}
                  />
                </Row>
              </Col>
            </Tab>
            <Tab eventKey="pismenosti" title={"Prema pismenosti"}>
              <Col>
                <Row>
                  <Filter
                    title={"Prema pismenosti"}
                    id={"degreeofeducation"}
                    categories={data["degreeofeducation"]}
                    key={4}
                  />
                </Row>
              </Col>
            </Tab>
            <Tab eventKey="djelatnosti" title={"Prema sektoru djelatnosti"}>
              <Col>
                <Row>
                  <Filter
                    title={"Prema sektoru djelatnosti"}
                    id={"employeesbyactivity"}
                    categories={data["employeesbyactivity"]}
                    key={5}
                  />
                </Row>
              </Col>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
