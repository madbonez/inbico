import * as fs from 'fs';
import { PathLike } from 'fs';
import fm, { FrontMatterResult } from 'front-matter';

export function parseMdByFrontMatter<T>(fullPath: PathLike): T {
    const content: FrontMatterResult<T> = fm(fs.readFileSync(fullPath, 'utf-8'));
    return {...content.attributes, body: content.body}
}
