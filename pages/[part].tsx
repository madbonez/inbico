export const Part = () => {
    return <h1>PArt</h1>
}


export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { part: 'part1' },
            },
            {
                params: { part: 'part2' },
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


export default Part;
