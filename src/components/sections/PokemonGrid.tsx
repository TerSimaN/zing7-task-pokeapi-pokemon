import Image from "next/image"
import Link from "next/link"
import { no_image } from "../../../public/assets/images"
import { shadow_type } from "../../../public/assets/types"

const PokemonGrid = () => {
    return (
        <section className="bg-white">
            <div className="lg:py-16 lg:px-6 py-8 px-4 mx-auto max-w-screen-xl">
                <div className="grid gap-8 lg:grid-cols-5">
                    <article className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
                        <Link href={'/pokemon/0'}>
                            <Image
                                src={no_image}
                                alt="pokemon image"
                                className="rounded-lg mb-5"
                            />
                        </Link>
                        <h2 className="font-inter font-bold text-2xl tracking-tight text-gray-900 mb-2">
                            <Link href={'/pokemon/0'}>Pokemon name</Link>
                        </h2>
                        <div className="flex items-center justify-between mb-5">
                            <span className="inline-flex items-center bg-gray-100 rounded font-inter font-medium text-xs text-gray-500 pl-1.5 pr-2 py-1 capitalize select-none hover:bg-gray-200 hover:text-gray-600">
                                <Image src={shadow_type} alt="shadow_type" className="size-5" />
                                shadow
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <Link href={'/pokemon/0'} className="inline-flex items-center font-inter font-medium text-gray-600 hover:underline">
                                Read more
                                <svg className="ml-2 size-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default PokemonGrid