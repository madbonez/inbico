import Image from 'next/image';
import { TextAccent } from './atoms/TextAccent';
import { PropsWithChildren } from 'react';
import { LogosPreview } from '../lib/content/types/IndexPageContent';

export const Partners = (props: PropsWithChildren<{content: LogosPreview}>) => {
    return (
        <section className="flex flex-col items-center lg:w-container pt-16 pb-16">
            <h2 className="inline mb-1 text-2xl font-medium text-teal-900">{props.content.head}</h2>
            <TextAccent black/>

            <div className="mt-5 grayscale lg:w-container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                {
                    props.content.images.map(image => (
                        <div
                            key={image.url}
                            className="mr-5 mb-5 inline-block w-24 m-auto">
                            <Image
                                src={image.url}
                                layout="responsive"
                                width={image.sizeX}
                                height={image.sizeY}
                                alt={image.alt}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

