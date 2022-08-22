import type { NextPage } from 'next'
import Head from 'next/head'
import { Partners } from '../components/Partners';
import { Banks } from '../components/Banks';
import { Feedback } from '../components/Feedback';
import { Showcase } from '../components/Showcase';
import { ArticlesPreview } from '../components/ArticlesPreview';
import { BasePageTemplate } from '../components/BasePageTemplate';
import path from 'path';
import { INDEX_PAGE_LOCATION } from '../lib/consts/content';
import { parseYaml } from '../lib/content/utils/yaml';
import { IndexPageContent } from '../lib/content/types/IndexPageContent';
import postsContent from '../lib/content/postsContent';
import { Post } from '../lib/content/types/Post';
import { getConfig } from '../lib/content/getConfig';
import { SiteConfig } from '../lib/content/types/SiteConfig';

const Home: NextPage<{ content: IndexPageContent } & { postsContent: { servicesPosts: Post[], referencePosts: Post[] } } & { config: SiteConfig }> = (props) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <BasePageTemplate config={props.config}>
                <Showcase content={props.content.showcase}/>
                <section className="h-full flex flex-col items-center justify-center">
                    <Feedback content={props.content.feedback}/>
                    <ArticlesPreview header="УСЛУГИ" bgGray content={props.postsContent.servicesPosts}/>
                    <Banks content={props.content.banks}/>
                    <ArticlesPreview header="ИНФОРМАЦИЯ" bgGray
                                     content={props.postsContent.referencePosts}/>
                    <Partners content={props.content.partners}/>
                </section>
            </BasePageTemplate>
        </>
    )
}

export async function getStaticProps() {
    const indexContentPath = path.resolve(process.cwd(), INDEX_PAGE_LOCATION);
    const pageContent = parseYaml<IndexPageContent>(indexContentPath)

    return {
        props: {
            postsContent: postsContent,
            content: pageContent,
            config: getConfig()
        },
    }
}

export default Home
