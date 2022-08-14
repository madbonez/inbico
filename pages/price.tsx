import { BasePageTemplate } from '../components/templates/BasePageTemplate';
import { Fragment, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const pricesJson = [
    {
        groupName: 'Оценка недвижимости',
        items: [
            {
                object: 'Оценка квартиры',
                description: 'В типовых домах',
                duration: '1-3',
                price1: '3500 - 4000',
                price2: '4500 - 6000'
            },
            {
                object: 'Оценка квартиры',
                description: 'В нетиповых домах',
                duration: '1-3',
                price1: '4000 - 5000',
                price2: '6000 – 10 000'
            },
            {
                object: 'Оценка комнат',
                description: '.',
                duration: '1-3',
                price1: '3500 - 4500',
                price2: '5000 - 6000'
            },
            {
                object: 'Оценка дачи',
                description: '.',
                duration: '-5',
                price1: '7000 - 9000',
                price2: '15000 - 25000'
            },
            {
                object: 'Оценка коттеджей',
                description: '.',
                duration: '-5',
                price1: '7000 - 9 000',
                price2: '15000 - 25000'
            },
            {
                object: 'Коммерческая',
                description: 'до 500 кв.м.',
                duration: '2-5',
                price1: 'от 5 000',
                price2: 'от 10 000'
            },
            {
                object: '.',
                description: '500 - 1 000 кв.м.',
                duration: '2-5',
                price1: 'от 7000',
                price2: 'от 15 000'
            },
            {
                object: '.',
                description: '1 000 - 5 000 кв.м.',
                duration: '2-5',
                price1: 'от 15 000',
                price2: 'от 25 000'
            },
            {
                object: '.',
                description: '5 000 - 10 000 кв.м.',
                duration: '2-7',
                price1: 'от 25 000',
                price2: 'от 50 000'
            },
            {
                object: '.',
                description: 'свыше 10 000 кв.м.',
                duration: '3-10',
                price1: 'от 30 000',
                price2: 'от 60 000'
            },
            {
                object: 'Офисная недвижимость',
                description: 'до 500 кв.м.',
                duration: '2-4',
                price1: 'от 7 000',
                price2: 'от 10 000'
            },
            {
                object: '.',
                description: '500 - 1 000 кв.м.',
                duration: '2-4',
                price1: 'от 9 000',
                price2: 'от 15 000'
            },
            {
                object: '.',
                description: '1 000 - 5 000 кв.м.',
                duration: '2-5',
                price1: 'от 11 000',
                price2: 'от 25 000'
            },
            {
                object: '.',
                description: '5 000 - 10 000 кв.м.',
                duration: '2-7',
                price1: 'от 17 000',
                price2: 'от 50 000'
            },
            {
                object: '.',
                description: 'свыше 10 000 кв.м.',
                duration: '3-10',
                price1: 'от 25 000',
                price2: 'от 60 000'
            },
            {
                object: 'Земельные участки',
                description: 'до 500 кв.м.',
                duration: '1-3',
                price1: 'от 3 000',
                price2: 'от 5 000'
            },
            {
                object: '.',
                description: '500 - 1 000 кв.м.',
                duration: '3-5',
                price1: 'от 7 000',
                price2: 'от 6 000'
            },
            {
                object: '.',
                description: '1 000 - 5 000 кв.м.',
                duration: '5-7',
                price1: 'от 9 000',
                price2: 'от 15 000'
            },
            {
                object: '.',
                description: '5 000 - 10 000 кв.м.',
                duration: '7-10',
                price1: 'от 10 000',
                price2: 'от 20 000'
            },
            {
                object: '.',
                description: 'свыше 10 000 кв.м.',
                duration: '10',
                price1: 'от 15 000',
                price2: 'от 30 000'
            },
            {
                object: 'Оценка зданий',
                description: 'до 500 кв.м.',
                duration: '2-4',
                price1: 'от 3 000',
                price2: 'от 15 000'
            },
            {
                object: '.',
                description: '500 - 1 000 кв.м.',
                duration: '2-4',
                price1: 'от 5 000',
                price2: 'от 25 000'
            },
            {
                object: '.',
                description: '1 000 - 5 000 кв.м.',
                duration: '2-5',
                price1: 'от 7 000',
                price2: 'от 35 000'
            },
            {
                object: '.',
                description: '5 000 - 10 000 кв.м.',
                duration: '2-7',
                price1: 'от 10 000',
                price2: 'от 50 000'
            },
            {
                object: '.',
                description: 'свыше 10 000 кв.м.',
                duration: '3-10',
                price1: 'от 15 000',
                price2: 'от 65 000'
            },
            {
                object: 'Незавершенное строительство',
                description: 'до 500 кв.м.',
                duration: '3-7',
                price1: 'от 3 000',
                price2: 'от 10 000'
            },
            {
                object: '.',
                description: '500 - 2 000 кв.м',
                duration: '3-7',
                price1: 'от 7 000',
                price2: 'от 20 000'
            },
            {
                object: '.',
                description: '2 000 - 5 000 кв.м',
                duration: '5-10',
                price1: 'от 10 000',
                price2: 'от 50 000'
            },
            {
                object: '.',
                description: '5 000 - 10 000 кв.м.',
                duration: '10-12',
                price1: 'от 15 000',
                price2: 'от 70 000'
            },
            {
                object: '.',
                description: 'свыше 10 000 кв.м.',
                duration: '10-12',
                price1: 'от 17 000',
                price2: 'от 75 000'
            }
        ]
    },
    {
        groupName: 'Оценка бизнеса',
        items: [
            {
                object: 'Оценка предприятия',
                description: '.',
                duration: '2-15',
                price1: 'от 5 000',
                price2: 'от 25 000'
            },
            {
                object: 'Оценка акций',
                description: 'котируемые на ОРЦБ',
                duration: '2-5',
                price1: 'от 3 000',
                price2: 'от 8 000'
            },
            {
                object: '.',
                description: 'не котируемые на ОРЦБ',
                duration: '4-10',
                price1: 'от 5 000',
                price2: 'от 15 000'
            },
            {
                object: 'Оценка компании',
                description: '.',
                duration: '2-15',
                price1: 'от 10 000',
                price2: 'от 25 000'
            },
            {
                object: 'Оценка долей',
                description: '.',
                duration: '2-7',
                price1: 'от 3 000',
                price2: 'от 7 000'
            },
            {
                object: 'Оценка векселей',
                description: 'котируемые на ОРЦБ',
                duration: '2-5',
                price1: 'от 2 500',
                price2: 'от 7 000'
            },
            {
                object: '.',
                description: 'не котируемые на ОРЦБ',
                duration: '5-10',
                price1: 'от 5 000',
                price2: 'от 14 000'
            },
            {
                object: 'Оценка облигаций',
                description: 'котируемые на ОРЦБ',
                duration: '2-5',
                price1: 'от 6 000',
                price2: 'от 8 000'
            },
            {
                object: '.',
                description: 'не котируемые на ОРЦБ',
                duration: '5-10',
                price1: 'от 9 000',
                price2: 'от 15 000'
            },
            {
                object: 'Дебиторской задолженности',
                description: '.',
                duration: '5-10',
                price1: 'от 3 000',
                price2: 'от 15 000'
            },
            {
                object: 'Банкротство',
                description: '.',
                duration: '5-12',
                price1: 'от 3 000',
                price2: 'от 7 000'
            }
        ]
    },
    {
        groupName: 'Оценка транспорта и оборудования',
        items: [
            {
                object: 'Оценка автомобилей',
                description: '',
                duration: '1',
                price1: '1500 - 2 000',
                price2: '3 000 - 5000'
            },
            {
                object: 'Оценка оборудования',
                description: '.',
                duration: '2-5',
                price1: 'от 800',
                price2: 'от 1 200'
            },
            {
                object: 'Оценка инвентаря',
                description: '.',
                duration: '2-5',
                price1: 'от 800',
                price2: 'от 1 200'
            },
            {
                object: 'Водный транспорт',
                description: '.',
                duration: '5-7',
                price1: 'от 10 000',
                price2: 'от 55 000'
            },
            {
                object: 'Воздушный транспорт',
                description: '.',
                duration: '5-7',
                price1: 'от 15 000',
                price2: 'от 75 000'
            }
        ]
    },
    {
        groupName: 'Оценка нематериальных активов',
        items: [
            {
                object: 'Оценка лицензий',
                description: '.',
                duration: '5-12',
                price1: 'от 7 500',
                price2: 'от 15 000'
            },
            {
                object: 'Товарные знаки',
                description: '.',
                duration: '5-12',
                price1: 'от 7 500',
                price2: 'от 15 000'
            },
            {
                object: 'Оценка патентов',
                description: '.',
                duration: '5-12',
                price1: 'от 5 000',
                price2: 'от 10 000'
            },
            {
                object: 'Оценка ноу хау',
                description: '.',
                duration: '7-30',
                price1: 'от 10 000',
                price2: 'от 20 000'
            },
            {
                object: 'Оценка интелектуальной собственности',
                description: '.',
                duration: '5-12',
                price1: 'от 5 000',
                price2: 'от 10 000'
            },
            {
                object: 'Авторские права',
                description: '.',
                duration: '5-12',
                price1: 'от 5 000',
                price2: 'от 15 000'
            }
        ]
    },
    {
        groupName: 'Определение ущерба',
        items: [
            {
                object: 'Залив помещения',
                description: '.',
                duration: '1-3',
                price1: '-',
                price2: 'от 6 000'
            },
            {
                object: 'Ущерб от пожара',
                description: '.',
                duration: '1-5',
                price1: '-',
                price2: 'от 8 000'
            },
            {
                object: 'Упущенная выгода',
                description: '.',
                duration: '3-7',
                price1: 'от 5 000',
                price2: 'от 11 000'
            },
            {
                object: 'Экспертиза отчетов об оценке',
                description: 'Консультационная услуга',
                duration: '2-3',
                price1: '-',
                price2: 'от 10 000'
            }
        ]
    }
]

export const Price = () => {
    const [visible, setVisible] = useState(false);
    const [activeGroupName, setActiveGroupName] = useState('');

    function groupHeaderHandler(groupName: string) {
        setActiveGroupName(groupName);
        if (!activeGroupName || groupName === activeGroupName) {
            setVisible(!visible);
        }
    }

    function isGroupOpened(groupName: string): boolean {
        return (activeGroupName === groupName) && visible;
    }

    return (
        <BasePageTemplate>
            <div className="w-full flex justify-center items-center">
                <div className="lg:w-container text-teal-900 p-7 overflow-hidden items-center justify-center flex flex-col">
                    <h1 className="w-full text-2xl font-medium mb-3">Наши цены</h1>

                    <p className="mb-7">
                        Мы стараемся идти навстречу нашим клиентам в вопросах ценообразования, представленная ниже
                        информация о
                        расценках, являются ориентировочной, не учитывающей индивидуальные особенности каждого
                        отдельного
                        случая. Цена не догма - а повод для переговоров.
                    </p>
                    {
                        pricesJson.map(group => (
                            <table key={group.groupName} className="table-auto border border-teal-900 lg:hidden mb-7">
                                <thead>
                                <tr>
                                    <td colSpan={2} className="p-2 bg-nepal text-white relative w-[330px]">
                                        <span className="text-sm">{group.groupName}</span>
                                        <span
                                            onClick={() => groupHeaderHandler(group.groupName)}
                                            className={`absolute right-2 top-2 rounded-full font-mono p-1 bg-teal-600 ${isGroupOpened(group.groupName) ? 'rotate-180' : 'rotate-0'} transition duration-500`}
                                        ><BiChevronDown/></span>
                                    </td>
                                </tr>
                                </thead>
                                {visible}
                                <tbody className={`${isGroupOpened(group.groupName) ? 'table' : 'hidden'}`}>
                                {
                                    group.items.map(item => (
                                        <Fragment key={item.object + item.description + item.price2 + item.price1}>
                                            <tr>
                                                <td className="bg-grayBg border border-teal-900 p-2 text-sm">Объект</td>
                                                <td className="font-medium border border-teal-900 p-2 text-sm">{item.object}</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-grayBg border border-teal-900 p-2 text-sm">Примечание</td>
                                                <td className="font-medium border border-teal-900 p-2 text-sm">{item.description}</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-grayBg border border-teal-900 p-2 text-sm">Сроки исполнения
                                                    (дней)
                                                </td>
                                                <td className="font-medium border border-teal-900 p-2 text-sm">{item.duration}</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-grayBg border border-teal-900 p-2 text-sm">Стоимость услуг
                                                    (заключение),
                                                    руб.
                                                </td>
                                                <td className="font-medium border border-teal-900 p-2 text-sm">{item.price1}</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-grayBg border border-teal-900 p-2 text-sm">Стоимость услуг
                                                    (отчет), руб.
                                                </td>
                                                <td className="font-medium border border-teal-900 p-2 text-sm">{item.price2}</td>
                                            </tr>
                                            <tr className="w-full bg-nepal h-2">
                                                <td colSpan={2}></td>
                                            </tr>
                                        </Fragment>
                                    ))
                                }
                                <tr>
                                    <td className="bg-grayBg border border-teal-900 p-2 text-sm">Объект</td>
                                    <td className="font-medium border border-teal-900 p-2 text-sm">Квартира</td>
                                </tr>
                                <tr>
                                    <td className="bg-grayBg border border-teal-900 p-2 text-sm">Примечание</td>
                                    <td className="font-medium border border-teal-900 p-2 text-sm">В типовых домах</td>
                                </tr>
                                <tr>
                                    <td className="bg-grayBg border border-teal-900 p-2 text-sm">Сроки исполнения (дней)</td>
                                    <td className="font-medium border border-teal-900 p-2 text-sm">1-3</td>
                                </tr>
                                <tr>
                                    <td className="bg-grayBg border border-teal-900 p-2 text-sm">Стоимость услуг (заключение),
                                        руб.
                                    </td>
                                    <td className="font-medium border border-teal-900 p-2 text-sm">3500 - 4000</td>
                                </tr>
                                <tr>
                                    <td className="bg-grayBg border border-teal-900 p-2 text-sm">Стоимость услуг (отчет), руб.
                                    </td>
                                    <td className="font-medium border border-teal-900 p-2 text-sm">4500 - 6000</td>
                                </tr>
                                </tbody>
                            </table>
                        ))
                    }

                    <table
                        className="hidden lg:table table-auto text-xs md:text-sm lg:text-base table-auto border border-slate-500 mb-7 cursor-text">
                        <thead className="bg-nepal text-white">
                        <tr>
                            <td className="border border-slate-500 border-white p-2 border-l-nepal">
                                <p><strong><span>Объект оценки</span></strong><span> </span></p>
                            </td>
                            <td className="border border-slate-500 border-white p-2">
                                <p><strong><span>Примечание</span></strong><span> </span></p>
                            </td>
                            <td className="border border-slate-500 border-white p-2">
                                <p><strong><span>Сроки исполнения, дней</span></strong><span> </span></p>
                            </td>
                            <td className="border border-slate-500 border-white p-2">
                                <p><strong><span>Стоимость услуг (заключение), руб.</span></strong><span> </span>
                                </p>
                            </td>
                            <td className="border border-slate-500 border-white p-2 border-r-nepal">
                                <p><strong><span>Стоимость услуг (отчет), руб.</span></strong><span> </span></p>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            pricesJson.map(group => (
                                <Fragment key={group.groupName}>
                                    <tr>
                                        <td colSpan={5}
                                            className="border border-slate-500 border-nepal p-2 font-bold bg-grayBg">
                                            {group.groupName}
                                        </td>
                                    </tr>
                                    {
                                        group.items.map(item => (
                                            <Fragment key={item.object + item.description + item.price2 + item.price1}>
                                                <tr>
                                                    <td className="font-medium border border-teal-900 p-2 text-sm">{item.object}</td>
                                                    <td className="font-medium border border-teal-900 p-2 text-sm">{item.description}</td>
                                                    <td className="font-medium border border-teal-900 p-2 text-sm">{item.duration}</td>
                                                    <td className="font-medium border border-teal-900 p-2 text-sm">{item.price1}</td>
                                                    <td className="font-medium border border-teal-900 p-2 text-sm">{item.price2}</td>
                                                </tr>
                                            </Fragment>
                                        ))
                                    }
                                </Fragment>
                            ))
                        }
                        </tbody>
                    </table>

                </div>
            </div>
        </BasePageTemplate>
    )
}

export default Price
