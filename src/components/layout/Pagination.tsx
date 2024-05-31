"use client";

import { createPageNumbersArray } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import PreviousPageButton from "../ui/PreviousPageButton";
import NextPageButton from "../ui/NextPageButton";

const Pagination = (props: { offset: number, pokeList: PokeAPI.Utility.NamedAPIResourceList }) => {
    const [current, setCurrent] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [previousPage, setPreviousPage] = useState(1);
    const [nextPage, setNextPage] = useState(currentPage + 1);

    let count: number = props.pokeList.count;
    let fromEntry: number = 1 + props.offset;
    let toEntry: number = (50 + props.offset) > count ? count : (50 + props.offset);
    let pageNumbers = createPageNumbersArray(count);

    function handlePageChange(newPage: number) {
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
        setCurrentPage(newPage);
    }

    return (
        <footer className="sm:flex sm:items-center sm:justify-between bg-white rounded-lg sm:px-0 px-4 sm:py-6 xl:py-8 py-4 w-full">
            <span className="text-sm text-gray-700 min-w-fit">
                Showing <span className="font-semibold text-gray-900">{fromEntry}</span> to <span className="font-semibold text-gray-900">{toEntry}</span> of <span className="font-semibold text-gray-900">{count}</span> Entries
            </span>
            <nav className="flex items-center md:justify-normal justify-between -space-x-px font-inter text-sm sm:mt-0 mt-4 h-8 sm:max-w-sm lg:max-w-xl 2xl:max-w-none">
                <button onClick={() => {
                    let value = current - 1;
                    if (value > -1) {
                        setCurrent(value);
                    }
                    handlePageChange(previousPage);
                }}>
                    <PreviousPageButton href={`?page=${previousPage}`} />
                </button>
                <ul className="hidden md:flex items-center -space-x-px overflow-x-auto">
                    {pageNumbers.map((pageNumber, index) => (
                        <li key={index}>
                            <Link
                                href={pageNumber.href}
                                className={`flex items-center justify-center leading-tight border 
                                    ${current === index ?
                                        `text-blue-500 bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700` :
                                        `text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700`
                                    } px-3 h-8`}
                                onClick={() => {
                                    let pageValue = parseInt(pageNumber.number);
                                    setCurrent(index);
                                    handlePageChange(pageValue);
                                }}>
                                {pageNumber.number}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button onClick={() => {
                    let value = current + 1;
                    if (value < pageNumbers.length) {
                        setCurrent(value);
                    }
                    handlePageChange(nextPage);
                }}>
                    <NextPageButton href={`?page=${nextPage}`} />
                </button>
            </nav>
        </footer>
    )
}

export default Pagination