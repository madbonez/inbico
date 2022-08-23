import { Seo } from './Seo';
import { Post } from './Post';
import { Part } from './Part';

export enum SectionType {
    SERVICES = 'SERVICES',
    REFERENCE = 'REFERENCE',
}

export interface SectionPageContent {
    seo: Seo;
    block1: string;
    posts: Post[];
    parts: Part[];
    type: SectionType;
}
