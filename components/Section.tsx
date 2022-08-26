import { SectionPageContent } from '../lib/content/types/SectionPageContent';
import { BasePageTemplate } from './BasePageTemplate';
import { SiteConfig } from '../lib/content/types/SiteConfig';
import { ContentView } from './molecules/ContentView';
import { ArticleCardFixed } from './ArticleCardFixed';
import { ArticlePreviewType } from '../lib/content/types/ArticlePreviewType';
import { ContentContainer } from './layout/ContentContainer';

export const Section = (props: {content: SectionPageContent, config: SiteConfig}) => {
    return (
        <BasePageTemplate config={props.config}>
            <ContentContainer>
                <div className={`p-6`}>
                    <ContentView html={props.content.block1}/>
                </div>

                <div className={`flex flex-wrap justify-center`}>
                    {
                        props.content.parts.map(part => (
                            <span key={part.slug} className={'m-auto'}>
                                    <ArticleCardFixed
                                        key={part.slug}
                                        header={part.title}
                                        imgUrl={part.image}
                                        text={part.preview}
                                        slug={part.slug}
                                        type={ArticlePreviewType.PART}
                                    />
                                </span>
                        ))
                    }
                </div>
            </ContentContainer>
        </BasePageTemplate>
    );
}
