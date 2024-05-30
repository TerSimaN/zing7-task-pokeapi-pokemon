import DownloadButton from "@/components/ui/DownloadButton"

const CriesCard = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    return (
        <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
            <h2 className="font-inter font-semibold text-xl text-gray-900">Cries</h2>
            <div className="divide-y divide-gray-200 mt-2">
                <dl className="flex items-center justify-between gap-4 py-2">
                    <dt className="font-inter font-medium text-sm text-gray-900 capitalize">Latest</dt>
                    <dd className="font-inter font-normal text-sm text-gray-500">
                        <DownloadButton href={props.data.cries.latest ?? '#'} />
                    </dd>
                </dl>
                <dl className="flex items-center justify-between gap-4 py-2">
                    <dt className="font-inter font-medium text-sm text-gray-900 capitalize">Legacy</dt>
                    <dd className="font-inter font-normal text-sm text-gray-500">
                        <DownloadButton href={props.data.cries.legacy ?? '#'} />
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export default CriesCard