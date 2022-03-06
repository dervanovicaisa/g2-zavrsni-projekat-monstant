import React from "react";
// react-bootstrap components
import { Card, Table, Container, Row, Col, Form } from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="4">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="8">
                    <div className="numbers">
                      <p className="card-category">Ukupan broj stanovnika</p>
                      <Card.Title as="h4">622 303</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-grid-45 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Ukupan broj domacinstava</p>
                      <Card.Title as="h4">192 242</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-quote text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Ukupan broj stanova</p>
                      <Card.Title as="h4">314 704</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Monstat</Card.Title>
                <p className="card-category">Uprava za statistiku</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                disabled
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Uprava za statistiku Crne Gore – MONSTAT je nadležno
                          tijelo za proizvodnju zvanične statistike. MONSTAT-ova
                          uloga kao nosioca zvanične statistike u crnogorskom
                          statističkom sistemu prepoznata je kod domaće i
                          međunarodne javnosti.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                disabled
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Kao statistički lider MONSTAT je dužan da prikupljanje
                          podataka, obradu i diseminaciju crnogorske statistike
                          obavlja na profesionalno nezavisan, transparentan i
                          visoko stručan način.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                disabled
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          U svom radu se oslanjamo na savremene evropske
                          trendove kada je proizvodnja statistike u pitanju i
                          nastojimo da svoj rad prilagodimo pravilima vrhovnog
                          evropskog statističkog tijela EUROSTAT-a.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                disabled
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Naša misija je proizvodnja statistike koja će
                          koristiti građanima, državnim i naučno-istraživačkim
                          institucijama, medijima i ostalim korisnicima
                          statistike omogućavajući im jednostavan i brz uvid u
                          rezultate istraživanja koja sprovodimo.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                disabled
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Proširivanje saradnje MONSTAT-a i šire javnosti je
                          ,takođe jedan od važnih ciljeva u našem budućem radu
                          kako bi posao koji obavljamo bio još transparentniji,
                          dostupniji i vidljiviji javnosti-kako domaćoj, tako i
                          međunarodnoj.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                disabled
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Želimo vam da na našem sajtu nađete informacije koje
                          su vam potrebne, a ukoliko nešto ne mozete naći na
                          našoj internet stranici molimo vas da nam se obratite
                          na mail: contact@monstat.org .
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
