import { IoIosArrowForward } from 'react-icons/io';
import { useContext, useEffect, useRef } from 'react';
import { RefsContext } from '../lib/context/RefsContext';

export const Hero = () => {
    const rootRef = useRef<HTMLElement>(null);
    const [refsState, updateRefsState] = useContext(RefsContext);

    useEffect(() => {
        updateRefsState({
            heroRef: rootRef,
        });
    }, []);

    return (
        <section ref={rootRef}
            className="w-full 2xl:h-[350px] xl:h-[300px] h-[200px] bg-[url('/slider1.jpg')] bg-cover bg-center">
            <div className="xl:w-container m-auto pt-14 text-white font-extralight text-2xl pl-5">
                <div>ПЕРВАЯ</div>
                <div className="font-bold">ОЦЕНОЧНАЯ КОМПАНИЯ</div>

                <div
                    className="hover:bg-black w-[15rem] p-4 mt-3 text-sm bg-orange-600 flex justify-center items-center cursor-pointer">
                    Бесплатная консультация
                    <IoIosArrowForward className="ml-3"/>
                </div>
            </div>
        </section>
    )
}
