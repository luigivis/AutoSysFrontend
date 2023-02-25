import React from "react";
import { useState, useEffect } from "react";
import { sendPost, sendGet } from '../../utils/commonFetch'
import { getServerPath } from '../../utils/endpointCatalog'
import useSession from '../../hooks/useSession'


export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    const [isShown] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [roleId, setRoleId] = useState('');
    const [employeeUuid, setEmployeeUuid] = useState('');
    const [employees, setEmployees] = useState([]);
    const [selectedOptionId, setSelectedOptionId] = useState('');




    const { authToken } = useSession();


    const data = {
        username: username,
        password: password,
        roleId: roleId,
        employeeUuid: employeeUuid,
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(data);
        try {

            const response = await sendPost(getServerPath('users/create'), data, authToken);
            console.log(response.body.value);
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await sendGet(getServerPath('employees/list/?size=500'), authToken);
            setEmployees(response?.body?.value)
        }

        fetchUsers()
    }, [authToken])
    return (
        <>
            <button
                className="fixed z-90 bottom-10 right-18 bg-blue-600 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300" type="button"
                onClick={() => setShowModal(true)}
            >
                +
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-8 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Create User
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <label class="block">
                                        <span class="text-gray-700">username</span>
                                        <input
                                            onChange={(e) => setUsername(e.target.value)}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jane ">
                                        </input>
                                    </label>
                                    <label class="block my-8">
                                        <span
                                            type={isShown ? "text" : "password"}
                                            placeholder="Password"
                                            className="input" class="text-gray-700">password</span>
                                        <input
                                            onChange={(e) => setPassword(e.target.value)}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="******"></input>
                                    </label>

                                    <label class="block">
                                        <span class="text-gray-700">Role</span>
                                        <input
                                            onChange={(e) => setRoleId(e.target.value)}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                                    </label>
                                    <br></br>
                                    <div>
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            <span class="text-gray-700">EmployeeUuid</span>


                                            <select value={selectedOptionId} onChange={event => setEmployeeUuid(event.target.value)}
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">


                                                {employees.map(employee => (
                                                    <option key={employee.empUuid} value={employee.empUuid}>{employee.empName + ' ' + employee.empLastname}</option>
                                                ))}
                                            </select>
                                        </label>
                                        <br></br>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                        onClick={handleSubmit}
                                    >
                                        Create User
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}