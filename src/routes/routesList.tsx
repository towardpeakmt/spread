import { RouteType } from "../types/routeType/index";
import Home from "@pages/Home";

// export const staticRoute = {
//   path: "development",
//   element: <div>developmentPage</div>,
//   state: "development",
//   sidebarProps: {
//     displayText: "Your Workspace",
//     // icon: <DevelopmentPageIcon />
//   },
//   child: [
//     {
//       path: "/development/projects",
//       element: <ProjectsPage />,
//       state: "development.projects",
//       sidebarProps: {
//         displayText: "Projects",
//         // icon: <ProjectsPageIcon />
//       },
//     },
//     {
//       path: "/development/decision",
//       element: <DecisionPage />,
//       state: "development.decision",
//       sidebarProps: {
//         displayText: "Decision Makers",
//         // icon: <DecisionPageIcon />
//       },
//     },
//     {
//       path: "/development/accounts",
//       element: <AccountsPage />,
//       state: "development.accounts",
//       sidebarProps: {
//         displayText: "Accounts",
//         // icon: <AccountsPageIcon />
//       },
//     },
//     {
//       path: "/development/clients",
//       element: <ClientsPage />,
//       state: "development.accounts",
//       sidebarProps: {
//         displayText: "Clients",
//         // icon: <ClientsPageIcon />
//       },
//     },
//   ],
// };

const routesList: RouteType[] = [
  {
    index: true,
    element: <Home />,
    state: "home",
  },
  {
    path: "workspace",
    element: <div>WorkspacePage</div>,
    state: "workspace",
    sidebarProps: {
      displayText: "My workspace",
      icon: (
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.33557 1.60352V6.87974M7.33557 6.87974V12.3965M7.33557 6.87974L13.0606 6.87959M7.33557 6.87974L1.94238 6.87959"
            stroke="#7F94A8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  },
  {
    path: "privateworkspace",
    element: <div>PrivateWorkspacepage</div>,
    state: "privateworkspace",
    sidebarProps: {
      displayText: "Private workspace",
      // icon: <DevelopmentPageIcon />
    },
  },
];

export default routesList;
