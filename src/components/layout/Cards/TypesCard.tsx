import { getIconByTypeName } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const TypesCard = (props: {data: PokeAPI.Pokemon.Pokemon}) => {
    return (
        <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
            <h2 className="font-inter font-semibold text-xl text-gray-900">Types</h2>
            <div className="divide-y divide-gray-200 mt-2">
                {props.data.types.map((type, index) => {
                    const typeIcon = getIconByTypeName(type.type.name);
                    return (
                        <dl key={index} className="flex items-center justify-between gap-4 py-2">
                            <dt className="inline-flex items-center gap-x-2 font-inter font-medium text-sm text-gray-900 capitalize">
                                <Image src={typeIcon.typeIconSrc} alt={typeIcon.typeIconAlt} className="lg:size-8 size-6" />
                                <Link href={`/pokemon/type/${type.type.name}`}>{type.type.name}</Link>
                            </dt>
                            <dd className="font-inter font-normal text-sm text-gray-500">Slot {type.slot}</dd>
                        </dl>
                    )
                })}
            </div>
        </div>
    )
}

export default TypesCard