"use client";

import Link from "next/link";
import { useState } from "react";

const HeldItemsTableRow = (props: { heldItem: PokeAPI.Pokemon.PokemonHeldItem, index: number }) => {
    const [open, setOpen] = useState(-1);

    return (
        <>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th scope="row" className="font-medium text-gray-900 px-6 py-4 whitespace-nowrap capitalize">
                    {props.heldItem.item.name}
                </th>
                <td className="px-6 py-4">
                    <Link href={props.heldItem.item.url} className="font-medium text-blue-600 hover:underline">{props.heldItem.item.url}</Link>
                </td>
                <td className="px-6 py-4">
                    <button className={`${open === props.index ? `hidden` : ``} inline-flex items-center bg-blue-700 rounded-lg font-medium text-sm text-center text-white px-3 py-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300`} type="button" onClick={() => setOpen(props.index)}>
                        Show more...
                        <svg className="size-4 text-white ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <button className={`${open === props.index ? `` : `hidden`} inline-flex items-center bg-blue-700 rounded-lg font-medium text-sm text-center text-white px-3 py-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300`} type="button" onClick={() => setOpen(-1)}>
                        Show less...
                        <svg className="size-4 text-white ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </td>
            </tr>
            <tr className={`${open === props.index ? `` : `hidden`}`}>
                <td className="p-4" colSpan={3}>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg max-w-[45rem]">
                        <table className="font-inter text-sm text-left text-gray-500 w-full">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 whitespace-nowrap">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Rarity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Version name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Version url
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.heldItem.version_details.map((detail, index) => (
                                    <tr key={index} className="odd:bg-white even:bg-gray-50 border-b whitespace-nowrap">
                                        <th scope="row" className="font-medium text-gray-900 px-6 py-4 whitespace-nowrap">
                                            {detail.rarity}
                                        </th>
                                        <td className="px-6 py-4 capitalize">
                                            {detail.version.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={detail.version.url} className="font-medium text-blue-600 hover:underline">{detail.version.url}</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default HeldItemsTableRow