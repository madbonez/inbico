import Image from 'next/image';
import { TextAccent } from './atoms/TextAccent';
import { PropsWithChildren } from 'react';
import { LogosPreview } from '../lib/content/types/IndexPageContent';

export const Banks = (props: PropsWithChildren<{content: LogosPreview}>) => {
    return (
        <section className="flex flex-col items-center lg:w-container pt-16 pb-16">
            <h2 className="inline mb-1 text-lg font-bold text-teal-900">{props.content.head}</h2>
            <TextAccent black/>

            <div className="mt-5 grayscale lg:w-container grid grid-cols-2 md:grid-cols-4">
                {
                    props.content.images.map(image => (
                        <div key={image.url} className="inline-block w-32 m-auto mr-5">
                            <Image
                                src={image.url}
                                alt={image.alt}
                                layout="responsive"
                                width={image.sizeX}
                                height={image.sizeY}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
