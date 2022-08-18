import { PropsWithChildren } from 'react';

export const ContentView = (props: {html: string} & PropsWithChildren) => {
    return (
        <div className="content-view" dangerouslySetInnerHTML={{__html: props.html}}/>
    )
}
