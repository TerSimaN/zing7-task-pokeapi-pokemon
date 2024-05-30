import Link from "next/link"

const NextPageButton = (props: { href: string }) => {
    return (
        <Link href={props.href} className="flex items-center justify-center bg-white border border-gray-300 sm:rounded-e-lg sm:rounded-s-none rounded-lg font-inter text-sm leading-tight text-gray-500 px-3 h-8 hover:bg-gray-100 hover:text-gray-700">
            <span className="md:hidden me-2">Next</span>
            <svg className="size-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
        </Link>
    )
}

export default NextPageButton