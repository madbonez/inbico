import Image from 'next/image';
import { TextAccent } from './atoms/TextAccent';

export const Showcase = () => {
    return (
        <section
            className="grid grid-rows-[0_auto_auto_0] lg:grid-rows-[auto_auto] lg:grid-cols-[auto_minmax(0,_390px)_minmax(0,_780px)_auto] text-teal-900">
            <div className="bg-blue grid"></div>
            <div className="bg-blue text-white p-10 pt-16 pb-16">
                <h2 className="mb-1 text-2xl font-bold">О КОМПАНИИ</h2>
                <TextAccent/>
                <span className="text-sm">
                        Компания <b>ООО "Инновации Бизнес Консалтинг"</b> осуществляет свою деятельность с 2009 года.
                        За время работы на рынке консалтинговых услуг нами наработан богатый опыт по самым сложным вопросам,
                        нашими клиентами уже стали значительное количество фирм, организаций и частных лиц.
                    </span>
                <div
                    className="mt-16 border-grayBg rounded border w-52 p-2 hover:bg-nepal cursor-pointer text-center">
                    Больше информации
                </div>
            </div>
            <div className="bg-grayBg p-10 pt-16 pb-16">
                <h2 className="mb-1 text-2xl font-bold">УСЛУГИ</h2>
                <TextAccent black/>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="grid grid-cols-[38px_auto]">
                        <Image
                            layout="fixed"
                            src="/icon1.png"
                            width="38"
                            height="40"
                        />
                        <div className="ml-7">
                            <h3 className="text-lg font-medium mb-2">Оценка всех видов имущества и собственности</h3>
                            <span className="text-sm text-gray-600">
                                    Производить оценку необходимо при совершении различных сделок и операций с
                                    недвижимостью — покупке, продаже или же при оформлении ипотечного кредита в
                                    финансовой организации.
                                </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-[38px_auto]">
                        <Image
                            layout="fixed"
                            src="/icon2.png"
                            width="38"
                            height="40"
                        />
                        <div className="ml-7">
                            <h3 className="text-lg font-medium mb-2">Бизнес – планирование</h3>
                            <span className="text-sm text-gray-600">
                                    Бизнес-план — это чёткая программа действий предприятия, рассчитанная на определённый срок.
                                    Такой документ нужен не только чтобы впечатлить инвесторов, но и придумать стратегии развития,
                                    предусмотреть рыночные риски и лучше понять собственный бизнес.
                                </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-[38px_auto]">
                        <Image
                            layout="fixed"
                            src="/icon3.png"
                            width="38"
                            height="40"
                        />
                        <div className="ml-7">
                            <h3 className="text-lg font-medium mb-2">Проведение маркетинговых исследований</h3>
                            <span className="text-sm text-gray-600">
                                    Маркетинговые исследования — ключевой фактор получения преимущества над конкурентами.
                                    Проведение маркетинговых исследований позволяет понять ситуацию на рынке и ответить
                                    на множество вопросов, связанных с бизнесом и инвестициями.
                                </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-[38px_auto]">
                        <Image
                            layout="fixed"
                            src="/icon4.png"
                            width="38"
                            height="40"
                        />
                        <div className="ml-7">
                            <h3 className="text-lg font-medium mb-2">Бухгалтерское сопровождение и аудит</h3>
                            <span className="text-sm text-gray-600">
                                    Бухгалтерское обслуживание избавит Вас от лишних
                                    забот и освободит время для более важных дел. Вы сможете сконцентрироваться на
                                    ключевых задачах бизнеса, улучшить бизнес-процессы и повысить свой доход!
                                </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-grayBg"></div>
        </section>
    )
}
