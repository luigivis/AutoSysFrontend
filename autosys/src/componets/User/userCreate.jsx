import React from "react";
import { useState, useEffect } from "react";
import { sendPost } from '../../utils/commonFetch'
import { getPathUserPost } from '../../utils/endpointCatalog'
import useSession from '../../hooks/useSession'


export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    const [isShown, setIsSHown] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [roleId, setRoleId] = useState('');
    const [employeeUuid, setEmployeeUuid] = useState('');

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

            const response = await sendPost(getPathUserPost(), data, authToken);
            console.log(response.body.value);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Create
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
                                            class="form-input mt-1 block w-full" placeholder="Jane ">
                                        </input>
                                    </label>
                                    <label class="block my-8">
                                        <span
                                            type={isShown ? "text" : "password"}
                                            placeholder="Password"
                                            className="input" class="text-gray-700">password</span>
                                        <input
                                            onChange={(e) => setPassword(e.target.value)}
                                            class="form-input mt-1 block w-full" placeholder="******"></input>
                                    </label>

                                    <label class="block">
                                        <span class="text-gray-700">Role</span>
                                        <input
                                            onChange={(e) => setRoleId(e.target.value)}
                                            class="form-input mt-1 block w-full"></input>
                                    </label>

                                    <label class="block">
                                        <span class="text-gray-700">EmployeeUuid</span>

                                        <select required
                                            onChange={(e) => setEmployeeUuid(e.target.value)}
                                            class="form-select mt-1 block w-full">
                                            <option>Select Value</option>
                                            <option value={"00005a4d-a68c-11ed-96e8-2a054474ca57"}>sdsd</option>
                                            <option value={"2d184710-950e-11ed-bea4-0242ac110002"}>sdsd23e2</option>
                                        </select>
                                    </label>


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