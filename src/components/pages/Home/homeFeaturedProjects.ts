/* eslint-disable max-len */
import { Project } from 'types/projects';

export type HomeFeaturedProject = Project & { caption: string };

export const HomeFeaturedProjects: HomeFeaturedProject[] = [
    {
        title: 'D-Planner, LLC',
        subtitle: 'Entrepreneurship',
        context: 'Co-founder, Project Designer, Developer',
        description: 'Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition.',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim.',

        featuredImageSrc: '/v1602266118/Personal%20Portfolio/test_project_image_lx5fro.png',
        featuredImageAlt: 'image alt text',
        featuredLogoSrc: '/icons/search.svg',
        featuredLogoAlt: 'D-Planner logo',
    },
    {
        title: 'Intermediate Computer Interface',
        subtitle: 'US Patent and Trademark Office',
        context: 'US Patent 9,632,952',
        description: 'Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et. Quod fugiat et officia officiis rerum debitis vero molestias.',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim.',

        featuredImageSrc: '/v1602266118/Personal%20Portfolio/test_project_image_lx5fro.png',
        featuredImageAlt: 'USPTO logo',
        featuredLogoSrc: '/icons/chip.svg',
        featuredLogoAlt: 'Computer chip',
    },
    {
        title: 'D-Planner, LLC',
        subtitle: 'Entrepreneurship',
        context: 'Co-founder, Project Designer, Developer',
        description: 'Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition.',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim.',

        featuredImageSrc: '/v1602266118/Personal%20Portfolio/test_project_image_lx5fro.png',
        featuredImageAlt: 'image alt text',
        featuredLogoSrc: '/icons/search.svg',
        featuredLogoAlt: 'D-Planner logo',
    }
];
