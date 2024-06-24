import { getIconByTypeName } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const TypeRelationsCard = (props: { name: string, resourceArray: PokeAPI.Utility.NamedAPIResource[] }) => {
    return (
        <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg p-4 max-w-full">
            <h2 className="font-inter font-semibold text-xl text-gray-900">{props.name}</h2>
            <div className="grid grid-cols-3 gap-3 mt-3">
                {props.resourceArray.map((resource, index) => {
                    const typeIcon = getIconByTypeName(resource.name);
                    return (
                        <div key={index} className="inline-flex items-center gap-x-2 font-inter font-medium text-sm text-gray-900 capitalize">
                            <Image src={typeIcon.typeIconSrc} alt={typeIcon.typeIconAlt} className="lg:size-8 size-6" />
                            <Link href={`/pokemon/type/${resource.name}`}>{resource.name}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TypeRelationsCard