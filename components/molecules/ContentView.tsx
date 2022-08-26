import { PropsWithChildren } from 'react';

export const ContentView = (props: {html: string} & PropsWithChildren) => {
    return (
        <div className="content-view pl-2 pr-2" dangerouslySetInnerHTML={{__html: props.html}}/>
    )
}
