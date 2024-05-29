"use client";

import Link from "next/link";
import { useState } from "react";

const pageNumbers = [
    { href: '#', number: '1' },
    { href: '#', number: '2' },
    { href: '#', number: '3' },
    { href: '#', number: '4' },
    { href: '#', number: '5' },
];

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <footer className="sm:flex sm:items-center sm:justify-between bg-white rounded-lg sm:p-6 xl:p-8 p-4 w-full">
            <span className="text-sm text-gray-700 sm:mb-0 mb-4">
                Showing <span className="font-semibold text-gray-900">1</span> to <span className="font-semibold text-gray-900">50</span> of <span className="font-semibold text-gray-900">1302</span> Entries
            </span>
            <nav>
                <ul className="flex items-center -space-x-px font-inter text-sm h-8">
                    <li>
                        <Link
                            href="#"
                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
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
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
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