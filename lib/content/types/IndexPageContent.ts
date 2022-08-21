import { Seo } from './Seo';

export interface ShowcaseItem {
    image: string;
    sizeX: number;
    sizeY: number;
    head: string;
    body: string;
}

export interface LogosPreview {
    head: string;
    images: {
        url: string;
        sizeX: number;
        sizeY: number;
        alt: string;
    } [];
}

export interface ShowcaseContent {
    about: ShowcaseItem;
    services: {
        head: string;
        blocks: ShowcaseItem[];
    };
}

export interface FeedbackContent {
    head: string;
    messages: {
        name: string;
        source: string;
        text: string;
    }[]
}

export interface IndexPageContent {
    seo: Seo;
    showcase: ShowcaseContent;
    feedback: FeedbackContent;
    banks: LogosPreview;
    partners: LogosPreview;
}
