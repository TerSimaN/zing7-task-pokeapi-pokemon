const ShowMoreLess = (props: { isOpen: boolean, className?: string }) => {
    return (
        <span className="inline-flex items-center bg-blue-700 rounded-lg font-medium text-sm text-center text-white px-3 py-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            {props.isOpen ? 'Show less...' : 'Show more...'}
            <svg className={`${props.isOpen ? `hidden` : ``} size-4 text-white ms-2`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clipRule="evenodd" />
            </svg>
            <svg className={`${props.isOpen ? `` : `hidden`} size-4 text-white ms-2`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clipRule="evenodd" />
            </svg>
        </span>
    )
}

export default ShowMoreLess