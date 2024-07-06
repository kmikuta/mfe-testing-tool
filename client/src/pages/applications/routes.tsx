import { RouteObject } from "react-router-dom";

import { ApplicationListPage } from "./ApplicationListPage";
import { getApplications } from "../../api/applications";
import { ApplicationViewPage } from "./ApplicationPage";

export const applicationRoutes: RouteObject[] = [
  {
    path: "",
    element: <ApplicationListPage />,
    loader: getApplications,
  },
  {
    path: ":appId",
    element: <ApplicationViewPage />,
    loader: getApplications,
  },
];
