import { FaVk, FaYoutube } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { GiSmartphone } from 'react-icons/gi';
import { useContext, useState } from 'react';
import { UiContext } from '../lib/context/UiContext';
import { SiteConfigContext } from '../lib/context/SiteConfigContext';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

export const Header = () => {
    const [uiState] = useContext(UiContext);
    const [config] = useContext(SiteConfigContext);

    const [showAllPhones, updateShowAllPhones] = useState(false);

    function phoneMouseClick() {
        updateShowAllPhones(!showAllPhones);
    }

    return (
        <header
            className={`bg-nepal w-full ${uiState.minimalNavbar ? 'h-[30px]' : 'h-[51px]'} sticky top-0 z-10 justify-center items-center flex transition-height duration-500 ease-out z-20`}>
            <div
                className={`flex lg:w-container m-auto bg-nepal w-full text-gray-100/50 text-base md:justify-between justify-center`}>
                <div className="hidden md:flex w-12 justify-between items-center pl-3">
                    <a href={config.vkUrl}><FaVk className="hover:text-white cursor-pointer"/></a>
                    <a href={config.ytUrl}><FaYoutube className="hover:text-white cursor-pointer"/></a>
                </div>

                <div className="space-x-2 grid auto-cols-auto gap-1 mr-5 pl-1">
                    <HiOutlineMailOpen className="text-xl row-start-2 m-auto"/>
                    <div
                        className="text-xs hover:text-white cursor-pointer row-start-2 m-auto">{config.email}
                    </div>
                    <div className="w-0.5 bg-white/5 row-start-1 row-span-3"></div>
                    <GiSmartphone className="text-lg row-start-2 m-auto"/>
                    <div
                        onClick={phoneMouseClick}
                        className="text-xs hover:text-white cursor-pointer row-start-2 flex justify-center m-auto relative pl-2 pr-2">
                        {config.phones[0]}
                        <span className={`ml-2`}>
                            {
                                showAllPhones ? <BsChevronUp/> : <BsChevronDown/>
                            }
                        </span>
                        {
                            showAllPhones && <div
                                className={`pt-2 pb-2 absolute space-y-4 bg-nepal absolute ${uiState.minimalNavbar ? 'top-[22px]' : 'top-[32px]'} transition-all duration-500 ease-out left-0 right-0`}>
                                {
                                    config.phones.map(phone => (
                                        <span key={phone} className={`text-gray-100/50  hover:text-white block pl-2`}>
                                        {phone}
                                    </span>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
