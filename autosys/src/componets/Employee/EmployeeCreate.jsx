import React from "react";
import { useState } from "react";
import { sendPost } from '../../utils/commonFetch'
import { getServerPath } from '../../utils/endpointCatalog'
import useSession from '../../hooks/useSession'


export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [ident_card, setIdentCard] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const { authToken } = useSession();


    const data = {
        name: name,
        lastname: lastname,
        ident_card: ident_card,
        phone: phone,
        email: email,
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(data);
        try {

            const response = await sendPost(getServerPath('employees/create/'), data, authToken);
            console.log(response.body.value);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            {/* lg:hidden fixed left-4 bottom-4 text-2xl bg-[#3F485B] p-2.5 rounded-full text-white z-50 */}
            <button
                className="fixed z-90 bottom-4 right-18 bg-blue-600 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300" type="button"
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
                                        Employee
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
                                    <label className="block">
                                        <span className="text-gray-700">username</span>
                                        <input
                                            onChange={(e) => setName(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jane ">
                                        </input>
                                    </label>
                                    <label className="block my-8">
                                        <span className="text-gray-700">lastname</span>
                                        <input
                                            onChange={(e) => setLastname(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                                    </label>

                                    <label className="block">
                                        <span className="text-gray-700">identCard</span>
                                        <input
                                            onChange={(e) => setIdentCard(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                                    </label>
                                    <br></br>
                                    <label className="block">
                                        <span className="text-gray-700">Phone</span>
                                        <input onChange={(e) => setPhone(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                        </input>
                                    </label>
                                    <br></br>
                                    <label className="block">
                                        <span className="text-gray-700">Emaill</span>
                                        <input onChange={(e) => setEmail(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        </input>
                                    </label>
                                    <br></br>

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
                                        Create Employee
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