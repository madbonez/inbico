import { BsChevronRight, BsMap } from 'react-icons/bs';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="w-full relative h-[1250px] lg:h-[1000px] flex">
            {/*background*/}
            <div className="h-[450px] absolute inset-x-0 absolute">
                <Image
                    src="/footer.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="bg-black absolute inset-0 opacity-60"></div>
            </div>
            <div className="bg-nepal h-[800px] lg:h-[550px] absolute inset-x-0 top-[450px]"></div>

            {/*content*/}
            <div className="lg:w-container absolute inset-0 m-auto text-white p-7">
                {/*block1*/}
                <div className="relative h-[300px]">
                    <div className="absolute top-1/4 flex w-full p-4 flex-wrap justify-center items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">ОЦЕНОЧНАЯ КОМПАНИЯ</h1>
                            <h2 className="text-md">Мы оказываем весь спектр оценочных и консалтинговых услуг</h2>
                        </div>

                        <div className="hidden lg:flex bg-orange-600 rounded p-5 inline-block w-fit items-center font-bold h-12 mt-7 cursor-pointer hover:bg-black transition-colors duration-300">
                            Заказать оценку сейчас <BsChevronRight/>
                        </div>
                    </div>
                </div>

                {/*block2*/}
                <div className="h-[300px] bg-[url('/footer-accent.png')] bg-cover bg-center flex flex-wrap justify-center items-center content-center">
                    <input type="text" placeholder="Телефон или емейл" className="text-gray-600 w-64 lg:w-96 p-2.5 outline-0 mt-3"/>
                    <button className="bg-orange-600 p-2.5 text-white cursor-pointer hover:bg-black transition-colors duration-500 font-bold active:shadow-xl mt-3">Связать со мной</button>
                </div>

                {/*block3*/}
                <div className="pt-6 lg:pt-10">
                    <div className="flex flex-wrap space-x-10 justify-start lg:justify-center items-center">
                        <div className="hidden lg:flex mt-10 items-center">
                            <Image
                                className="grayscale"
                                layout="fixed"
                                src="/inbico.png"
                                width="45"
                                height="45"
                            />

                            <span className="text-lg ml-5 text-gray-500 font-bold">ИНБИКО</span>
                        </div>
                        <div className="text-white w-[22rem] mt-10">
                            <h3 className="font-normal mb-7">БЫСТРЫЕ ССЫЛКИ</h3>
                            <div className="grid grid-cols-2 gap-x-5 text-gray-400 text-sm">
                                <a className="cursor-pointer hover:text-white">Главная</a>
                                <a className="cursor-pointer hover:text-white">Услуги</a>
                                <a className="cursor-pointer hover:text-white">О компании</a>
                                <a className="cursor-pointer hover:text-white">Цены</a>
                                <a className="cursor-pointer hover:text-white">Информация</a>
                                <a className="cursor-pointer hover:text-white">Русское Общество Оценщиков</a>
                                <a className="cursor-pointer hover:text-white">Федеральный закон об оценочной деятельности</a>
                                <a className="cursor-pointer hover:text-white">Экспертное оценивание</a>
                            </div>
                        </div>
                        <div className="text-white">
                            <h3 className="font-normal mb-7 mt-6 lg:mt-0">АДРЕСС</h3>
                            <div className="flex flex-wrap items-start text-gray-400 text-sm justify-between">
                                <span className="w-44">
                                    <span className="inline">Адрес: 115409, Москва, Каширское ш., дом 66, корп. 2, оф.33</span>
                                    <a className="inline hover:text-orange-600 cursor-pointer text-white mt-3"><BsMap/></a>
                                </span>
                                <span className="flex flex-col w-52">
                                    <div>
                                        <span className="text-white text-sm">Тел: </span><span>+7(963) 689-55-99</span>
                                    </div>
                                    <div>
                                        <span className="text-white text-sm">Тел: </span><span>+7(495) 796-25-50</span>
                                    </div>
                                    <div>
                                        <span className="text-white text-sm">Тел: </span><span>+7(917) 593-00-24</span>
                                    </div>

                                    <div>
                                        <span className="text-white text-sm">Email: </span><span>valvalval@inbico.ru</span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
