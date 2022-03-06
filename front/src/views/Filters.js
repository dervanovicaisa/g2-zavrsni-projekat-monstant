import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import * as Icon from "react-bootstrap-icons";
import * as queryString from "query-string";
import { Doughnut, Line, Pie, Bar } from "react-chartjs-2";
import {
  getAllCities,
  getAllLabels,
  getDetailReport,
  randomRGBA,
} from "helpers/functions";
import {
  Chart as ChartJS,
  ArcElement,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { useHistory, useParams } from "react-router";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);
const Filter = ({ title, categories, id }) => {
  let [labels, setLabels] = useState([]);
  let [filterGraph, setFilterGraph] = useState("3");

  let [data, setData] = useState(["a"]);
  let [filter, setFilter] = useState();
  let [loading, setLoading] = useState(false);
  let [errors, setErrors] = useState({});
  let history = useHistory();
  let params = useParams();

  const backgroundColors = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
    "rgb(102, 153, 255, 0.5)",
    "rgb(255, 255, 153, 0.5)",
    "rgb(0, 204, 0, 0.5)",
    "rgb(0, 153, 204, 0.5)",
    "rgb(173, 51, 255, 0.5)",
  ];
  const borderColors = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgb(102, 153, 255, 1)",
    "rgb(255, 255, 153, 1)",
    "rgb(0, 204, 0, 1)",
    "rgb(0, 153, 204, 1)",
    "rgb(173, 51, 255, 1)",
  ];
  const fkdata = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [125, 125, 643, 25, 634, 123, 222],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  };

  let [dataToShow, setDataToShow] = useState({
    labels: labels,
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });
  //   functions

  const selectHandlerGraph = (e) => {
    console.log(e.target.value);
    setFilterGraph(e.target.value);
  };

  const selectHandler = (val) => {
    let o = { target: { value: val.value } };
    handleChangeFilter(o);
    return;
  };
  const handleChangeFilter = (e) => {
    const { value } = e.target;
    console.log(e.target);
    let newValues = { ...filter };

    if (!value) {
      delete newValues[value];
    } else {
      newValues[value] = value;
    }
    console.log(newValues);
    setFilter(newValues);
  };

  const search = () => {
    setFilter({ ...filter });
    callHelpFunctions();

    // loadData();
  };

  const refresh = () => {
    setFilter({ ...filter });
    callHelpFunctions();
    // loadData();
  };

  const loadData = () => {
    let historySearch = "";
    var query = {};

    if (filter) {
      historySearch += `&filter=${filter}`;
      history.push({ search: historySearch });
      query.filter = filter.filter;
    }

    Axios.get(history.location.pathname, { params: JSON.stringify(query) })
      .then(function (response) {
        setData(response.data);
        // console.log(response.data.data, JSON.stringify(query));
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  function callHelpFunctions() {
    var selectedCategory = id;

    switch (selectedCategory) {
      case "Pol":
        setLabels(["Musko", "Zensko"]);
        getDetailReport(setData, "pol");
        break;
      case "nationality":
        getAllLabels(setLabels, "drzavljanstva");
        getDetailReport(setData, "drzavljanstvo");
        break;
      case "populationbyreligion":
        getAllLabels(setLabels, "vjeroispovijesti");
        getDetailReport(setData, "vjeroispovijest");
        break;
      case "mothertongue":
        getAllLabels(setLabels, "maternji-jezici");
        getDetailReport(setData, "jezik");
        break;
      case "Bracni status":
        getAllLabels(setLabels, "bracni-statusi");
        getDetailReport(setData, "bracni_status");
        break;
      case "degreeofeducation":
        getAllLabels(setLabels, "stepeni-obrazovanja");
        getDetailReport(setData, "obrazovanje");
        break;
      case "Računarska pismenost":
        getAllLabels(setLabels, "racunarske-pismenosti");
        getDetailReport(setData, "racunarska_pismenost");
        break;
    }
  }

  useEffect(() => {
    callHelpFunctions();
    setDataToShow({
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: data.map((el) => el["count"]),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    });
  }, []);

  useEffect(() => {
    // callHelpFunctions();
    setDataToShow({
      labels: labels,
      datasets: [
        {
          label: "Broj stanovnika",
          data: data.map((el) => el["count"]),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    });
  }, [labels, data]);
  return (
    <>
      <Col>
        <Row>
          <Col>
            <h3> Pretraga </h3>
            <hr></hr>
          </Col>
        </Row>
        <Row>
          <Col className="p-2">
            <Form.Control as="select" id="graph" onChange={selectHandlerGraph}>
              <option value="1" name="Doughnut graf">
                Doughnut graf
              </option>
              <option value="2" name="Pie graf">
                Pie graf
              </option>
              <option value="3" name="Bar graf" selected>
                Bar graf
              </option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col className="p-2">
            <Form.Control as="select" id="year" onChange={selectHandler}>
              <option value="0" name="Godina">
                Godina
              </option>
              <option value="1" name="2011">
                2011
              </option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col className="p-2">
            <Form.Control as="select" id={id} onChange={selectHandler}>
              <option value="0">{title}</option>
              {categories != undefined
                ? categories.map((item) => (
                    <option value={item.id} name={item.name}>
                      {item.name}
                    </option>
                  ))
                : null}
            </Form.Control>
          </Col>
          <Col className="p-2">
            <Form.Control as="select" id="city" onChange={selectHandler}>
              <option value="0" name="Grad">
                Grad
              </option>
              <option value="1" name="Podgorica">
                Podgorica
              </option>
              <option value="2" name="Danilovgrad">
                Danilovgrad
              </option>
              <option value="3" name="Tuzi">
                Tuzi
              </option>
              <option value="4" name="Nikšić">
                Nikšić
              </option>
              <option value="5" name="Pljevlja">
                Pljevlja
              </option>
              <option value="6" name="Cetinje">
                Cetinje
              </option>
              <option value="7" name="Berane">
                Berane
              </option>
              <option value="8" name="Bijelo Polje">
                Bijelo Polje
              </option>
              <option value="9" name="Mojkovac">
                Mojkovac
              </option>
              <option value="10" name="Rozaje">
                Rozaje
              </option>
              <option value="11" name="Plav">
                Plav
              </option>
              <option value="12" name="Gusinje">
                Gusinje
              </option>
              <option value="13" name="Zabljak">
                Zabljak
              </option>
              <option value="14" name="Kolasin">
                Kolasin
              </option>
              <option value="15" name="Pluzine">
                Pluzine
              </option>
              <option value="16" name="Andrijevica">
                Andrijevica
              </option>
              <option value="17" name="Šavnik">
                Šavnik
              </option>
              <option value="18" name="Herceg Novi">
                Herceg Novi
              </option>
              <option value="19" name="Kotor">
                Kotor
              </option>
              <option value="20" name="Budva">
                Budva
              </option>
              <option value="21" name="Bar">
                Bar
              </option>
              <option value="22" name="Ulcinj">
                Ulcinj
              </option>
              <option value="23" name="Tivat">
                Tivat
              </option>
              <option value="24" name="Bar">
                Bar
              </option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col className="p-2">
            <Form.Control
              as="select"
              id="maritalStatus"
              onChange={selectHandler}
            >
              <option value="0" name="Bračni status">
                Bračni status
              </option>
              <option value="1" name="Neudata / neoženjen">
                Neudata / neoženjen
              </option>
              <option value="2" name="Udata / oženjen">
                Udata / oženjen
              </option>
              <option value="3" name="Razvedena / razveden">
                Razvedena / razveden
              </option>
              <option value="4" name="Udovica / udovac">
                Udovica / udovac
              </option>
              <option value="5" name="Bez odgovora">
                Bez odgovora
              </option>
            </Form.Control>
          </Col>
          <Col className="p-2">
            <Form.Control as="select" id="sex" onChange={selectHandler}>
              <option value="0" name="Pol">
                Pol
              </option>
              <option value="1" name="Muško">
                Muško
              </option>
              <option value="2" name="Zensko">
                Zensko
              </option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col className="p-2">
            <Form.Control as="select" id="citizenship" onChange={selectHandler}>
              <option value="0" name="Drzavljantstvo">
                Drzavljantstvo
              </option>
              <option value="1" name="Državljani Crne Gore i strane države">
                Državljani Crne Gore i strane države
              </option>
              <option value="2" name="Lica sa državljanstvom strane države">
                Lica sa državljanstvom strane države
              </option>
              <option
                value="3"
                name="Lica u proceduri sticanja crnogorskog državljanstva"
              >
                Lica u proceduri sticanja crnogorskog državljanstva
              </option>
              <option value="4" name="Lica bez državljanstva">
                Lica bez državljanstva
              </option>
              <option value="5" name="Bez odgovora">
                Bez odgovora
              </option>
            </Form.Control>
          </Col>
          <Col className="p-2">
            <Form.Control
              as="select"
              id="economicActivities"
              onChange={selectHandler}
            >
              <option value="0">Prema aktivnosti</option>
              <option value="1">Aktivno</option>
              <option value="2">Neaktivno</option>
              <option value="3">Neutvrđeno</option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col className="p-2">
            <Form.Control
              as="select"
              id="foreignLanguages"
              onChange={selectHandler}
            >
              <option value="0" name="Strani jezici">
                Strani jezici
              </option>
              <option value="1" name="Engleski">
                Engleski
              </option>
              <option value="2" name="Ruski">
                Ruski
              </option>
              <option value="3" name="Italijanski">
                Italijanski
              </option>
              <option value="4" name="Njemački">
                Njemački
              </option>
              <option value="5" name="Francuski">
                Francuski
              </option>
            </Form.Control>
          </Col>
          <Col className="p-2">
            <Form.Control
              as="select"
              id="computerLiteracy"
              onChange={selectHandler}
            >
              <option value="0" name="Računarska pismenost">
                Računarska pismenost
              </option>
              <option value="1" name="Kompjuterski pismena lica">
                Kompjuterski pismena lica
              </option>
              <option
                value="2"
                name="Lica koja djelimično poznaju rad na računaru"
              >
                Lica koja djelimično poznaju rad na računaru
              </option>
              <option value="3" name="Lica koja ne poznaju rad na računaru">
                Lica koja ne poznaju rad na računaru
              </option>
              <option value="4" name="Bez odgovora">
                Bez odgovora
              </option>
            </Form.Control>
          </Col>
        </Row>
        <Row className="float-right">
          <Col className="p-2">
            <Button
              type="submit"
              variant="outline-success"
              className="mr-2"
              onClick={search}
            >
              <Icon.Search />
            </Button>
            <Button
              type="reset"
              variant="outline-dark"
              className="ml-2"
              onClick={refresh}
            >
              <Icon.XCircle />
            </Button>
          </Col>
        </Row>
      </Col>
      <Col>
        {filterGraph == 1 ? (
          <Doughnut data={dataToShow} />
        ) : filterGraph == 2 ? (
          <Pie data={dataToShow} />
        ) : filterGraph == 3 ? (
          <Bar data={dataToShow} />
        ) : null}
      </Col>
    </>
  );
};

export default Filter;
