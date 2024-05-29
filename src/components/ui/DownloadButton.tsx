import Link from "next/link"

const DownloadButton = (props: { href: string }) => {
    return (
        <Link href={props.href} className="inline-flex items-center bg-blue-700 rounded-lg font-medium text-sm text-center text-white px-3 py-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Download
            <svg className="size-5 text-white ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
            </svg>
        </Link>
    )
}

export default DownloadButton