import Dashboard from "views/Dashboard.js";
import FilterData from "routes/FilterData.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Demographic from "views/Demographic";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Početna",
    icon: "",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/demographic",
    name: "Opšti podaci o stanovnštvu",
    icon: "",
    component: Demographic,
    layout: "/admin",
  },
  {
    path: "/podaciostanovnistvu",
    name: "Detaljni podaci o stanovnštvu",
    icon: "",
    component: FilterData,
    layout: "/admin",
  },
  {
    path: "/podaciodomacinstivma",
    name: "Podaci  o domaćinstivma",
    icon: "",
    component: FilterData,
    layout: "/admin",
  },
  {
    path: "/podaciostanovima",
    name: "Podaci o stanovima",
    icon: "",
    component: FilterData,
    layout: "/admin",
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
