export const TextAccent = (props: {black?: boolean, ml?: string}) => {
    return (
        <div className={`${props.ml ? props.ml : 'ml-1'} w-7 h-[1px] ${props.black ? 'bg-black' : 'bg-white'} mb-6`}/>
    )
}
