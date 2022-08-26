import React, { PropsWithChildren } from 'react';

export const ContentContainer = React.memo(
    ({children}: PropsWithChildren) => {
        return (
            <div className="w-full flex flex-col justify-center items-center pb-10">
                <div className="lg:w-container justify-center items-center">
                    {children}
                </div>
            </div>
        )
    }
)
