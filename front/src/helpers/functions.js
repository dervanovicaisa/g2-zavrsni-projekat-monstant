import axios from "axios";
const baseURL = "http://localhost:8000/api";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ2NTkzMjI3LCJpYXQiOjE2NDY1NTAwMjcsImp0aSI6ImM2ODc3Y2EwMGNhZTRiZTBiODdlMmRkMTZhNGYyZTEyIiwidXNlcl9pZCI6MX0.-Fz2_EkdlOsDqfTzbNd21fJnIpyIy-LLciT4tbNKQAo";
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export function getAllCities(setCities) {
  return axios.get(`${baseURL}/gradovi`).then((res) => {
    const cities = res.data;
    setCities(cities);
    console.log(cities);
  });
}

export function getAllLabels(setLables, extension) {
  return axios.get(`${baseURL}/${extension}`).then((res) => {
    const labels = res.data.map((el) => el.naziv);
    setLables(labels);
  });
}

export function getAllIzvjestaj(setData, setDataForCountry, queryParams) {
  return axios
    .get(`${baseURL}/statistika/ukupno?group_by=${queryParams}`)
    .then((res) => {
      //   const data = res.data.map((el) => el.naziv);
      const data = res.data;
      setDataForCountry(data);
    })
    .then(() => {
      axios
        .get(
          `${baseURL}/statistika/ukupno?group_by=grad,${queryParams}&order_by=grad`
        )
        .then((res) => {
          //   const data = res.data.map((el) => el.naziv);
          const data = res.data;
          setData(data);
        });
    });
}

export function randomRGBA(opacity) {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    opacity +
    ")"
  );
}

export function getDetailReport(setData, queryParams) {
  return axios
    .get(`${baseURL}/statistika/ukupno?group_by=${queryParams}`)
    .then((res) => {
      //   const data = res.data.map((el) => el.naziv);
      const data = res.data;
      setData(data);
    });
}
