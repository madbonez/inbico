import postsContent, { getPartContent, getPostsThatBelongPart } from '../../lib/content/postsContent';
import { getConfig } from '../../lib/content/getConfig';
import { SitePostContent } from '../../lib/content/types/SitePostContent';
import { SiteConfig } from '../../lib/content/types/SiteConfig';
import { parseMdByFrontMatter } from '../../lib/content/utils/frontmatter';
import * as path from 'path';
import { POSTS_LOCATION } from '../../lib/consts/content';
import { getHtmlFromMd } from '../../lib/content/utils/markdown';
import { BasePageTemplate } from '../../components/BasePageTemplate';
import { ContentContainer } from '../../components/layout/ContentContainer';
import { ContentView } from '../../components/molecules/ContentView';
import { Breadcrumbs, BreadcrumbsPath } from '../../components/Breadcrumbs';

export const Post = (props: { content: SitePostContent, config: SiteConfig, paths: BreadcrumbsPath[] }) => {
    return (
        <BasePageTemplate config={props.config}>
            <ContentContainer>
                <Breadcrumbs paths={props.paths}/>
                <ContentView html={props.content.body}/>
            </ContentContainer>
        </BasePageTemplate>
    )
}


export async function getStaticPaths() {
    const paths = [...postsContent.servicesParts, ...postsContent.referenceParts].flatMap(part => {
        const posts = getPostsThatBelongPart(part.slug);
        return posts.flatMap(post => {
            return {
                params: {
                    part: part.slug,
                    post: post.slug,
                }
            }
        })
    })

    console.log(JSON.stringify(paths))


    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({params}: {params: { part: string, post: string }}) {
    const content = parseMdByFrontMatter<SitePostContent>(path.resolve(POSTS_LOCATION, params.post + '.md'));
    content.body = getHtmlFromMd(content.body);

    const partContent = getPartContent(params.part);

    return {
        props: {
            config: getConfig(),
            content,
            paths: [
                {
                    slug: partContent?.sectionCode,
                    title: partContent?.sectionCode === 'services' ? 'Услуги' : 'Информация',
                },
                {
                    slug: params.part,
                    title: partContent?.title || 'Раздел'
                },
                {
                    slug: params.post,
                    title: content.title
                }
            ],
        }
    }
}


export default Post;
