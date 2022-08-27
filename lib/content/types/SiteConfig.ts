export interface SiteConfig {
    phones: string[];
    email: string;
    vkUrl: string;
    ytUrl: string;
    address: string;
    userActionEndpoint: string;
    fastLinks: {
        title: string,
        url: string,
    }[];
}
