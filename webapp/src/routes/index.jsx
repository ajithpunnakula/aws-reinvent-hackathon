import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Opportunities from "views/TableList/Opportunities.jsx";
import Volunteers from "../views/TableList/Volunteers";

const indexRoutes = [
  {
    path: "/",
    component: Dashboard
  },
  { path: "/volunteers", component: Volunteers },
  { path: "/opportunities", component: Opportunities }

  // { redirect: true, path: "/", to: "/visitors", component: Opportunities },
];

export default indexRoutes;
