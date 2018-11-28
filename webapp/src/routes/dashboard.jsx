// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Opportunities from "views/TableList/Opportunities.jsx";
// import Visitors from "views/TableList/Visitors.jsx";
// import ContentPaste from "@material-ui/icons/ContentPaste";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Volunteers from "../views/TableList/Volunteers";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/opportunities",
    sidebarName: "Opportunities",
    component: Opportunities,
    invisible: true
  },
  {
    path: "/volunteers",
    sidebarName: "Volunteers",
    component: Volunteers,
    invisible: true
  },
  // {
  //   path: "/visitors",
  //   sidebarName: "Visitors",
  //   component: Visitors,
  //   invisible: true
  // },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
