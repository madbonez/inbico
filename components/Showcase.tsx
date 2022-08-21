import Image from 'next/image';
import { TextAccent } from './atoms/TextAccent';
import { PropsWithChildren } from 'react';
import { ShowcaseContent } from '../lib/content/types/IndexPageContent';

export const Showcase = (props: PropsWithChildren<{content: ShowcaseContent}>) => {
    return (
        <section
            className="grid grid-rows-[0_auto_auto_0] lg:grid-rows-[auto_auto] lg:grid-cols-[auto_minmax(0,_390px)_minmax(0,_780px)_auto] text-teal-900">
            <div className="bg-blue grid"></div>
            <div className="bg-blue text-white p-10 pt-16 pb-16">
                <h2 className="mb-1 text-2xl font-bold">{props.content.about.head}</h2>
                <TextAccent/>
                <span className="text-sm">
                    {props.content.about.body}
                </span>
                <div
                    className="mt-16 border-grayBg rounded border w-52 p-2 hover:bg-nepal cursor-pointer text-center">
                    Больше информации
                </div>
            </div>
            <div className="bg-grayBg p-10 pt-16 pb-16">
                <h2 className="mb-1 text-2xl font-bold">{props.content.services.head}</h2>
                <TextAccent black/>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        props.content.services.blocks.map(block => (
                            <div key={block.head + block.image} className="grid grid-cols-[38px_auto]">
                                <Image
                                    layout="fixed"
                                    src={block.image}
                                    width={block.sizeX}
                                    height={block.sizeY}
                                />
                                <div className="ml-7">
                                    <h3 className="text-lg font-medium mb-2">{block.head}</h3>
                                    <span className="text-sm text-gray-600">{block.body}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="bg-grayBg"></div>
        </section>
    )
}
