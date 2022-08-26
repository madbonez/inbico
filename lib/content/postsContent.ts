import path from 'path';
import { PARTS_LOCATION, POSTS_LOCATION, REFERENCE_SECTION_SLUG, SERVICES_SECTION_SLUG } from '../consts/content';
import { SitePostContent } from './types/SitePostContent';
import fs, { readdirSync } from 'fs';
import fm, { FrontMatterResult } from 'front-matter';
import { SitePartContent } from './types/SitePartContent';
import { getHtmlFromMd } from './utils/markdown';

const postsPath = path.resolve(process.cwd(), POSTS_LOCATION);
const partsPath = path.resolve(process.cwd(), PARTS_LOCATION);

const allPosts: SitePostContent[] = readdirSync(postsPath)
    .map((fileName: string) => {
        let result: Partial<SitePostContent> = {};
        let content: FrontMatterResult<SitePostContent>;
        try {
            content = fm(fs.readFileSync(path.resolve(postsPath, fileName), 'utf-8'));
            result = {...content.attributes}
            result.body = getHtmlFromMd(content.body);
        } catch (e) {
            console.error(e);
        }

        return result;
    })
    .filter((post: Partial<SitePostContent>) => Object.keys(post).length > 0) as SitePostContent[];

const partSlugToSectionMap = new Map<string, string>();
const referenceParts: SitePartContent[] = [];
const servicesParts: SitePartContent[] = []
const allParts: SitePartContent[] = readdirSync(partsPath)
    .map((fileName: string) => {
        let result: SitePartContent | null = null;
        let content: FrontMatterResult<SitePartContent>;
        try {
            content = fm(fs.readFileSync(path.resolve(partsPath, fileName), 'utf-8'));
            result = {...content.attributes}
            result.body = getHtmlFromMd(content.body);

            if (result.slug && result.sectionCode) {
                partSlugToSectionMap.set(result.slug, result.sectionCode);

                if (result.sectionCode === SERVICES_SECTION_SLUG) {
                    servicesParts.push(result);
                } else {
                    referenceParts.push(result);
                }
            }
        } catch (e) {
            console.error(e);
        }

        return result;
    })
    .filter((post: SitePartContent | null) => Object.keys(post ?? {}).length > 0) as SitePartContent[];

const servicesPosts = allPosts.filter((post: SitePostContent) => partSlugToSectionMap.get(post.partSlug) === SERVICES_SECTION_SLUG);
const referencePosts = allPosts.filter((post: SitePostContent) => partSlugToSectionMap.get(post.partSlug) === REFERENCE_SECTION_SLUG);


const content = {
    servicesPosts,
    referencePosts,
    servicesParts,
    referenceParts,
}

export function getPostsThatBelongPart(partSlug: string): SitePostContent[] {
    return [...servicesPosts, ...referencePosts].filter(post => post.partSlug === partSlug);
}

export function getPartContent(partSlug: string): SitePartContent | undefined {
    return [...servicesParts, ...referenceParts].find(part => part.slug === partSlug);
}

export default content;
