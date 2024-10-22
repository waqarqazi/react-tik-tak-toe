import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import { ReactComponent as PlanIcon } from "assets/sideIcons/plan.svg";
import ROUTE_TEXT from "utils/route-constants";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: ROUTE_TEXT.Plans,
      icon: <PlanIcon className="svgIcon" fill="#484A54" />,
    },
    child: [
      {
        path: "/planning/plan-list",
        element: <HomePage />,
        state: "Overview",
        sidebarProps: {
          displayText: "Overview",
        },
      },
    ],
  },
];

export default appRoutes;
