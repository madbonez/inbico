import React, { createContext, Dispatch, PropsWithChildren, RefObject, useMemo, useState } from "react";
import { SiteConfig } from '../content/types/SiteConfig';

const initState: SiteConfig = {
    address: '',
    phones: [],
    email: '',
    userActionEndpoint: '',
    vkUrl: '',
    ytUrl: '',
    fastLinks: [],
}

export const SiteConfigContext = createContext<[SiteConfig, Dispatch<SiteConfig>]>([initState, null as unknown as Dispatch<any>]);

export const SiteConfigContextProvider = (props: PropsWithChildren<{config: SiteConfig}>) => {
    const [state, dispatchNewState] = useState(props.config);

    return (
        <SiteConfigContext.Provider value={[state, dispatchNewState]}>
            {props.children}
        </SiteConfigContext.Provider>
    );
};
