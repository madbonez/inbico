import React, { createContext, Dispatch, PropsWithChildren, RefObject, useState } from "react";

export interface RefsState {
    heroRef: RefObject<HTMLElement> | null;
}

const initState: RefsState = {
    heroRef: null,
}

export const RefsContext = createContext<[RefsState, Dispatch<RefsState>]>([initState, null as unknown as Dispatch<any>]);

export const RefsContextProvider = (props: PropsWithChildren) => {
    const [state, dispatchNewState] = useState(initState);

    return (
        <RefsContext.Provider value={[state, dispatchNewState]}>
            {props.children}
        </RefsContext.Provider>
    );
};
