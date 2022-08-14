import React, { PropsWithChildren } from 'react';
import { ScrollContextProvider } from '../context/ScrollContext';
import { UiContextProvider } from '../context/UiContext';
import { RefsContextProvider } from '../context/RefsContext';

export const withGlobalContext = (WrappedComponent: any) => {
    return function GlobalContext(props: PropsWithChildren) {
        return (
            <RefsContextProvider>
                <UiContextProvider>
                    <ScrollContextProvider>
                        <WrappedComponent {...props}/>
                    </ScrollContextProvider>
                </UiContextProvider>
            </RefsContextProvider>
        )
    }
}
