import Sidebar from "../../componets/Dashboard/Sidebar";
import {RiSearch2Line} from "react-icons/ri";

export default function DashboardUser() {
    return (
            <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">

                <Sidebar/>
                <form className="w-full md:w-auto">
                    <div className="relative">
                        <RiSearch2Line className="absolute top-1/2 -translate-y-1/2 left-2" />
                        <input
                            type="text"
                            className="bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-xl w-full md:w-auto"
                            placeholder="Search for projects"
                        />
                    </div>
                </form>
            </div>
    )
}
export {DashboardUser};