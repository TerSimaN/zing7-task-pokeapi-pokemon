"use client";

import { useState } from "react"
import AccordionHeader from "@/components/ui/AccordionHeader"

const TypesTable = (props: { data: PokeAPI.Types.Type }) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className="w-full" type="button" onClick={() => setOpen(!open)}>
                <AccordionHeader text="Types" isOpen={open} />
            </button>
            <div className={`${open ? `` : `hidden`}`}>
                <div className="overflow-x-auto shadow-md border-x sm:rounded-b-lg">
                    <table className="font-inter text-sm text-left text-gray-500 whitespace-nowrap w-full">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Generation
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Move damage class
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Moves
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Names
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Past damage relations
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Pokemon
                                </th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TypesTable