import Header from "../../componets/Dashboard/Header";
import Sidebar from "../../componets/Dashboard/Sidebar";
import {Route, Routes} from "react-router-dom";
import {routes} from "../../routes";

function Dashboard() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
          <br/>
          <Routes>
              {routes.map(
                  ({ layout, pages }) =>
                      layout === "dashboard" &&
                      pages.map(({ path, element }) => (
                          <Route exact path={path} element={element} />
                      ))
              )}
          </Routes>
      </main>

    </div>
  );
}

export default Dashboard;
