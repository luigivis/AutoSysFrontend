import Sidebar from "./componets/Dashboard/Sidebar";
import DashboardUser from "./pages/User/User";
import DashboardEmployee from "./pages/Employee/Employee";

export const routes = [
    {
        layout: "dashboard",
        pages: [
            {
                name: "dashboard",
                path: "/dashboard",
                element: <Sidebar />,
            },
            {
                name: "users",
                path: "/users",
                element: <DashboardUser />,
            },
            {
                name: "employees",
                path: "/employees",
                element: <DashboardEmployee />,
            },
        ],
    },

];