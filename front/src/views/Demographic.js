import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import { Card, Container, Row, Col, Form, Table } from "react-bootstrap";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import {
  getAllCities,
  getAllLabels,
  getAllIzvjestaj,
  randomRGBA,
} from "helpers/functions";
import Select from "react-select";
import makeAnimated from "react-select/animated";

function Demographic() {
  const animatedComponents = makeAnimated();

  const categories = [
    "Pol",
    "Drzavljanstvo",
    "Vjeroispovijest",
    "Maternji jezik",
    "Bracni status",
  ];

  const [cities, setCities] = useState([]);
  const [colorsOfLables, setColorsOfLabels] = useState([
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
  ]);
  const [borderColorsOfLabels, setBorderColorsOfLabels] = useState([
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ]);
  const [labels, setLabels] = useState([
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Orange",
  ]);
  const data2 = {
    labels: labels,
    datasets: [
      {
        // label: "# of Votes",
        data: [12, 19],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const [category, setCategory] = useState("Pol");
  const [finalData, setFinalData] = useState([]);
  const [selectedCities, setSelectedCities] = useState([
    { value: "Podgorica", label: "Podgorica" },
  ]);
  const [data, setData] = useState([]);
  const [dataForCountry, setDataForCountry] = useState([]);
  const [finalDataForCountry, setFinalDataForCountry] = useState(data2);
  useEffect(() => {
    getAllCities(setCities);
    callHelpFunctions();
  }, []);

  useEffect(() => {
    callHelpFunctions();

    var temp = cities.map((el) => {
      var dataForSeed = [];
      for (var elementOfData of data) {
        if (elementOfData["grad__naziv"] == el.naziv) {
          dataForSeed.push(elementOfData["count"]);
        }
      }
      return {
        name: el.naziv,
        data: {
          labels: labels,
          datasets: [
            {
              // label: "# of Votes",
              data: dataForSeed,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
      };
    });

    var seedData = dataForCountry.map((el) => el["count"]);
    var countrySeeder = {
      labels: labels,
      datasets: [
        {
          data: seedData,
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(153, 102, 255, 0.8)",
            "rgba(255, 159, 64, 0.8)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    setFinalDataForCountry(countrySeeder);
    setFinalData(temp);
  }, [cities, category]);

  useEffect(() => {
    var temp = cities.map((el) => {
      var dataForSeed = [];
      for (var elementOfData of data) {
        if (elementOfData["grad__naziv"] == el.naziv) {
          dataForSeed.push(elementOfData["count"]);
        }
      }
      return {
        name: el.naziv,
        data: {
          labels: labels,
          datasets: [
            {
              // label: "# of Votes",
              data: dataForSeed,
              backgroundColor: colorsOfLables,
              borderColor: borderColorsOfLabels,
              borderWidth: 3,
            },
          ],
        },
      };
    });

    var seedData = dataForCountry.map((el) => el["count"]);
    var countrySeeder = {
      labels: labels,
      datasets: [
        {
          data: seedData,
          backgroundColor: colorsOfLables,
          borderColor: borderColorsOfLabels,
          borderWidth: 3,
        },
      ],
    };

    var colors = [];
    var borderColors = [];
    for (var i = 0; i < labels.length; i++) {
      var color = randomRGBA(0.5);
      var borderColor = randomRGBA(1);
      colors.push(color);
      borderColors.push(borderColor);
    }

    setColorsOfLabels(colors);
    setBorderColorsOfLabels(borderColors);
    setFinalDataForCountry(countrySeeder);
    setFinalData(temp);
  }, [labels, data]);

  function callHelpFunctions() {
    var selectedCategory = category;
    switch (selectedCategory) {
      case "Pol":
        setLabels(["Musko", "Zensko"]);
        getAllIzvjestaj(setData, setDataForCountry, "pol");
        break;
      case "Drzavljanstvo":
        getAllLabels(setLabels, "drzavljanstva");
        getAllIzvjestaj(setData, setDataForCountry, "drzavljanstvo");
        break;
      case "Vjeroispovijest":
        getAllLabels(setLabels, "vjeroispovijesti");
        getAllIzvjestaj(setData, setDataForCountry, "vjeroispovijest");
        break;
      case "Maternji jezik":
        getAllLabels(setLabels, "maternji-jezici");
        getAllIzvjestaj(setData, setDataForCountry, "jezik");
        break;
      case "Bracni status":
        getAllLabels(setLabels, "bracni-statusi");
        getAllIzvjestaj(setData, setDataForCountry, "bracni_status");
        break;
    }
  }
  function showCountryChart() {
    return (
      <Col md={{ span: 5 }}>
        <Card>
          <Card.Header>
            <Card.Title as="h4">{"Crna Gora"}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Pie data={finalDataForCountry} />
          </Card.Body>
        </Card>
      </Col>
    );
  }

  const handlePickCity = (values) => {
    setSelectedCities(values);
  };
  function checkCities() {
    return (
      <React.Fragment>
        <Card className="strpied-tabled-with-hover">
          <Card.Header>
            <Card.Title as="h4">Gradovi</Card.Title>
          </Card.Header>
          <Card.Body className="table-full-width table-responsive px-0">
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              defaultValue={[{ value: "Podgorica", label: "Podgorica" }]}
              isMulti
              options={cities.map((el) => {
                return { value: el.naziv, label: el.naziv };
              })}
              onChange={handlePickCity}
            />
          </Card.Body>
        </Card>
        <Card className="strpied-tabled-with-hover">
          <Card.Header>
            <Card.Title as="h4">Kategorija</Card.Title>
          </Card.Header>
          <Card.Body className="table-full-width table-responsive px-0">
            <Form.Select
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              {categories.map((el, index) =>
                category == el ? (
                  <option value={el} key={index} selected="true">
                    {el}
                  </option>
                ) : (
                  <option value={el} key={index}>
                    {el}
                  </option>
                )
              )}
            </Form.Select>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }

  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <Container fluid>
      {/* <FixedFilter
        setCategory={setCategory}
        categories={categories}
        category={category}
      /> */}

      <Row>
        {showCountryChart()}
        <Col>{checkCities()}</Col>
      </Row>
      <Row>
        {finalData.map((el) => {
          if (selectedCities.some((element) => element.value == el.name)) {
            return (
              <Col md={{ span: 4 }}>
                <Card>
                  <Card.Header>
                    <Card.Title as="h5">{el.name}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Pie options={options} data={el.data} />
                  </Card.Body>
                </Card>
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
}

export default Demographic;
