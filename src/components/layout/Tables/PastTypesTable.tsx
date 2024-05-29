"use client";

import { useState } from "react";
import PastTypesTableRow from "./PastTypesTableRow";
import AccordionHeader from "@/components/ui/AccordionHeader";

const PastTypesTable = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
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
                            {props.data.past_types.map((pastType, index) => (
                                <PastTypesTableRow key={index} pastType={pastType} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PastTypesTable