import { NextPage } from 'next';
import { SectionPageContent, SectionType } from '../lib/content/types/SectionPageContent';
import { Section } from '../components/Section';
import { parseYaml } from '../lib/content/utils/yaml';
import path from 'path';
import { REFERENCE_PAGE_LOCATION } from '../lib/consts/content';
import { getHtmlFromMd } from '../lib/content/utils/markdown';
import postsContent from '../lib/content/postsContent';
import { getConfig } from '../lib/content/getConfig';
import { SiteConfig } from '../lib/content/types/SiteConfig';

export const Reference: NextPage<{content: SectionPageContent, config: SiteConfig}> = (props) => {
    return <Section content={props.content} config={props.config}/>
}

export async function getStaticProps() {
    const content = parseYaml<SectionPageContent>(path.resolve(process.cwd(), REFERENCE_PAGE_LOCATION));
    content.block1 = getHtmlFromMd(content.block1);
    content.posts = postsContent.referencePosts;
    content.parts = postsContent.referenceParts;
    content.type = SectionType.REFERENCE;

    return {
        props: {
            content,
            config: getConfig(),
        }
    }
}

export default Reference;
