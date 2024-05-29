"use client";

import { useState } from "react";
import MoveTableRow from "./MoveTableRow";
import AccordionHeader from "@/components/ui/AccordionHeader";

const MovesTable = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
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
                                <MoveTableRow key={index} move={move} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MovesTable