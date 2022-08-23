import { NextPage } from 'next';
import path from 'path';
import { SERVICES_PAGE_LOCATION } from '../lib/consts/content';
import { parseYaml } from '../lib/content/utils/yaml';
import { SectionPageContent, SectionType } from '../lib/content/types/SectionPageContent';
import { getHtmlFromMd } from '../lib/content/utils/markdown';
import postsContent from '../lib/content/postsContent';
import { Section } from '../components/Section';
import { getConfig } from '../lib/content/getConfig';
import { SiteConfig } from '../lib/content/types/SiteConfig';

export const Services: NextPage<{content: SectionPageContent, config: SiteConfig}> = (props) => {
    return <Section content={props.content} config={props.config}/>
}

export async function getStaticProps() {
    const content = parseYaml<SectionPageContent>(path.resolve(process.cwd(), SERVICES_PAGE_LOCATION));
    content.block1 = getHtmlFromMd(content.block1);
    content.posts = postsContent.servicesPosts;
    content.parts = postsContent.servicesParts;
    content.type = SectionType.SERVICES;

    return {
        props: {
            content,
            config: getConfig(),
        }
    }
}

export default Services;
