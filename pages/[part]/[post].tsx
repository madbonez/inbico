export const Post = () => {
    return <h1>Post</h1>
}


export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { part: 'part3', post: 'post1' },
            },
            {
                params: { part: 'part3', post: 'post2' },
            }
        ],
        fallback: false,
    }
}

export async function getStaticProps() {
    return {
        props: {}
    }
}


export default Post;
