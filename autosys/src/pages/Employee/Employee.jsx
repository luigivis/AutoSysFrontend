import { sendGet } from '../../utils/commonFetch'
import { getServerPath } from '../../utils/endpointCatalog'
import { useState, useEffect } from 'react'

import useSession from '../../hooks/useSession'
import Modal from '../../componets/Employee/EmployeeCreate'


export default function DashboardEmployee() {
    const [employee, setEmployee] = useState([])
    const { authToken } = useSession()

    useEffect(() => {
        const fecthEmployee = async () => {
            const response = await sendGet(getServerPath('employees/list/?size=100'), authToken);
            setEmployee(response?.body?.value)
        }

        fecthEmployee()
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
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{employee.empStatus === 1 ? "on" : "off"}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" >
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" >Edit</a>
                                                <span className="mx-2">|</span>

                                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline" >{employee.empStatus === 1 ? "Delete" : "Recovery"}</a>
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
