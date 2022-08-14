import { PropsWithChildren } from 'react';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { Copyrights } from '../Copyrights';
import { Hero } from '../Hero';

export const BasePageTemplate = (props: PropsWithChildren) => {
    return (
        <>
            <Header/>
            <Navigation/>
            <Hero/>
            {props.children}
            <Footer/>
            <Copyrights/>
        </>
    )
}
