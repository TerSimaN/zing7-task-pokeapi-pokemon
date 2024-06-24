"use client";

import AccordionHeader from "@/components/ui/AccordionHeader";
import TypeRelationsCard from "../../Cards/TypeRelationsCard";
import { useState } from "react"

const DamageRelations = (props: { data: PokeAPI.Types.Type }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button className="w-full" type="button" onClick={() => setOpen(!open)}>
                <AccordionHeader text="Damage relations" isOpen={open} />
            </button>
            <div className={`${open ? `` : `hidden`} grid grid-cols-2 gap-6 border-x p-6`}>
                <TypeRelationsCard name="No damage to" resourceArray={props.data.damage_relations.no_damage_to} />
                <TypeRelationsCard name="No damage from" resourceArray={props.data.damage_relations.no_damage_from} />
                <TypeRelationsCard name="Half damage to" resourceArray={props.data.damage_relations.half_damage_to} />
                <TypeRelationsCard name="Half damage from" resourceArray={props.data.damage_relations.half_damage_from} />
                <TypeRelationsCard name="Double damage to" resourceArray={props.data.damage_relations.double_damage_to} />
                <TypeRelationsCard name="Double damage from" resourceArray={props.data.damage_relations.double_damage_from} />
            </div>
        </>
    )
}

export default DamageRelations