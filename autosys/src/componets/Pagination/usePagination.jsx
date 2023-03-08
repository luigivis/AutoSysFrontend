import React from 'react'

import { NavLink, Link } from "react-router-dom";


const Pagination = ({ nPages: totalPages, currentPage, totalItems }) => {
    const pageNumbers = []

    if (totalPages > 10 && currentPage <= totalPages) {

        for (let i = currentPage; i <= currentPage + 3; i++) {
            if (totalPages < i) {

                pageNumbers.push(i - 10)
                console.log("final")
            } else {
                pageNumbers.push(i)
            }


        }
    }
    if (totalPages < 10) {
        for (let i = 0; i <= totalPages; i++) {
            pageNumbers.push(i)
        }
    }
    if (currentPage <= totalPages) {
        for (let i = currentPage; i <= currentPage - 10; i++) {
            pageNumbers.push(i)
        }
    }


    const nextPage = () => {
        if (currentPage < totalPages) {


            return (
                <Link
                    href={window.location.pathname + '?page=' + (currentPage + 1)}
                 
                >
                </Link>
            )
        }
    }
    const prevPage = () => {
        if (currentPage >= totalPages) {
            window.location.reload(window.location.pathname + '?page=' + (currentPage - 1));

        }
    }

    const setCurrentPage = (number) => {
       
        window.location.reload(window.location.pathname + '?page=' + (number - 1));
    }

    const setFirstPage = () => {
        if (currentPage > 10) {
            return (
                <>
                    <button
                        key={0}
                        onClick={() => setCurrentPage(1)}
                        className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ${currentPage === 0 ? 'bg-gray-300' : ''}`}
                    >
                        {0}
                    </button>
                </>
            )
        }
    }

    const setLastPage = () => {
        if (currentPage < totalPages - 10) {
            return (
                <>
                    <button
                        key={totalPages}
                        onClick={() => setCurrentPage(totalPages)}
                        className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ${currentPage === totalPages ? 'bg-gray-300' : ''}`}
                    >
                        {totalPages}
                    </button>
                </>
            )
        }

    }
    const setBetweenPage = () => {
        if (currentPage > 10) {
            return (
                <>
                    <button
                        key={Math.round(totalPages / 2)}
                        onClick={() => setCurrentPage(Math.round(totalPages / 2))}
                        className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ${currentPage === totalPages ? 'bg-gray-300' : ''}`}
                    >
                        {Math.round(totalPages / 2)}
                    </button>
                </>
            )
        }
    }


    return (
        <div>
            <div className="flex flex-row justify-center items-center gap-x-2">
                <button onClick={prevPage} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Prev
                </button>
                {setFirstPage()}

                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => setCurrentPage(number)}
                        className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ${currentPage === number ? 'bg-gray-300' : ''}`}
                    >
                        {number}
                    </button>
                ))}
                {setBetweenPage()}
                {setLastPage()}

                <button onClick={nextPage} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r">
                    Next
                </button>
            </div>


            <br />
            <label className="text-gray-700 flex flex-row justify-center items-center gap-x-2 font-bold">
                Page {currentPage} of {totalPages}

            </label>
            <label className="text-gray-700 flex flex-row justify-center items-center gap-x-2 font-bold">
                Items: {totalItems}
            </label>
        </div>
    )
}

export default Pagination