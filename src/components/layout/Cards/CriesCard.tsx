import Link from "next/link"

const CriesCard = (props: { data: PokeAPI.Pokemon.Pokemon }) => {
    return (
        <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
            <h2 className="font-inter font-semibold text-xl text-gray-900">Cries</h2>
            <div className="divide-y divide-gray-200 mt-2">
                <dl className="flex items-center justify-between gap-4 py-2">
                    <dt className="font-inter font-medium text-sm text-gray-900 capitalize">Latest</dt>
                    <dd className="font-inter font-normal text-sm text-gray-500">
                        <button className="inline-flex items-center bg-blue-700 rounded-lg font-medium text-sm text-center text-white px-3 py-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type="button">
                            <Link href={props.data.cries.latest}>Download</Link>
                            <svg className="size-5 text-white ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
                            </svg>
                        </button>
                    </dd>
                </dl>
                <dl className="flex items-center justify-between gap-4 py-2">
                    <dt className="font-inter font-medium text-sm text-gray-900 capitalize">Legacy</dt>
                    <dd className="font-inter font-normal text-sm text-gray-500">
                        <button className="inline-flex items-center bg-blue-700 rounded-lg font-medium text-sm text-center text-white px-3 py-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type="button">
                            <Link href={props.data.cries.legacy}>Download</Link>
                            <svg className="size-5 text-white ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
                            </svg>
                        </button>
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export default CriesCard