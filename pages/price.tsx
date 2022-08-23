import { BasePageTemplate } from '../components/BasePageTemplate';
import { Fragment, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { NextPage } from 'next';
import { PricesPageContent } from '../lib/content/types/PricesPageContent';
import { ContentView } from '../components/molecules/ContentView';
import path from 'path';
import { PRICES_PAGE_LOCATION } from '../lib/consts/content';
import { parseYaml } from '../lib/content/utils/yaml';
import { getHtmlFromMd } from '../lib/content/utils/markdown';
import { getConfig } from '../lib/content/getConfig';
import { SiteConfig } from '../lib/content/types/SiteConfig';

export const Price: NextPage<{ content: PricesPageContent } & { config: SiteConfig }> = (props) => {
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
        <BasePageTemplate config={props.config}>
            <div className="w-full flex justify-center items-center">
                <div
                    className="lg:w-container text-teal-900 p-7 overflow-hidden items-center justify-center flex flex-col">
                    <ContentView html={props.content.block1}/>
                    {
                        props.content.priceList.map(group => (
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
                                <tbody className={`${isGroupOpened(group.groupName) ? 'table' : 'hidden'}`}>
                                {
                                    group.items.map(item => (
                                        <Fragment key={item.object + item.duration + item.description + item.price2}>
                                            <tr>
                                                <td className="bg-grayBg border border-teal-900 p-2 text-sm">Объект</td>
                                                <td className="font-medium border border-teal-900 p-2 text-sm">{item.object}</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-grayBg border border-teal-900 p-2 text-sm">Примечание</td>
                                                <td className="font-medium border border-teal-900 p-2 text-sm">{item.description}</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-grayBg border border-teal-900 p-2 text-sm">
                                                    Сроки исполнения (дней)
                                                </td>
                                                <td className="font-medium border border-teal-900 p-2 text-sm">{item.duration}</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-grayBg border border-teal-900 p-2 text-sm">
                                                    Стоимость услуг (заключение), руб.
                                                </td>
                                                <td className="font-medium border border-teal-900 p-2 text-sm">{item.price1}</td>
                                            </tr>
                                            <tr>
                                                <td className="bg-grayBg border border-teal-900 p-2 text-sm">
                                                    Стоимость услуг (отчет), руб.
                                                </td>
                                                <td className="font-medium border border-teal-900 p-2 text-sm">{item.price2}</td>
                                            </tr>
                                            <tr className="w-full bg-nepal h-2">
                                                <td colSpan={2}></td>
                                            </tr>
                                        </Fragment>
                                    ))
                                }
                                </tbody>
                            </table>
                        ))
                    }

                    <table
                        className="hidden lg:table table-auto text-xs md:text-sm lg:text-base table-auto border border-slate-500 mb-7 cursor-text">
                        <thead className="bg-nepal text-white">
                        <tr>
                            <td className="border border-slate-500 border-white p-2 border-l-nepal">
                                Объект оценки
                            </td>
                            <td className="border border-slate-500 border-white p-2">
                                Примечание
                            </td>
                            <td className="border border-slate-500 border-white p-2">
                                Сроки исполнения, дней
                            </td>
                            <td className="border border-slate-500 border-white p-2">
                                Стоимость услуг (заключение), руб.
                            </td>
                            <td className="border border-slate-500 border-white p-2 border-r-nepal">
                                Стоимость услуг (отчет), руб.
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            props.content.priceList.map(group => (
                                <Fragment key={group.groupName}>
                                    <tr>
                                        <td colSpan={5}
                                            className="border border-slate-500 border-nepal p-2 font-bold bg-orange-100">
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

export async function getStaticProps() {
    const pricesContentPath = path.resolve(process.cwd(), PRICES_PAGE_LOCATION);
    const content = parseYaml<PricesPageContent>(pricesContentPath)

    content.block1 = getHtmlFromMd(content.block1);

    return {
        props: {
            content,
            config: getConfig()
        },
    }
}

export default Price
