"use client";

import { useState } from "react";
import AccordionHeader from "@/components/ui/AccordionHeader";
import Link from "next/link";
import ShowMoreLess from "@/components/ui/ShowMoreLess";

const PastTypes = ({ pokemon }: { pokemon: PokeAPI.Pokemon.Pokemon }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="w-full" type="button" onClick={() => setOpen(!open)}>
                <AccordionHeader text="Past types" isOpen={open} className="border-b" />
            </button>
            <div className={`${open ? `` : `hidden`}`}>
                <div className="overflow-x-auto shadow-md border-x sm:rounded-b-lg">
                    <table className="font-inter text-sm text-left text-gray-500 whitespace-nowrap w-full">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Generation name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Generation url
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Past types
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.past_types.map((pastType, index) => (
                                <TableRow key={index} pastType={pastType} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

const TableRow = ({ pastType }: { pastType: PokeAPI.Pokemon.PokemonTypePast }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th scope="row" className="font-medium text-gray-900 px-6 py-4 capitalize">
                    {pastType.generation.name}
                </th>
                <td className="px-6 py-4">
                    <Link href={pastType.generation.url} className="font-medium text-blue-600 hover:underline">
                        {pastType.generation.url}
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
                                        Slot
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Past type name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Past type url
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {pastType.types.map((type, index) => (
                                    <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                                        <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                                            {type.slot}
                                        </th>
                                        <td className="px-6 py-4 capitalize">
                                            {type.type.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={type.type.url} className="font-medium text-blue-600 hover:underline">
                                                {type.type.url}
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

export default PastTypes