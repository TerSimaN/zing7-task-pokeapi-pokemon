"use client";

import AccordionHeader from "@/components/ui/AccordionHeader";
import Link from "next/link";
import { useState } from "react";

const MoveDamage = (props: { data: PokeAPI.Utility.NamedAPIResource }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="w-full" type="button" onClick={() => setOpen(!open)}>
                <AccordionHeader text="Move damage class" isOpen={open} />
            </button>
            <div className={`${open ? `` : `hidden`}`}>
                <div className="overflow-x-auto shadow-md border-x sm:rounded-b-lg">
                    <table className="font-inter text-sm text-left text-gray-500 whitespace-nowrap w-full">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Move damage class name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Move damage class url
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white even:bg-gray-50 border-b">
                                <th scope="row" className="font-medium text-gray-900 px-6 py-4 capitalize">
                                    {props.data.name}
                                </th>
                                <td className="px-6 py-4">
                                    <Link href={props.data.url} className="font-medium text-blue-600 hover:underline">
                                        {props.data.url}
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default MoveDamage