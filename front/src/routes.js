/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import FilterDataOfPopulation from "routes/FilterDataOfPopulation.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Početna",
    icon: "",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/podaciostanovnistvu",
    name: "Podaci o stanovnštvu",
    icon: "",
    component: FilterDataOfPopulation,
    layout: "/admin",
  },
  {
    path: "/podaciodomacinstivma",
    name: "Podaci  o domaćinstivma",
    icon: "",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/podaciostanovima",
    name: "Podaci o stanovima",
    icon: "",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
