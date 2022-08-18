import * as showdown from 'showdown';

const converter = new showdown.Converter();

export function getHtmlFromMd(markdown: string): string {
    return converter.makeHtml(markdown)
}
