import Sidebar from "./componets/Dashboard/Sidebar";
import DashboardUser from "./pages/User/User";
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
        ],
    },

];