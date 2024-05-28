const StatsCard = (props: {data: PokeAPI.Pokemon.Pokemon}) => {
    return (
        <div className="bg-gray-50 border border-gray-100 shadow-md rounded-lg md:p-6 p-4 max-w-full">
            <h2 className="font-inter font-semibold text-xl text-gray-900">Stats</h2>
            <div className="divide-y divide-gray-200 mt-2">
                {props.data.stats.map((stat, index) => (
                    <dl key={index} className="flex items-center justify-between gap-4 py-2">
                        <dt className="font-inter font-medium text-sm text-gray-900 capitalize">{stat.stat.name}</dt>
                        <dd className="font-inter font-normal text-sm text-gray-500">{stat.base_stat}</dd>
                    </dl>
                ))}
            </div>
        </div>
    )
}

export default StatsCard