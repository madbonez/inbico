import React, { PropsWithChildren } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';
import { PageUrl } from '../lib/consts/pages';
import { useRouter } from 'next/router';
import { BsChevronRight } from 'react-icons/bs';

export interface BreadcrumbsPath {
    slug: string,
    title: string,
}

export const Breadcrumbs = React.memo((props: PropsWithChildren<{paths: BreadcrumbsPath[]}>) => {
    const hoverAnimation = 'hover:text-orange-600 transition-colors duration-300';
    const router = useRouter();

    function homeClick() {
        router.push(PageUrl.INDEX);
    }


    return (
        <div className={`hidden md:flex space-x-0 md:space-x-2 items-center pl-2 pt-4 md:pt-8 pb-2 md:pb-4 text-teal-900 cursor-pointer text-xs md:text-base`}>
            <span onClick={homeClick} className={hoverAnimation}><AiOutlineHome/></span>
            <BsChevronRight/>
            <Link href={`/${props.paths[0].slug}`}>
                <span className={hoverAnimation}>{props.paths[0].title}</span>
            </Link>
            <BsChevronRight/>
            <Link href={`/${props.paths[1].slug}`}>
                <span className={hoverAnimation}>{props.paths[1].title}</span>
            </Link>
            {
                props.paths[2] && (
                    <>
                        <BsChevronRight/>
                        <Link href={`/${props.paths[1].slug}/${props.paths[2].slug}`}>
                            <span className={hoverAnimation}>{props.paths[2].title}</span>
                        </Link>
                    </>
                )
            }
        </div>
    )
})
