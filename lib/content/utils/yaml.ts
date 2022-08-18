import yaml from 'js-yaml';
import * as fs from 'fs';
import { PathLike } from 'fs';

export function parseYaml<T>(path: PathLike): T {
    return  yaml.load(fs.readFileSync(path, 'utf8')) as T;
}
