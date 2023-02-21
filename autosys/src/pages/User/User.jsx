import { sendGet } from '../../utils/commonFetch'
import { useState, useEffect } from 'react'
import { getServerPath } from '../../utils/endpointCatalog'

import Modal from '../../componets/User/userCreate'
import useSession from '../../hooks/useSession'
// import { Paginacion } from '../../componets/Pagination/Pagination'

export default function DashboardUser() {
    const [users, setUsers] = useState([])
    const { authToken } = useSession()

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await sendGet(getServerPath('users/list/?size=100'), authToken);
            setUsers(response?.body?.value)
        }

        fetchUsers()
    }, [authToken])


    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Username
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Ident Card
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Created At
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Updated At
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Status
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Options
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users &&
                                    users.map((user, i) => {
                                        return <tr key={i} className="bg-gray-100 border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.usId}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.usUsername}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.usEmployeeUuid.empName + ' ' + user.usEmployeeUuid.empLastname}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.usEmployeeUuid.empIdentCard}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.usEmployeeUuid.empCreatedAt}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.usEmployeeUuid.empUpdatedAt}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.usStatus === 1 ? "on" : "off"}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" >
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Edit</a>
                                                <span className="mx-2">|</span>

                                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline" >{user.usStatus === 1 ? "Delete" : "Recovery"}</a>
                                            </td>
                                        </tr>
                                    })}
                            </tbody>

                        </table>
                        <Modal />
                        {/* <Paginacion /> */}
                    </div>
                </div>
            </div >
        </div >
    )
}
export { DashboardUser }
