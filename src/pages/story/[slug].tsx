import { GetStaticProps, GetStaticPaths } from 'next';

/* eslint-disable import/no-extraneous-dependencies */
import glob from 'glob';
import matter from 'gray-matter';
/* eslint-enable import/no-extraneous-dependencies */

import Story, { StoryProps } from 'components/pages/Story';
import { StoryMeta } from 'types';

export const getStaticProps: GetStaticProps<StoryProps> = async ({ params }) => {
  const { slug } = params as { slug: string };
  const content = await import(`/posts/${slug}.md`); // ! Needs leading "/"
  const data = matter(content.default);

  return ({
    props: {
      meta: data.data as StoryMeta,
      content: data.content
    }
  });
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogs = glob.sync('posts/**/*.md'); // ! Can't have leading "/"

  const blogSlugs = allBlogs.map(
    (file) => file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  );

  const paths = blogSlugs.map((slug) => `/story/${slug}`);

  return ({
    paths,
    fallback: false
  });
};

export default Story;
