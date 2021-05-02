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

    featuredImageSrc: 'https://images.unsplash.com/photo-1619472376731-3ca648a34b69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
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

    featuredImageSrc: 'https://images.unsplash.com/photo-1619472376731-3ca648a34b69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
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

    featuredImageSrc: 'https://images.unsplash.com/photo-1619472376731-3ca648a34b69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    featuredImageAlt: 'image alt text',
    featuredLogoSrc: '/icons/search.svg',
    featuredLogoAlt: 'D-Planner logo',
  }
];
