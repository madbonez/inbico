import type { NextPage } from 'next'
import Head from 'next/head'
import { Partners } from '../components/Partners';
import { Banks } from '../components/Banks';
import { Feedback } from '../components/Feedback';
import { Showcase } from '../components/Showcase';
import { ArticlesPreview } from '../components/ArticlesPreview';
import { BasePageTemplate } from '../components/templates/BasePageTemplate';
import * as fs from 'fs';
import { readdirSync } from 'fs';
import * as path from 'path';
import * as showdown from 'showdown';
import fm, { FrontMatterResult } from 'front-matter';
import { PARTS_LOCATION, POSTS_LOCATION, REFERENCE_SECTION_SLUG, SERVICES_SECTION_SLUG } from '../lib/consts/content';
import { Post } from '../lib/types/Post';
import { Part } from '../lib/types/Part';

const Home: NextPage<any> = (props: any) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <BasePageTemplate>
                <Showcase/>
                <div className="p-8" dangerouslySetInnerHTML={{__html: props.html}}>

                </div>
                <section className="h-full flex flex-col items-center justify-center">
                    <Feedback/>
                    <ArticlesPreview header="УСЛУГИ" bgGray/>
                    <Banks/>
                    <ArticlesPreview header="ИНФОРМАЦИЯ" bgGray/>
                    <Partners/>
                </section>
            </BasePageTemplate>
        </>
    )
}

export async function getStaticProps() {
    const postsPath = path.resolve(process.cwd(), POSTS_LOCATION);
    const partsPath = path.resolve(process.cwd(), PARTS_LOCATION);

    const converter = new showdown.Converter();
    const allPosts: Post[] = readdirSync(postsPath)
        .map((fileName: string) => {
            let result: Partial<Post> = {};
            let content: FrontMatterResult<Post>;
            try {
                content = fm(fs.readFileSync(path.resolve(postsPath, fileName), 'utf-8'));
                result = {...content.attributes}
                result.body = converter.makeHtml(content.body);
                result.preview = converter.makeHtml(content.attributes.preview);
            } catch (e) {
                console.error(e);
            }

            return result;
        })
        .filter((post: Partial<Post>) => Object.keys(post).length > 0) as Post[];

    const partSlugToSectionMap = new Map<string, string>();
    const allParts: Part[] = readdirSync(partsPath)
        .map((fileName: string) => {
            let result: Partial<Part> = {};
            let content: FrontMatterResult<Part>;
            try {
                content = fm(fs.readFileSync(path.resolve(partsPath, fileName), 'utf-8'));
                result = {...content.attributes}
                result.body = converter.makeHtml(content.body);

                if (result.slug && result.sectionCode) {
                    partSlugToSectionMap.set(result.slug, result.sectionCode);
                }
            } catch (e) {
                console.error(e);
            }

            return result;
        })
        .filter((post: Partial<Part>) => Object.keys(post).length > 0) as Part[];

    const servicesPosts = allPosts.filter((post: Post) => partSlugToSectionMap.get(post.partSlug) === SERVICES_SECTION_SLUG);
    const referencePosts = allPosts.filter((post: Post) => partSlugToSectionMap.get(post.partSlug) === REFERENCE_SECTION_SLUG);

    return {
        props: {servicesPosts, referencePosts},
    }
}

export default Home
