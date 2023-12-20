/* eslint-disable import/no-extraneous-dependencies */
import glob from "glob";
import matter from "gray-matter";
/* eslint-enable import/no-extraneous-dependencies */

import { StoryProps } from "components/pages/Story";
import { StoryMeta } from "types";

export const getContentFromFile = async (slug: string): Promise<StoryProps> => {
    const content = await import(`/posts/${slug}.md`); // ! Needs leading "/"
    const data = matter(content.default);
    return { meta: data.data as StoryMeta, content: data.content, path: "" };
};

export const getAllSlugs = (): string[] => {
    const allBlogs = glob
        .sync("posts/**/*.md") // ! Can't have leading "/"
        .filter((slug) => !slug.split("/")?.[1].startsWith("_")); // Remove non-public posts

    const blogSlugs = allBlogs.map((file) =>
        file.split("/")[1].replace(/ /g, "-").slice(0, -3).trim(),
    );

    return blogSlugs;
};

export const getPathFromSlug = (slug: string): string => `/stories/${slug}`;

export const getPathsFromSlugs = (slugs: string[]): string[] =>
    slugs.map((slug) => getPathFromSlug(slug));
