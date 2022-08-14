import React, { createContext, Dispatch, PropsWithChildren, RefObject, useMemo, useState } from "react";

export interface UiState {
    minimalNavbar: boolean;
}

const initState: UiState = {
    minimalNavbar: false,
}

export const UiContext = createContext<[UiState, Dispatch<UiState>]>([initState, null as unknown as Dispatch<any>]);

export const UiContextProvider = (props: PropsWithChildren) => {
    const [state, dispatchNewState] = useState(initState);

    return (
        <UiContext.Provider value={useMemo(() => ([state, dispatchNewState]), [state])}>
            {props.children}
        </UiContext.Provider>
    );
};
