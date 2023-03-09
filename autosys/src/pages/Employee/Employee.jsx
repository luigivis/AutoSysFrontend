import { sendGet } from '../../utils/commonFetch'
import { getServerPath } from '../../utils/endpointCatalog'
import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";

import useSession from '../../hooks/useSession'
import Modal from '../../componets/Employee/EmployeeCreate'
import ModalEditEmployee from '../../componets/Employee/EmployeeEdit'
import ChangeStatus from '../../componets/Employee/EmployeeEnable'
import Pagination from '../../componets/Pagination/usePagination'

const DashboardEmployee = ({numberParam}) => {
    const [employee, setEmployee] = useState([])
    const [body, setBody] = useState([])
    const { authToken } = useSession()
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const fetchEmployee = async () => {
            let number = searchParams.get("page") === undefined ? 0 : searchParams.get("page")

            if (number == null){
                number = 0;
            }
            if (numberParam != null){
                number = numberParam;
                console.log(numberParam)
            }

            const [response] = await Promise.all([sendGet(getServerPath('employees/list/?page=' + number + '&size=10'), authToken)]);
            setEmployee(response?.body?.value)
            setBody(response?.body)
        }

        fetchEmployee();
    }, [authToken, searchParams])

    const status = (usStatus) => {
        if (usStatus === 1) {
            return (<div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                <h2 className="text-sm font-normal">Enable</h2>
            </div>
            )
        }
        if (usStatus === 0) {
            return (
                <div className="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                    <h2 className="text-sm font-normal">Disable</h2>
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
                        </table>
                        <Modal />
                        <div className='container  mt-5'>
                            <Pagination
                                nPages={body?.totalPages}
                                currentPage={body?.currentPage}
                                totalItems={body?.totalItems}
                            />
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
export { DashboardEmployee }
