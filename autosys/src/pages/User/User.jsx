import { sendGet } from '../../utils/commonFetch'
import { useState, useEffect } from 'react'
import { getServerPath } from '../../utils/endpointCatalog'

import Modal from '../../componets/User/userCreate'
import useSession from '../../hooks/useSession'
import ModalEdit from '../../componets/User/userEdit'
import ChangeStatus from '../../componets/User/userDelete'
// import { Paginacion } from '../../componets/Pagination/Pagination'

export default function DashboardUser() {
    const [users, setUsers] = useState([])
    const { authToken } = useSession()

    useEffect(() => {
        const fetchUsers = async () => {
            console.log('fetching users...')
            const response = await sendGet(getServerPath('users/list/?size=100'), authToken);
            setUsers(response?.body?.value)
        }

        fetchUsers()
    }, [authToken])

    const role = (usRoleId) => {
        if (usRoleId === 1) {
            return 'ADMIN'
        }
        if (usRoleId === 2) {
            return 'SUPERVISOR'
        }
        if (usRoleId === 3) {
            return 'CASHIER '
        }
    }
    const status = (usStatus) => {
        if (usStatus === 1) {
            return (<div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                <h2 class="text-sm font-normal">Enable</h2>
            </div>
            )
        }
        if (usStatus === 0) {
            return (
                <div class="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                    <h2 class="text-sm font-normal">Disable</h2>
                </div>
            )
        }
    }

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
                                        Role
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
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{role(user.usRoleId)}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.usEmployeeUuid.empCreatedAt}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.usEmployeeUuid.empUpdatedAt}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{status(user.usStatus)}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" >
                                                <ModalEdit usId={user.usId} usUsername={user.usUsername} />
                                                <span className="mx-2">|</span>
                                                <ChangeStatus usId={user.usId} usStatus={user.usStatus} />
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
