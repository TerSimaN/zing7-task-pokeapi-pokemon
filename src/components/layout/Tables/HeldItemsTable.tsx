"use client";

import { useState } from "react";
import HeldItemsTableRow from "./HeldItemsTableRow";
import AccordionHeader from "@/components/ui/AccordionHeader";

const HeldItemsTable = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className="w-full" type="button" onClick={() => setOpen(!open)}>
                <AccordionHeader text="Held items" isOpen={open} />
            </button>
            <div className={`${open ? `` : `hidden`}`}>
                <div className="overflow-x-auto shadow-md border-x sm:rounded-b-lg">
                    <table className="font-inter text-sm text-left text-gray-500 whitespace-nowrap w-full">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Held item name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Held item url
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Version details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.held_items.map((heldItem, index) => (
                                <HeldItemsTableRow key={index} heldItem={heldItem} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HeldItemsTable