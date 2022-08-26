import { Seo } from './Seo';
import { SitePostContent } from './SitePostContent';
import { SitePartContent } from './SitePartContent';

export enum SectionType {
    SERVICES = 'SERVICES',
    REFERENCE = 'REFERENCE',
}

export interface SectionPageContent {
    seo: Seo;
    block1: string;
    posts: SitePostContent[];
    parts: SitePartContent[];
    type: SectionType;
}
