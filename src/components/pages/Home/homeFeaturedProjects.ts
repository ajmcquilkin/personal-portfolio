/* eslint-disable max-len */
import { Project } from 'types/projects';

export type HomeFeaturedProject = Project & { caption: string, link: string };

export const HomeFeaturedProjects: HomeFeaturedProject[] = [
    {
        title: 'D-Planner, LLC',
        subtitle: 'Course planning done right',
        context: 'Entrepreneurship',
        description: 'Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition.',
        caption: 'D-Planner gives studnets a modern and intuitive method for planning their educational experience.',

        featuredImageSrc: '/v1602266118/Personal%20Portfolio/test_project_image_lx5fro.png',
        featuredImageAlt: 'image alt text',
        featuredLogoSrc: '/icons/search.svg',
        featuredLogoAlt: 'D-Planner logo',

        link: '/stories/d-planner'
    },
    {
        title: 'Intermediate Computer Interface Device',
        subtitle: 'US Patent 9,632,952',
        context: 'Innovation',
        description: 'How can we leverage hardware to enable USB Human Interface Device (HID) macros and signal repeaters on systems in which you don\'t have access to software installers?',
        caption: 'A filing diagram showing the proposed implementation for the Intermediate Computer Interface Device.',

        featuredImageSrc: '/v1631290242/Personal%20Portfolio/icid_eej36n.jpg',
        featuredImageAlt: 'patent filing diagram showing intermediate computer interface device',
        featuredLogoSrc: '/icons/chip.svg',
        featuredLogoAlt: 'Computer chip',

        link: '/stories/icid'
    },
    {
        title: 'Portable Radio Repeater',
        subtitle: 'Enabling all-condition radio communication',
        context: 'Research and Development',
        description: 'Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition.',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sit turpis suspendisse urna enim.',

        featuredImageSrc: '/v1619975016/Personal%20Portfolio/DSC_9251_fapzdo.jpg',
        featuredImageAlt: 'workbench showing components of portable repeater',
        featuredLogoSrc: '/icons/search.svg',
        featuredLogoAlt: 'D-Planner logo',

        link: '/stories/portable-repeater'
    }
];
