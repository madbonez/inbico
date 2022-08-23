import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ArticlePreviewType } from '../lib/content/types/ArticlePreviewType';

export const ArticleCardFixed = (props: {
    header: string,
    text: string,
    imgUrl: string,
    slug: string,
    publishDay?: string,
    publishMonth?: string,
    type: ArticlePreviewType,
}) => {
    const router = useRouter()

    function readArticleClick() {
        if (props.type === ArticlePreviewType.PART) {
            router.push(props.slug);
        } else {
            router.push(`${router.asPath}/${props.slug}`);
        }
    }

    return (
        <div className="flex flex-col-reverse items-center pt-5 w-[300px]">
            <div className="bg-white pt-3 text-teal-900 w-full h-[190px] pl-3 pr-3">
                <h1 className="text-xl font-medium mb-3 cursor-pointer" onClick={readArticleClick}>
                    {props.header}
                </h1>
                <p className="text-gray-600 mb-3 text-sm h-[77px] w-full overflow-hidden">
                    {props.text}
                </p>
                <div className="relative cursor-pointer m-auto flex items-center">
                    <span className="font-medium">Читать</span>
                    <div className="ml-3">
                        <BsArrowRight size="18" onClick={readArticleClick}/>
                    </div>
                </div>
            </div>
            <div className="inline-block relative w-full">
                <Image
                    className="brightness-105"
                    layout="responsive"
                    src={props.imgUrl}
                    width="263"
                    height="278"
                />

                {
                    props.publishDay && props.publishMonth && <div
                        className="bg-orange-600 w-16 h-16 flex-col flex text-white justify-center items-center text-sm font-medium top-0 left-0 absolute">
                        <span>{props.publishDay}</span>
                        <span>{props.publishMonth}</span>
                    </div>
                }
            </div>
        </div>
    )
}
