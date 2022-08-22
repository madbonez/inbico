import { PropsWithChildren } from 'react';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Copyrights } from './Copyrights';
import { Hero } from './Hero';
import { SiteConfig } from '../lib/content/types/SiteConfig';
import { SiteConfigContextProvider } from '../lib/context/SiteConfigContext';

export const BasePageTemplate = (props: PropsWithChildren<{ config: SiteConfig }>) => {
    return (
        <>
            <SiteConfigContextProvider config={props.config}>
                <Header/>
                <Navigation/>
                <Hero/>
                {props.children}
                <Footer/>
                <Copyrights/>
            </SiteConfigContextProvider>
        </>
    )
}
