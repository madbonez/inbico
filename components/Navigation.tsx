import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { useContext, useEffect, useRef, useState } from 'react';
import { UiContext } from '../lib/context/UiContext';
import Link from 'next/link';
import { PageUrl } from '../lib/consts/pages';

export const Navigation = () => {
    const navRef = useRef<HTMLElement>(null);

    const [uiState] = useContext(UiContext);

    const [isMenuOpened, setMenuOpenedState] = useState(false);

    useEffect(() => {
        setHeight();
    }, [isMenuOpened, uiState])

    function openMobileMenu() {
        setMenuOpenedState(!isMenuOpened);
    }

    function setHeight() {
        if (navRef.current) {
            navRef.current.style.height = getHeight() + 'px';
        }
    }

    function getHeight(): number {
        if (isMenuOpened && uiState.minimalNavbar) {
            return 260;
        }

        if (!isMenuOpened && uiState.minimalNavbar) {
            return 60;
        }

        if (isMenuOpened && !uiState.minimalNavbar) {
            return 303;
        }

        return 103;
    }

    return (
        <>
            <nav ref={navRef}
                 className={`${uiState.minimalNavbar ? `top-[30px]` : `top-[51px]`} bg-white w-full sticky z-10 flex flex-col justify-center items-center`}>
                <div
                    className={`flex lg:w-container m-auto object-center items-center w-full pl-[15px] lg:pr-5 ${uiState.minimalNavbar ? `h-[60px]` : `h-[103px]`} transition-height duration-500 ease-out`}>
                    <div
                        className={`${uiState.minimalNavbar ? 'h-[35px] w-[35px]' : 'h-[45px] w-[45px] transition-height delay-500 duration-500 ease-in-out'}`}>
                        <Image
                            layout="responsive"
                            src="/inbico.png"
                            width="45"
                            height="45"
                        />
                    </div>
                    <span className="text-lg ml-5 text-gray-500 font-bold">ИНБИКО</span>

                    <div className="flex ml-auto items-center lg:space-x-2 text-gray-500 cursor-pointer h-full text-xs">
                        <Link href={PageUrl.INDEX}>
                            <span className="hidden lg:inline-block border-r-2 p-4 hover:text-orange-300">
                                ГЛАВНАЯ
                            </span>
                        </Link>
                        <Link href={PageUrl.SERVICES}>
                            <span className="hidden lg:inline-block border-r-2 p-4 hover:text-orange-300">
                                УСЛУГИ
                            </span>
                        </Link>
                        <Link href={PageUrl.PRICE}>
                            <span className="hidden lg:inline-block border-r-2 p-4 hover:text-orange-300">
                                ЦЕНЫ
                            </span>
                        </Link>
                        <Link href={PageUrl.REFERENCE}>
                            <span className="hidden lg:inline-block border-r-2 p-4 hover:text-orange-300">
                                ИНФОРМАЦИЯ
                            </span>
                        </Link>
                        <Link href={PageUrl.ABOUT}>
                            <span className="hidden lg:inline-block p-4 pl-4 pr-5 hover:text-orange-300">
                                О КОМПАНИИ
                            </span>
                        </Link>

                        <div
                            onClick={openMobileMenu}
                            className="flex lg:hidden p-3 bg-orange-600 text-white hover:bg-nepal items-center h-full w-12 justify-center">
                            <GiHamburgerMenu className="inline-block"/>
                        </div>

                        <div
                            className="h-full lg:h-fit p-3 bg-blue lg:bg-orange-600 text-white hover:bg-nepal flex items-center lg:flex w-12 justify-center">
                            <FiSearch className="inline-block"/>
                        </div>
                    </div>
                </div>
                {
                    isMenuOpened && (
                        <div
                            className={`bg-grayBg w-full h-[200px] divide-y divide-gray-300 flex flex-col text-teal-900 font-medium text-xs`}>
                            <Link href={PageUrl.INDEX}>
                                <a className="pl-5 p-2 hover:bg-gray-200 mt-auto">
                                    ГЛАВНАЯ
                                </a>
                            </Link>
                            <Link href={PageUrl.SERVICES}>
                                <a className="pl-5 p-2 hover:bg-gray-200">
                                    УСЛУГИ
                                </a>
                            </Link>
                            <Link href={PageUrl.PRICE}>
                                <a className="pl-5 p-2 hover:bg-gray-200">
                                    ЦЕНЫ
                                </a>
                            </Link>
                            <Link href={PageUrl.REFERENCE}>
                                <a className="pl-5 p-2 hover:bg-gray-200">
                                    ИНФОРМАЦИЯ
                                </a>
                            </Link>
                            <Link href={PageUrl.ABOUT}>
                                <a className="pl-5 p-2 hover:bg-gray-200 mb-auto">
                                    О КОМПАНИИ
                                </a>
                            </Link>
                        </div>
                    )
                }
            </nav>
        </>
    )
}
