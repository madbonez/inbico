import path from 'path';
import { PARTS_LOCATION, POSTS_LOCATION, REFERENCE_SECTION_SLUG, SERVICES_SECTION_SLUG } from '../consts/content';
import { Post } from './types/Post';
import fs, { readdirSync } from 'fs';
import fm, { FrontMatterResult } from 'front-matter';
import { Part } from './types/Part';
import { getHtmlFromMd } from './utils/markdown';

const postsPath = path.resolve(process.cwd(), POSTS_LOCATION);
const partsPath = path.resolve(process.cwd(), PARTS_LOCATION);

const allPosts: Post[] = readdirSync(postsPath)
    .map((fileName: string) => {
        let result: Partial<Post> = {};
        let content: FrontMatterResult<Post>;
        try {
            content = fm(fs.readFileSync(path.resolve(postsPath, fileName), 'utf-8'));
            result = {...content.attributes}
            result.body = getHtmlFromMd(content.body);
        } catch (e) {
            console.error(e);
        }

        return result;
    })
    .filter((post: Partial<Post>) => Object.keys(post).length > 0) as Post[];

const partSlugToSectionMap = new Map<string, string>();
const referenceParts: Part[] = [];
const servicesParts: Part[] = []
const allParts: Part[] = readdirSync(partsPath)
    .map((fileName: string) => {
        let result: Part | null = null;
        let content: FrontMatterResult<Part>;
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
    .filter((post: Part | null) => Object.keys(post ?? {}).length > 0) as Part[];

const servicesPosts = allPosts.filter((post: Post) => partSlugToSectionMap.get(post.partSlug) === SERVICES_SECTION_SLUG);
const referencePosts = allPosts.filter((post: Post) => partSlugToSectionMap.get(post.partSlug) === REFERENCE_SECTION_SLUG);


const content = {
    servicesPosts,
    referencePosts,
    servicesParts,
    referenceParts,
}


export default content;
