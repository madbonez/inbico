import { NextPage } from 'next';
import { BasePageTemplate } from '../components/templates/BasePageTemplate';
import path from 'path';
import { ABOUT_PAGE_LOCATION } from '../lib/consts/content';
import { parseYaml } from '../lib/content/utils/yaml';
import { AboutPageContent } from '../lib/content/types/AboutPageContent';
import { ContentView } from '../components/molecules/ContentView';
import { getHtmlFromMd } from '../lib/content/utils/markdown';

const About: NextPage<{ content: AboutPageContent }> = (props) => {

    return (
        <BasePageTemplate>
            <div className="w-full flex flex-col justify-center items-center">
                <div className="lg:w-container justify-center items-center mb-3 mt-0 lg:mt-16 p-6">
                    <ContentView html={props.content.block1}/>

                    <h2 className="text-xl font-bold mb-4 mt-4 text-teal-900">Реквизиты нашей компании:</h2>
                    <table className="bg-grayBg hover:bg-orange-600 border border-slate-500 bg-grayBg cursor-text">
                        <tbody className="text-teal-900 text-xs md:text-sm font-medium">
                        {
                            props.content.requisites.map(requisite => (
                                <tr key={requisite.h}>
                                    <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">
                                        {requisite.h}
                                    </td>
                                    <td className="bg-grayBg hover:bg-white transition-colors duration-300 p-2 border border-slate-200 hover:border-slate-500 border-nepal">
                                        {requisite.h}
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="lg:w-container p-7">
                    <ContentView html={props.content.map.header}/>
                </div>
                <iframe
                    className="pointer-events-auto"
                    src={props.content.map.link}
                    width="100%" height="400" frameBorder="0"></iframe>
            </div>

            <div className="w-full flex flex-col justify-center items-center bg-white pt-7">
                <div className="lg:w-container p-7 text-teal-900">
                    <ContentView html={props.content.block2}/>
                </div>
            </div>
        </BasePageTemplate>
    )
}

export async function getStaticProps() {
    const aboutContentPath = path.resolve(process.cwd(), ABOUT_PAGE_LOCATION);
    const content = parseYaml<AboutPageContent>(aboutContentPath)

    content.block1 = getHtmlFromMd(content.block1);
    content.block2 = getHtmlFromMd(content.block2);
    content.map.header = getHtmlFromMd(content.map.header);

    return {
        props: {
            content
        },
    }
}

export default About;
