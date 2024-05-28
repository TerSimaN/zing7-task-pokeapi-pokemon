import Link from "next/link"

const SpeciesCard = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    return (
        <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
            <h2 className="font-inter font-semibold text-xl text-gray-900">Species</h2>
            <div className="divide-y divide-gray-200 mt-2">
                <dl className="flex items-center justify-between gap-4 py-2">
                    <dt className="font-inter font-medium text-sm text-gray-900 capitalize">Name</dt>
                    <dd className="font-inter font-normal text-sm text-gray-500 capitalize">{props.data.species.name}</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4 py-2">
                    <dt className="font-inter font-medium text-sm text-gray-900 capitalize">Url</dt>
                    <dd className="font-inter font-normal text-sm text-gray-500 hover:underline">
                        <Link href={props.data.species.url}>{props.data.species.url}</Link>
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export default SpeciesCard