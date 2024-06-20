"use client"

import Image from "next/image"
import { useState } from "react"
import { generations, types } from "@/config/constants"
import { searchFilter } from "@/lib/actions/pokemon"
import { handleFilterChange } from "@/lib/actions/filter"

const Filter = (props: { searchValue: string, onSearchBarChange: any }) => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <section className="sm:p-0 p-4">
            <div className="flex flex-wrap justify-between items-start">
                <div className="flex sm:items-center sm:justify-normal justify-between sm:w-auto w-full lg:order-2">
                    <form className="hidden lg:inline-block w-full" action={searchFilter} id="search-form">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="text-gray-500 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                className="block bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full placeholder:font-inter placeholder:text-sm placeholder:text-gray-900/50"
                                id="search-bar"
                                name="search-bar"
                                type="search"
                                placeholder="Search"
                                value={props.searchValue}
                                onChange={(e) => props.onSearchBarChange(e.target.value)}
                                disabled
                            />
                        </div>
                    </form>
                    <button className={`lg:hidden inline-flex items-center rounded-lg font-inter font-medium text-sm text-gray-800 p-2 ${filterOpen ? `bg-green-300 focus:outline-none focus:ring-2 focus:ring-gray-200` : `hover:bg-green-100`}`} type="button" onClick={() => setFilterOpen(!filterOpen)}>
                        <svg className="sm:size-7 size-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
                        </svg>
                    </button>
                    <button className={`lg:hidden inline-flex items-center rounded-lg font-inter font-medium text-sm text-gray-800 p-2 ml-2 ${searchOpen ? `bg-green-300 focus:outline-none focus:ring-2 focus:ring-gray-200` : `hover:bg-green-100`}`} type="button" onClick={() => setSearchOpen(!searchOpen)}>
                        <svg className="sm:size-7 size-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className={`${searchOpen ? `` : `hidden`}`}>
                    <form className="lg:hidden flex items-center sm:mt-0 mt-4" action={searchFilter}>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="text-gray-500 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                className="block bg-gray-50 border border-gray-300 rounded-lg pl-10 p-2.5 py-2 w-full placeholder:font-inter placeholder:text-sm placeholder:text-gray-900/50"
                                id="search-bar"
                                name="search-bar"
                                type="search"
                                placeholder="Search"
                                value={props.searchValue}
                                onChange={(e) => props.onSearchBarChange(e.target.value)}
                                disabled
                            />
                        </div>
                        <button className="inline-flex items-center bg-blue-700 border border-blue-700 rounded-lg font-inter font-medium text-sm text-white p-2.5 ml-2" type="submit">
                            <svg className="mr-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Search
                        </button>
                    </form>
                </div>
                <div className={`${filterOpen ? `` : `hidden`} lg:block lg:mt-0 mt-4`}>
                    <h3 className="font-inter font-medium text-lg text-gray-900 mb-3">Choose type:</h3>
                    <ul className="grid sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-4 grid-cols-3 gap-4 font-inter w-full">
                        {types.map((type, index) => (
                            <li key={index}>
                                <input type="checkbox" id={`${type.typeName}-type-option`} name="type" value={type.typeName} className="hidden peer" onChange={(e) => handleFilterChange("type", e.target.value)} />
                                <label className="inline-flex items-center justify-between bg-white border-2 border-gray-200 rounded-lg text-gray-500 p-1 w-full cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50" htmlFor={`${type.typeName}-type-option`}>
                                    <div className="flex items-center">
                                        <Image src={type.typeIconSrc} alt={type.typeIconAlt} className="lg:size-8 size-6" />
                                        <div className="text-sm font-semibold lg:ms-2 w-full capitalize">{type.typeName}</div>
                                    </div>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`lg:block lg:mt-0 mt-4`}>
                    <h3 className="font-inter font-medium text-lg text-gray-900 mb-3">Choose generation:</h3>
                    <ul className="grid sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-4 grid-cols-3 gap-4 font-inter w-full">
                        {generations.map((generation, index) => (
                            <li key={index}>
                                <input type="checkbox" id={`${generation.genName}-gen-option`} name="gen" value={generation.genId} className="hidden peer" onChange={(e) => handleFilterChange("gen", e.target.value)} />
                                <label className="inline-flex items-center justify-between bg-white border-2 border-gray-200 rounded-lg text-gray-500 p-1 w-full cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50" htmlFor={`${generation.genName}-gen-option`}>
                                    <div className="flex items-center">
                                        <Image src={generation.genIconSrc} alt={generation.genIconAlt} className="lg:size-8 size-6" />
                                        <div className="text-sm font-semibold lg:ms-2 w-full capitalize">{generation.genName}</div>
                                    </div>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Filter