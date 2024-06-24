"use client";

import AccordionHeader from "@/components/ui/AccordionHeader";
import ShowMoreLess from "@/components/ui/ShowMoreLess";
import Link from "next/link";
import { useState } from "react";
import TypeRelationsCard from "../../Cards/TypeRelationsCard";

const PastDamageRelations = (props: { data: PokeAPI.Types.TypeRelationsPast[] }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="w-full" type="button" onClick={() => setOpen(!open)}>
                <AccordionHeader text="Past damage relations" isOpen={open} />
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
                                    Past damage relations
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.map((pastDamageRelation, index) => (
                                <TableRow key={index} pastDamageRelation={pastDamageRelation} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

const TableRow = (props: { pastDamageRelation: PokeAPI.Types.TypeRelationsPast }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <tr className="odd:bg-white even:bg-gray-50 border-b">
                <th scope="row" className="font-medium text-gray-900 px-6 py-4 capitalize">
                    {props.pastDamageRelation.generation.name}
                </th>
                <td className="px-6 py-4">
                    <Link
                        href={props.pastDamageRelation.generation.url}
                        className="font-medium text-blue-600 hover:underline"
                    >
                        {props.pastDamageRelation.generation.url}
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
                    <div className={`${open ? `` : `hidden`} grid grid-cols-2 gap-6 p-6`}>
                        <TypeRelationsCard
                            name="No damage to"
                            resourceArray={props.pastDamageRelation.damage_relations.no_damage_to}
                        />
                        <TypeRelationsCard
                            name="No damage from"
                            resourceArray={props.pastDamageRelation.damage_relations.no_damage_from}
                        />
                        <TypeRelationsCard
                            name="Half damage to"
                            resourceArray={props.pastDamageRelation.damage_relations.half_damage_to}
                        />
                        <TypeRelationsCard
                            name="Half damage from"
                            resourceArray={props.pastDamageRelation.damage_relations.half_damage_from}
                        />
                        <TypeRelationsCard
                            name="Double damage to"
                            resourceArray={props.pastDamageRelation.damage_relations.double_damage_to}
                        />
                        <TypeRelationsCard
                            name="Double damage from"
                            resourceArray={props.pastDamageRelation.damage_relations.double_damage_from}
                        />
                    </div>
                </td>
            </tr>
        </>
    )
}

export default PastDamageRelations