import { GetStaticProps, GetStaticPaths } from 'next';

import Story, { StoryProps } from 'components/pages/Story';

import {
    getAllSlugs, getContentFromFile, getPathFromSlug, getPathsFromSlugs
} from 'utils/markdown';

export const getStaticProps: GetStaticProps<StoryProps> = async ({ params }) => {
    const { slug } = params as { slug: string };
    const { meta, content } = await getContentFromFile(slug);
    return ({ props: { meta, content, path: getPathFromSlug(slug) } });
};

export const getStaticPaths: GetStaticPaths = async () => {
    const blogSlugs = getAllSlugs();
    const paths = getPathsFromSlugs(blogSlugs);
    return ({ paths, fallback: false });
};

export default Story;
