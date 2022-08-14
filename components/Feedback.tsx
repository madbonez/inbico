import { BsArrowLeft, BsArrowRight, BsChatSquareQuote } from 'react-icons/bs';
import Image from 'next/image';
import { GiSmartphone } from 'react-icons/gi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { TextAccent } from './atoms/TextAccent';

export const Feedback = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full text-teal-900">
            <div className="lg:w-container m-auto flex flex-col items-center mt-20 relative mb-20">
                <h2 className="inline mb-1 text-2xl font-medium">ОТЗЫВЫ КЛИЕНТОВ</h2>
                <TextAccent black/>

                <BsChatSquareQuote className="text-5xl text-orange-600 mb-10"/>

                <BsArrowLeft className="absolute bottom-0 left-10 cursor-pointer"/>
                <BsArrowRight className="absolute bottom-0 right-10 cursor-pointer"/>

                <figure>
                    <blockquote className="text-sm italic lg:w-containerTwoOfThree text-center">
                        Большое спасибо ребятам за профессиональную, быструю работу. Внимательное почти личное
                        отношение к клиентам, легкий доступ к консультации специалистов. Отдельное спасибо Даниилу,
                        за его работу и внимательность. За то что всегда на связи и не теряет чувство юмора на такой
                        сложной работе)
                    </blockquote>

                    <figcaption className="text-center mt-2">— <b>Юлия</b>, <cite>Отзыв на сайте</cite></figcaption>
                </figure>
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
