const AccordionHeader = (props: { text: string, isOpen: boolean, className?: string }) => {
    return (
        <h2 className={`flex items-center justify-between gap-3 border border-gray-200 font-inter font-medium text-gray-500 p-5 w-full ${props.className ? props.className : `border-b-0`} hover:bg-gray-100`}>
            <span>{props.text}</span>
            <svg className={`shrink-0 size-5 ${props.isOpen ? `rotate-180` : ``}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
            </svg>
        </h2>
    )
}

export default AccordionHeader