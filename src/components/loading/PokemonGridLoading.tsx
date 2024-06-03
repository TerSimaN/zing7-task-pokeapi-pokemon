import CardLoadingSkeleton from "../loading/CardLoadingSkeleton"

const PokemonGridLoading = () => {
  return (
    <div className="bg-white">
      <div className="lg:px-6 sm:px-4 px-8 lg:py-16 py-8 mx-auto max-w-screen-xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <CardLoadingSkeleton />
          <CardLoadingSkeleton />
          <CardLoadingSkeleton />
          <CardLoadingSkeleton />
          <CardLoadingSkeleton />
        </div>
      </div>
    </div>
  )
}

export default PokemonGridLoading