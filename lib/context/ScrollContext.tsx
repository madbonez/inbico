import React, { createContext, Dispatch, PropsWithChildren, useState } from "react";

export const ScrollContext = createContext<[number, Dispatch<number>]>([0, () => {}]);

export const ScrollContextProvider = (props: PropsWithChildren) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    return (
        <ScrollContext.Provider value={[scrollPosition, setScrollPosition]}>
            {props.children}
        </ScrollContext.Provider>
    );
};
