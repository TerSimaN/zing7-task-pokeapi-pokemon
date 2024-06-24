"use client";

import AccordionHeader from "@/components/ui/AccordionHeader";
import Link from "next/link";
import { useState } from "react";

const PokemonForms = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="w-full" type="button" onClick={() => setOpen(!open)}>
                <AccordionHeader text="Forms" isOpen={open} />
            </button>
            <div className={`${open ? `` : `hidden`}`}>
                <div className="overflow-x-auto shadow-md border-x sm:rounded-b-lg">
                    <table className="font-inter text-sm text-left text-gray-500 whitespace-nowrap w-full">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Form name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Form url
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.forms.map((form, index) => (
                                <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="font-medium text-gray-900 px-6 py-4 capitalize">
                                        {form.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        <Link href={form.url} className="font-medium text-blue-600 hover:underline">
                                            {form.url}
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PokemonForms