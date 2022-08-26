import postsContent, { getPostsThatBelongPart } from '../lib/content/postsContent';
import { NextPage } from 'next';
import path from 'path';
import { PARTS_LOCATION } from '../lib/consts/content';
import { getHtmlFromMd } from '../lib/content/utils/markdown';
import { SitePartContent } from '../lib/content/types/SitePartContent';
import { BasePageTemplate } from '../components/BasePageTemplate';
import { SiteConfig } from '../lib/content/types/SiteConfig';
import { getConfig } from '../lib/content/getConfig';
import { ContentView } from '../components/molecules/ContentView';
import { parseMdByFrontMatter } from '../lib/content/utils/frontmatter';
import { ContentContainer } from '../components/layout/ContentContainer';
import { SitePostContent } from '../lib/content/types/SitePostContent';
import { ArticleCardFixed } from '../components/ArticleCardFixed';
import { ArticlePreviewType } from '../lib/content/types/ArticlePreviewType';
import { Breadcrumbs, BreadcrumbsPath } from '../components/Breadcrumbs';

export const Part: NextPage<{ content: SitePartContent, config: SiteConfig, childrenPosts: SitePostContent[], paths: BreadcrumbsPath[] }> = (props) => {
    return (
        <BasePageTemplate config={props.config}>
            <ContentContainer>
                <Breadcrumbs paths={props.paths}/>
                <h1 className={`text-teal-900 text-3xl font-bold mb-6 mt-6 pl-2 pr-2`}>{props.content.title}</h1>
                {
                    props.content.headBlock && <ContentView html={props.content.headBlock}/>
                }
                {
                    props.childrenPosts.length > 0 &&
                    <div className={`flex flex-wrap justify-center`}>
                        {
                            props.childrenPosts.map(post => (
                                <span key={post.slug} className={'m-auto'}>
                                    <ArticleCardFixed
                                        key={post.slug}
                                        header={post.title}
                                        imgUrl={post.image}
                                        text={post.preview}
                                        slug={post.slug}
                                        type={ArticlePreviewType.POST}
                                    />
                                </span>
                            ))
                        }
                    </div>
                }
                <ContentView html={props.content.body}/>
            </ContentContainer>
        </BasePageTemplate>
    )
}


export async function getStaticPaths() {
    const servicesPaths = [...postsContent.servicesParts, ...postsContent.referenceParts].map(part => {
        return {
            params: {
                part: part.slug,
            }
        }
    })

    return {
        paths: servicesPaths,
        fallback: false,
    }
}

export const getStaticProps = async ({params}: { params: { part: string } }) => {
    const content = parseMdByFrontMatter<SitePartContent>(path.resolve(process.cwd(), PARTS_LOCATION, params.part + '.md'));
    content.body = getHtmlFromMd(content.body);

    if (content.headBlock) {
        content.headBlock = getHtmlFromMd(content.headBlock);
    }

    return {
        props: {
            content: content,
            childrenPosts: getPostsThatBelongPart(content.slug),
            config: getConfig(),
            paths: [
                {
                    slug: content?.sectionCode,
                    title: content?.sectionCode === 'services' ? 'Услуги' : 'Информация',
                },
                {
                    slug: params.part,
                    title: content?.title || 'Раздел'
                }
            ]
        }
    }
}


export default Part;
