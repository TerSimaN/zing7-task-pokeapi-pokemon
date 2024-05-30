"use client";

import { createPageNumbersArray } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const Pagination = (props: { offset: number, pokeList: PokeAPI.Utility.NamedAPIResourceList }) => {
    const [currentPage, setCurrentPage] = useState(0);

    let count: number = props.pokeList.count;
    let fromEntry: number = 1 + props.offset;
    let toEntry: number = (50 + props.offset) > count ? count : (50 + props.offset);
    let pageNumbers = createPageNumbersArray(count);

    return (
        <footer className="sm:flex sm:items-center sm:justify-between bg-white rounded-lg sm:px-0 px-4 sm:py-6 xl:py-8 py-4 w-full">
            <span className="text-sm text-gray-700 sm:mb-0 mb-4">
                Showing <span className="font-semibold text-gray-900">{fromEntry}</span> to <span className="font-semibold text-gray-900">{toEntry}</span> of <span className="font-semibold text-gray-900">{count}</span> Entries
            </span>
            <nav>
                <ul className="flex items-center -space-x-px font-inter text-sm overflow-x-auto h-8">
                    <li>
                        <Link
                            href="#"
                            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ${!currentPage ? `invisible` : `visible`}`}
                            onClick={() => {
                                let newValue = currentPage - 1;
                                if (newValue > -1) {
                                    setCurrentPage(newValue);
                                }
                            }}>
                            <svg className="size-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"></path>
                            </svg>
                        </Link>
                    </li>
                    {pageNumbers.map((pageNumber, index) => (
                        <li key={index}>
                            <Link
                                href={pageNumber.href}
                                className={`flex items-center justify-center leading-tight border 
                                    ${currentPage === index ?
                                        `text-blue-500 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700` :
                                        `text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700`
                                    } px-3 h-8`}
                                onClick={() => setCurrentPage(index)}>
                                {pageNumber.number}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="#"
                            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === (pageNumbers.length - 1) ? `invisible` : `visible`}`}
                            onClick={() => {
                                let newValue = currentPage + 1;
                                if (newValue < pageNumbers.length) {
                                    setCurrentPage(newValue);
                                }
                            }}>
                            <svg className="size-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"></path>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Pagination