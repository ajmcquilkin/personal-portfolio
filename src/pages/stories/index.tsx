import { GetStaticProps } from 'next';

import Stories, { StoriesProps } from 'components/pages/Stories';
import { StoryProps } from 'components/pages/Story';

import { getAllSlugs, getContentFromFile, getPathFromSlug } from 'utils/markdown';

export const getStaticProps: GetStaticProps<StoriesProps> = async () => {
    const blogSlugs = getAllSlugs();

    const storiesContent: StoryProps[] = await Promise.all(blogSlugs.map(async (slug) => {
        const { meta, content } = await getContentFromFile(slug);
        return ({ meta, content, path: getPathFromSlug(slug) });
    }));

    return ({ props: { stories: storiesContent } });
};

export default Stories;
