import React from 'react';
import { BsMap } from 'react-icons/bs';

export const MapIcon = React.forwardRef<any, any>(({onClick, href}, ref) => {
    return (
        <a className="inline hover:text-orange-600 cursor-pointer text-white mt-3" href={href} onClick={onClick} ref={ref}>
            <BsMap/>
        </a>
    )
})
