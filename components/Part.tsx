import { ArticleCardFixed } from './ArticleCardFixed';
import { SectionPageContent } from '../lib/content/types/SectionPageContent';
import { ArticlePreviewType } from '../lib/content/types/ArticlePreviewType';

export const Part = (props: { content: SectionPageContent }) => {
    return (
        <div className={`flex flex-wrap justify-center lg:justify-between`}>
            {
                props.content.posts.map(post => (
                    <span key={post.title + post.publishMonth + post.publishDate} className={'m-auto'}>
                        <ArticleCardFixed
                            key={post.title + post.publishMonth + post.publishDate}
                            header={post.title}
                            imgUrl={post.image}
                            publishDay={post.publishDate}
                            publishMonth={post.publishMonth}
                            text={post.preview}
                            slug={post.slug}
                            type={ArticlePreviewType.POST}
                        />
                    </span>
                ))
            }
        </div>
    );
}
