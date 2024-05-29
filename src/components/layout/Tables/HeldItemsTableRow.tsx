"use client";

import ShowMoreLess from "@/components/ui/ShowMoreLess";
import Link from "next/link";
import { useState } from "react";

const HeldItemsTableRow = (props: { heldItem: PokeAPI.Pokemon.PokemonHeldItem }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <tr className="odd:bg-white even:bg-gray-50 border-b whitespace-nowrap">
                <th scope="row" className="font-medium text-gray-900 px-6 py-4 capitalize">
                    {props.heldItem.item.name}
                </th>
                <td className="px-6 py-4">
                    <Link href={props.heldItem.item.url} className="font-medium text-blue-600 hover:underline">
                        {props.heldItem.item.url}
                    </Link>
                </td>
                <td className="px-6 py-4">
                    <button type="button" onClick={() => setOpen(!open)}>
                        <ShowMoreLess isOpen={open} />
                    </button>
                </td>
            </tr>
            <tr className={`${open ? `` : `hidden`}`}>
                <td className="p-4" colSpan={3}>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg max-w-[45rem]">
                        <table className="font-inter text-sm text-left text-gray-500 whitespace-nowrap w-full">
                            <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
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
                                    <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                                        <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                                            {detail.rarity}
                                        </th>
                                        <td className="px-6 py-4 capitalize">
                                            {detail.version.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={detail.version.url} className="font-medium text-blue-600 hover:underline">
                                                {detail.version.url}
                                            </Link>
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