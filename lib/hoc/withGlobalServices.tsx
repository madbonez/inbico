import React, { PropsWithChildren, useContext, useEffect } from 'react';
import { ScrollContext } from '../context/ScrollContext';
import { UiContext } from '../context/UiContext';
import { RefsContext } from '../context/RefsContext';

const normalNavbar = {minimalNavbar: false};
const minimalNavbar = {minimalNavbar: true};

export const withGlobalServices = (WrappedComponent: any) => {
    return function GlobalServices(props: PropsWithChildren) {
        const [scrollPosition, setScrollPosition] = useContext(ScrollContext);
        const [uiState, updateUiState] = useContext(UiContext);
        const [refsState] = useContext(RefsContext);

        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);

            const heroComponentRef = refsState.heroRef?.current;
            if (heroComponentRef) {
                updateUiState(
                    position >= heroComponentRef.offsetHeight + heroComponentRef.offsetTop
                        ? minimalNavbar
                        : normalNavbar
                )
            }
        };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll, {passive: true});

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, [uiState, scrollPosition]);


        return <WrappedComponent {...props}/>
    }
}
