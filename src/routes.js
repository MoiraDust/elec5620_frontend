import Attendance from "views/Admin/Attendance.js";
import Discussion from "views/DiscussionBoard/Discussion";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TimeTable from "views/TimeTable.js";
import Maps from "views/Maps.js";
import UserPage from "views/UserPage.js";
import FaceManage from "views/Admin/FaceManagement/FaceManage";

var dashRoutes = [
  {
    path: "/attendance",
    name: "Attendance Checking",
    icon: "design_app",
    component: Attendance,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/discussion",
    name: "Discussion Board",
    icon: "ui-1_bell-53",
    component: Discussion,
    layout: "/admin",
  },
  {
    path: "/time-tables",
    name: "Time Table",
    icon: "files_paper",
    component: TimeTable,
    layout: "/admin",
  },
  {
    path: "/face-manage",
    name: "Face Management",
    icon: "business_badge",
    component: FaceManage,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "design_image",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin",
  },
];
export default dashRoutes;
