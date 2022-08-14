import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

export const ArticleCard = (props: {
    header: string,
    text: string,
    imgUrl: string,
    publishDay: string,
    publishMonth: string
}) => {
    return (
        <div className="flex lg:flex-row flex-col-reverse items-center pt-5 pl-5">
            <div className="bg-white p-6 text-teal-900 w-full lg:h-[190px]">
                <h1 className="text-xl font-medium mb-3">{props.header}</h1>
                <p className="text-gray-600 mb-3 text-sm h-[77px] w-[250px] overflow-hidden ">
                    {props.text}
                </p>
                <div className="relative cursor-pointer m-auto flex items-center">
                    <span className="font-medium">Читать</span>
                    <div className="ml-3">
                        <BsArrowRight size="18"/>
                    </div>
                </div>
            </div>
            <div className="hidden md:inline-block relative w-full lg:min-w-[200px]">
                <Image
                    className="brightness-105"
                    layout="responsive"
                    src={props.imgUrl}
                    width="263"
                    height="278"
                />

                <div
                    className="bg-orange-600 w-16 h-16 flex-col flex text-white justify-center items-center text-sm font-medium top-0 left-0 absolute">
                    <span>{props.publishDay}</span>
                    <span>{props.publishMonth}</span>
                </div>
            </div>
        </div>
    )
}
