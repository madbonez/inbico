import { FaVk, FaYoutube } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { GiSmartphone } from 'react-icons/gi';
import { useContext } from 'react';
import { UiContext } from '../lib/context/UiContext';

export const Header = () => {
    const [uiState] = useContext(UiContext);

    return (
        <header
            className={`bg-nepal w-full ${uiState.minimalNavbar ? 'h-[30px]' : 'h-[51px]'} sticky top-0 z-10 justify-center items-center flex transition-height duration-500 ease-out`}>
            <div
                className={`flex lg:w-container m-auto bg-nepal w-full text-gray-100/50 text-base md:justify-between justify-center`}>
                <div className="hidden md:flex w-12 justify-between items-center pl-3">
                    <FaVk className="hover:text-white cursor-pointer"/>
                    <FaYoutube className="hover:text-white cursor-pointer"/>
                </div>

                <div className="space-x-2 grid auto-cols-auto gap-1 mr-5 pl-1">
                    <HiOutlineMailOpen className="text-xl row-start-2 m-auto"/>
                    <div
                        className="text-xs hover:text-white cursor-pointer row-start-2 m-auto">INFO@CONSULTANCY.COM
                    </div>
                    <div className="w-0.5 bg-white/5 row-start-1 row-span-3"></div>
                    <GiSmartphone className="text-lg row-start-2 m-auto"/>
                    <div
                        className="text-xs hover:text-white cursor-pointer row-start-2 flex justify-center m-auto">
                        :8495-444-6858
                    </div>
                </div>
            </div>
        </header>
    )
}
