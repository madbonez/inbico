import { BsArrowLeft, BsArrowRight, BsChatSquareQuote } from 'react-icons/bs';
import Image from 'next/image';
import { GiSmartphone } from 'react-icons/gi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { TextAccent } from './atoms/TextAccent';
import { PropsWithChildren, useState } from 'react';
import { FeedbackContent } from '../lib/content/types/IndexPageContent';

export const Feedback = (props: PropsWithChildren<{content: FeedbackContent}>) => {
    const [currentIndex, updateIndex] = useState(0);

    function leftClick() {
        updateIndex(currentIndex > 0 ? currentIndex - 1 : currentIndex);
    }

    function rightClick() {
        updateIndex(currentIndex < (props.content.messages.length - 1) ? currentIndex + 1 : currentIndex);
    }

    return (
        <section className="flex flex-col items-center justify-center w-full text-teal-900">
            <div className="w-full lg:w-container m-auto flex flex-col items-center mt-20 relative h-[262px] mb-20">
                <h2 className="inline mb-1 text-2xl font-medium">{props.content.head}</h2>
                <TextAccent black/>

                <BsChatSquareQuote className="text-5xl text-orange-600 mb-10"/>

                <BsArrowLeft className="absolute bottom-0 left-2 lg:left-14 cursor-pointer z-10 hover:text-xl hover:rounded-full hover:bg-grayBg" onClick={leftClick}/>
                <BsArrowRight className="absolute bottom-0 right-2 lg:right-14 cursor-pointer z-10 hover:text-xl hover:rounded-full hover:bg-grayBg" onClick={rightClick}/>

                <div className="w-full lg:w-container relative">
                    {
                        props.content.messages.map((message, index) => (
                            <figure key={message.name + message.source} className={`pl-8 pr-8 bg-blue flex flex-col items-center ${currentIndex === index ? 'visible' : 'invisible'} z-0 absolute inset-0`}>
                                <blockquote className={`rounded-t-2xl bg-grayBg text-sm italic lg:w-containerTwoOfThree text-center transition-colors duration-500 ease-out ${currentIndex === index ? 'bg-white' : 'bg-grayBg'}`}>
                                    {message.text}
                                </blockquote>

                                <figcaption className="text-center mt-2 m-auto">
                                    — <b>{message.name}</b>, <cite>{message.source}</cite>
                                </figcaption>
                            </figure>
                        ))
                    }
                </div>
            </div>

            <Image
                className="mt-10"
                layout="fixed"
                src="/clients.png"
                width="187"
                height="121"
            />

            <div className="flex flex-wrap bg-blue text-white lg:w-container mt-16 items-center justify-between relative">
                    <span className="flex items-center lg:justify-between lg:border-r border-gray-400 lg:space-x-0 p-7 lg:pr-12 space-x-5 lg:w-[50%] border-b w-full">
                        <GiSmartphone className="text-2xl lg:text-3xl"/>
                        <span className="text-gray-200 text-xs lg:text-sm w-32 lg:w-44">Позвоните сейчас для бесплатной консультации</span>
                        <span className="text-white text-sm lg:text-2xl">: 8495188991212</span>
                    </span>

                <span className="flex items-center lg:justify-between p-7 lg:pl-12 space-x-5 lg:space-x-0 lg:w-[50%] w-full">
                        <HiOutlineMailOpen className="text-2xl lg:text-3xl"/>
                        <span className="text-gray-200 text-xs lg:text-sm w-32 lg:w-44">Напишите нам для бесплатной консультации</span>
                        <span className="text-white text-sm lg:text-2xl">: ino@inbico.ru</span>
                    </span>
                <span
                    className="hidden lg:flex items-center justify-center rounded-full bg-blueAccent text-sm w-12 h-12 absolute inset-x-[487px]">или</span>
            </div>
        </section>
    )
}
