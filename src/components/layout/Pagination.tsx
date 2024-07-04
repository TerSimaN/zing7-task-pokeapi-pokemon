"use client";

import { createPageNumbersArray } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import PreviousPageButton from "../ui/PreviousPageButton";
import NextPageButton from "../ui/NextPageButton";

const Pagination = ({ offset, entries, onPageChange }: { offset: number, entries: number, onPageChange?: (value: string | number) => void }) => {
    const [onPage, setOnPage] = useState(0);
    const [previousPage, setPreviousPage] = useState(1);
    const [nextPage, setNextPage] = useState(2);

    let count: number = entries;
    let fromEntry: number = 1 + offset;
    let toEntry: number = (50 + offset) > count ? count : (50 + offset);
    let pageNumbers = createPageNumbersArray(count);

    function handlePreviousPage() {
        let nextValue = onPage - 1;
        if (nextValue > -1) {
            setOnPage(nextValue);
        }
        updatePreviousAndNextPage(previousPage);
    }

    function handleNextPage() {
        let nextValue = onPage + 1;
        if (nextValue < pageNumbers.length) {
            setOnPage(nextValue);
        }
        updatePreviousAndNextPage(nextPage);
    }

    function handleCurrentPage(pageNumber: { href: string, number: string }, index: number) {
        let pageValue = parseInt(pageNumber.number);
        setOnPage(index);
        updatePreviousAndNextPage(pageValue);
    }

    function updatePreviousAndNextPage(newPage: number) {
        let newPreviousPage = newPage - 1;
        let newNextPage = newPage + 1;

        if (newPreviousPage > 0) {
            setPreviousPage(newPreviousPage);
        } else {
            setPreviousPage(1);
        }

        if (newNextPage <= pageNumbers.length) {
            setNextPage(newNextPage);
        }
    }

    return (
        <footer className="sm:flex sm:items-center sm:justify-between bg-white rounded-lg sm:px-0 px-4 sm:py-6 xl:py-8 py-4 w-full">
            <span className="text-sm text-gray-700 min-w-fit">
                Showing <span className="font-semibold text-gray-900">{fromEntry}</span> to <span className="font-semibold text-gray-900">{toEntry}</span> of <span className="font-semibold text-gray-900">{count}</span> Entries
            </span>
            <nav className="flex items-center md:justify-normal justify-between -space-x-px font-inter text-sm sm:mt-0 mt-4 h-8 sm:max-w-sm lg:max-w-xl 2xl:max-w-none">
                <button onClick={() => {
                    handlePreviousPage();
                    if (onPageChange) {
                        onPageChange(previousPage);
                    }
                }}>
                    <PreviousPageButton href={`?page=${previousPage}`} />
                </button>
                <ul className="hidden md:flex items-center -space-x-px overflow-x-auto">
                    {pageNumbers.map((pageNumber, index) => (
                        <li key={index}>
                            <Link
                                href={pageNumber.href}
                                className={`flex items-center justify-center leading-tight border 
                                    ${onPage === index ?
                                        `text-blue-500 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700` :
                                        `text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700`
                                    } px-3 h-8`}
                                onClick={() => {
                                    handleCurrentPage(pageNumber, index);
                                    if (onPageChange) {
                                        onPageChange(pageNumber.number);
                                    }
                                }}>
                                {pageNumber.number}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button onClick={() => {
                    handleNextPage();
                    if (onPageChange) {
                        onPageChange(nextPage);
                    }
                }}>
                    <NextPageButton href={`?page=${nextPage}`} />
                </button>
            </nav>
        </footer>
    )
}

export default Pagination