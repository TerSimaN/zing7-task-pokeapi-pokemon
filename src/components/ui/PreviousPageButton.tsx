import Link from "next/link"

const PreviousPageButton = (props: { href: string }) => {
    return (
        <Link href={props.href} className="flex items-center justify-center bg-white border sm:border-e-0 border-gray-300 sm:rounded-s-lg sm:rounded-e-none rounded-lg font-inter text-sm leading-tight text-gray-500 px-3 h-8 hover:bg-gray-100 hover:text-gray-700">
            <svg className="size-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="md:hidden ms-2">Previous</span>
        </Link>
    )
}

export default PreviousPageButton