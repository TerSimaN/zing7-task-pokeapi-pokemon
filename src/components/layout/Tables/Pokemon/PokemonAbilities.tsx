"use client";

import AccordionHeader from "@/components/ui/AccordionHeader";
import Link from "next/link";
import { useState } from "react";

const PokemonAbilities = ({ pokemon }: { pokemon: PokeAPI.Pokemon.Pokemon }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <button className="w-full" type="button" onClick={() => setOpen(!open)}>
                <AccordionHeader text="Abilities" isOpen={open} className="border-b-0 rounded-t-xl" />
            </button>
            <div className={`${open ? `` : `hidden`}`}>
                <div className="overflow-x-auto shadow-md border-x sm:rounded-b-lg">
                    <table className="font-inter text-sm text-left text-gray-500 whitespace-nowrap w-full">
                        <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Ability slot
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ability name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ability url
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ability is hidden
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.abilities.map((ability, index) => (
                                <tr key={index} className="odd:bg-white even:bg-gray-50 border-b">
                                    <th scope="row" className="font-medium text-gray-900 px-6 py-4">
                                        {ability.slot}
                                    </th>
                                    <td className="px-6 py-4 capitalize">
                                        {ability.ability.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link href={ability.ability.url} className="font-medium text-blue-600 hover:underline">
                                            {ability.ability.url}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 capitalize">
                                        {`${ability.is_hidden ? 'yes' : 'no'}`}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PokemonAbilities