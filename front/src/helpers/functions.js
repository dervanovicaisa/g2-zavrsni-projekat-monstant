import axios from "axios";
const baseURL = "http://localhost:8000/api";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ2NTA5NzA5LCJpYXQiOjE2NDY0NjY1MDksImp0aSI6ImJmNzQzODFiY2ZlZDQyZmU4YWRmMDU3ZmNlODI5ZGQwIiwidXNlcl9pZCI6MX0.i6lzW5aqqQT-VzUqYLEWqoNl1vAJpbN6Voh6B9zfKng";
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
  axios
    .get(`${baseURL}/statistika/ukupno?group_by=${queryParams}`)
    .then((res) => {
      //   const data = res.data.map((el) => el.naziv);
      const data = res.data;
      setDataForCountry(data);
    });
  return axios
    .get(
      `${baseURL}/statistika/ukupno?group_by=grad,${queryParams}&order_by=grad`
    )
    .then((res) => {
      //   const data = res.data.map((el) => el.naziv);
      const data = res.data;
      setData(data);
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
