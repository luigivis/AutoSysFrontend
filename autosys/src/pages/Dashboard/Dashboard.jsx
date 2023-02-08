import Header from "../../componets/Dashboard/Header";
import Sidebar from "../../componets/Dashboard/Sidebar";
import { RiLineChartLine, RiHashtag } from "react-icons/ri";

function Dashboard() {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
      </main>
    </div>
  );
}

export default Dashboard;
