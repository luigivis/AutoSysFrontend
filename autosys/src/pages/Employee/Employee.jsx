import { sendGet } from '../../utils/commonFetch'
import { getServerPath } from '../../utils/endpointCatalog'
import { useState, useEffect } from 'react'

import useSession from '../../hooks/useSession'
import Modal from '../../componets/Employee/EmployeeCreate'
import ModalEditEmployee from '../../componets/Employee/EmployeeEdit'
import ChangeStatus from '../../componets/Employee/EmployeeEnable'


export default function DashboardEmployee() {
    const [employee, setEmployee] = useState([])
    const { authToken } = useSession()

    useEffect(() => {
        const fecthEmployee = async () => {
            const response = await sendGet(getServerPath('employees/list/?page=1&size=10'), authToken);
            setEmployee(response?.body?.value)
        }

        fecthEmployee()
    }, [authToken])

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

                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        LastName
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Ident Card
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Phone
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Email
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
                                {employee &&
                                    employee.map((employee, i) => {
                                        return <tr key={i} className="bg-gray-100 border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{employee.usEmployeeUuid}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{employee.empName}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{employee.empLastname}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{employee.empIdentCard}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{employee.empPhone}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{employee.empEmail}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{status(employee.empStatus)}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" >
                                                <ModalEditEmployee empUuid={employee.empUuid} />
                                                <span className="mx-2">|</span>
                                                <ChangeStatus empUuid={employee.empUuid} usStatus={employee.empStatus} />
                                            </td>
                                        </tr>
                                    })}
                            </tbody>
                            <Modal />
                        </table>
                    </div>
                </div>
            </div >
        </div >
    )
}
export { DashboardEmployee }
