import path from 'path';
import { SITE_CONFIG_LOCATION } from '../consts/content';
import { SiteConfig } from './types/SiteConfig';
import { parseYaml } from './utils/yaml';

export function getConfig(): SiteConfig {
    const configPath = path.resolve(process.cwd(), SITE_CONFIG_LOCATION);
    return parseYaml<SiteConfig>(configPath);
}
