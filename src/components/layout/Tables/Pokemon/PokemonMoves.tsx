"use client";

import { useState } from "react";
import AccordionHeader from "@/components/ui/AccordionHeader";
import Link from "next/link";
import ShowMoreLess from "@/components/ui/ShowMoreLess";

const PokemonMoves = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="w-full" type="button" onClick={() => setOpen(!open)}>
                <AccordionHeader text="Moves" isOpen={open} />
            </button>
            <div className={`${open ? `` : `hidden`}`}>
                <div className="overflow-x-auto shadow-md border-x sm:rounded-b-lg">
                    <table className="font-inter text-sm text-left text-gray-500 whitespace-nowrap w-full">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Move name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Move url
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Version group details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.moves.map((move, index) => (
                                <TableRow key={index} move={move} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

const TableRow = (props: { move: PokeAPI.Pokemon.PokemonMove }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th scope="row" className="font-medium text-gray-900 px-6 py-4 capitalize">
                    {props.move.move.name}
                </th>
                <td className="px-6 py-4">
                    <Link href={props.move.move.url} className="font-medium text-blue-600 hover:underline">
                        {props.move.move.url}
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
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Level learned at
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Learn method name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Learn method url
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Version group name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Version group url
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.move.version_group_details.map((detail, index) => (
                                    <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                                        <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                                            {detail.level_learned_at}
                                        </th>
                                        <td className="px-6 py-4 capitalize">
                                            {detail.move_learn_method.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={detail.move_learn_method.url} className="font-medium text-blue-600 hover:underline">
                                                {detail.move_learn_method.url}
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4 capitalize">
                                            {detail.version_group.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={detail.version_group.url} className="font-medium text-blue-600 hover:underline">
                                                {detail.version_group.url}
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

export default PokemonMoves