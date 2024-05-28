import Image from "next/image"
import Link from "next/link"
import { poke_api_logo, pokemon_logo } from "../../../public/assets/images"

const MainHeader = () => {
    return (
        <header>
            <nav className="bg-white border-gray-200 lg:px-6 px-4 py-3">
                <div className="flex flex-wrap sm:justify-between justify-center items-center mx-auto max-w-screen-xl">
                    <Link href={'/'}>
                        <Image
                            src={pokemon_logo}
                            alt="Pokemon Logo"
                        />
                    </Link>
                    <div className="flex items-end gap-x-2">
                        <span className="font-inter font-semibold select-none">powered by</span>
                        <Link href={'https://pokeapi.co/docs/v2'}>
                            <Image
                                src={poke_api_logo}
                                alt="PokeAPI Logo"
                                className="lg:w-36 w-24"
                            />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader