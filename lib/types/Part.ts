import { REFERENCE_SECTION_SLUG, SERVICES_SECTION_SLUG } from '../consts/content';

export interface Part {
    slug: string;
    sectionCode: typeof SERVICES_SECTION_SLUG | typeof  REFERENCE_SECTION_SLUG;
    title: string;
    body: string;
}
