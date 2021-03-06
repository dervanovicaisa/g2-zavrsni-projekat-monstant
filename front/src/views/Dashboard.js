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
                          Uprava za statistiku Crne Gore ??? MONSTAT je nadle??no
                          tijelo za proizvodnju zvani??ne statistike. MONSTAT-ova
                          uloga kao nosioca zvani??ne statistike u crnogorskom
                          statisti??kom sistemu prepoznata je kod doma??e i
                          me??unarodne javnosti.
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
                          Kao statisti??ki lider MONSTAT je du??an da prikupljanje
                          podataka, obradu i diseminaciju crnogorske statistike
                          obavlja na profesionalno nezavisan, transparentan i
                          visoko stru??an na??in.
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
                          evropskog statisti??kog tijela EUROSTAT-a.
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
                          Na??a misija je proizvodnja statistike koja ??e
                          koristiti gra??anima, dr??avnim i nau??no-istra??iva??kim
                          institucijama, medijima i ostalim korisnicima
                          statistike omogu??avaju??i im jednostavan i brz uvid u
                          rezultate istra??ivanja koja sprovodimo.
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
                          Pro??irivanje saradnje MONSTAT-a i ??ire javnosti je
                          ,tako??e jedan od va??nih ciljeva u na??em budu??em radu
                          kako bi posao koji obavljamo bio jo?? transparentniji,
                          dostupniji i vidljiviji javnosti-kako doma??oj, tako i
                          me??unarodnoj.
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
                          ??elimo vam da na na??em sajtu na??ete informacije koje
                          su vam potrebne, a ukoliko ne??to ne mozete na??i na
                          na??oj internet stranici molimo vas da nam se obratite
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
