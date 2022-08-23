import { TextAccent } from './atoms/TextAccent';
import { ArticleCard } from './ArticleCard';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Post } from '../lib/content/types/Post';
import { useRef, useState } from 'react';

const mobileCardWidth = 320;
const lgCardWidth = 518;
const lgBreakpoint = 1024;

export const ArticlesPreview = (props: { header: string, bgGray?: boolean, content: Post[] }) => {
    const [currentIndex, updateIndex] = useState(0);
    const cardsContainer = useRef<HTMLDivElement>(null);

    function updateContainerPosition(nextIndex: number) {
        let cardWidth = document.body.offsetWidth >= 1024 ? lgCardWidth : mobileCardWidth;

        if (cardsContainer.current) {
            cardsContainer.current.style.transform = `translateX(${nextIndex * cardWidth}px)`
        }
    }

    function leftClick() {
        const nextIndex = currentIndex  > -(props.content.length - 2) ? currentIndex - 1 : currentIndex;
        updateIndex(nextIndex);
        updateContainerPosition(nextIndex);
    }

    function rightClick() {
        const nextIndex = currentIndex < 0 ? currentIndex + 1 : currentIndex;
        updateIndex(nextIndex);
        updateContainerPosition(nextIndex);
    }

    return (
        <section className={`flex ${props.bgGray ? 'bg-grayBg' : ''} w-full justify-center pt-12 pb-12 p-12`}>
            <div className="lg:w-container relative overflow-hidden">
                <h2 className="text-2xl font-medium text-teal-900 font-bold">{props.header}</h2>
                <TextAccent black/>

                <div className="cursor-pointer inline-block absolute top-0 right-0">
                    <div onClick={leftClick}
                        className="bg-orange-600 inline-block p-3 hover:bg-nepal transition-colors duration-150">
                        <BsChevronLeft/>
                    </div>
                    <div
                        onClick={rightClick}
                        className="bg-blue inline-block p-3 hover:bg-nepal transition-colors duration-500">
                        <BsChevronRight/>
                    </div>
                </div>
                <div ref={cardsContainer} className={`flex flex-wrap flex-nowrap mt-8 justify-start items-center transition-transform duration-500`}>
                    {
                        props.content.map((post, index) => (
                            <ArticleCard
                                key={post.title + post.publishMonth + post.publishDate}
                                header={post.title}
                                imgUrl={post.image}
                                publishDay={post.publishDate}
                                publishMonth={post.publishMonth}
                                text={post.preview}
                                slug={post.slug}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
