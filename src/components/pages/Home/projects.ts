/* eslint-disable max-len */

import { AllProjectTags, Project } from "types/projects";

export const storyURLs = {
    dplanner: "dplanner",
    icid: "patent-icid",
    mdc: "mini-design-course",
    scheduling: "dartmouth-term-scheduling",
    jest: "jestjs-ui-workshop",
    repeater: "portable-radio-repeater",
    graniteState: "granite-state-volunteering",
    tsStarter: "reactjs-typescript-starter",
    whiteboard: "whiteboard-productivity",
    mindsquare: "uiux-mindsquare",
};

export const ProjectsArray: Project[] = [
    {
        title: "D-Planner, LLC",
        subtitle: "Entrepreneurship",
        context: "Co-founder, Project Designer, Developer",
        description:
            "Academic planning is difficult for students, especially when information is fragmented and hard to find. D-Planner is a better way of planning out your time at college. Winner of the 2018 DALI Pitch Competition.",

        featuredImageSrc: "",
        featuredImageAlt: "",
        featuredLogoSrc: "/icons/search.svg",
        featuredLogoAlt: "D-Planner logo",

        storyUrl: storyURLs.dplanner,
        tags: [
            "Entrepreneurship",
            "Web Development",
            "Dev Ops",
            "Product Design",
            "JavaScript",
            "HTML / JSX",
            "CSS / SASS",
            "Python",
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "ReduxJS",
            "Flask",
        ],
        backgroundStyling:
            "radial-gradient(108.61% 108.61% at 50% 50%, rgba(34, 34, 34, 0) 42.89%, rgba(34, 34, 34, 0.3) 94.11%), radial-gradient(107.22% 107.22% at 50% 50%, rgba(81, 143, 245, 0.6) 0%, rgba(81, 143, 245, 0) 100%), #5E51F1",
    },
    {
        title: "Intermediate Computer Interface",
        subtitle: "US Patent and Trademark Office",
        context: "US Patent 9,632,952",
        description:
            "Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et. Quod fugiat et officia officiis rerum debitis vero molestias.",

        featuredImageSrc: "",
        featuredImageAlt: "USPTO logo",
        featuredLogoSrc: "/icons/chip.svg",
        featuredLogoAlt: "Computer chip",

        storyUrl: storyURLs.icid,
        tags: [
            "Entrepreneurship",
            "Engineering",
            "Entrepreneurship",
            "Product Design",
            "C / C++",
        ],
        backgroundStyling:
            "radial-gradient(89.62% 89.62% at 50% 50%, rgba(34, 34, 34, 0) 53.17%, rgba(34, 34, 34, 0.6) 100%), #344452",
    },
    {
        title: "Mini Design Course",
        subtitle: "DALI Lab Design Lecturer",
        context: "Senior Design Lecturer",
        description:
            "Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et. Quod fugiat et officia officiis rerum debitis vero molestias.",

        featuredImageSrc: "",
        featuredImageAlt: "",
        featuredLogoSrc: "/icons/dartmouth.svg",
        featuredLogoAlt: "Dartmouth College logo",

        storyUrl: storyURLs.mdc,
        tags: ["Mentorship", "Product Design"],
        backgroundStyling:
            "radial-gradient(95.95% 95.95% at 50% 50%, rgba(85, 85, 85, 0) 0%, rgba(85, 85, 85, 0) 58.02%, rgba(85, 85, 85, 0.3) 100%), #38B2AB",
    },
    {
        title: "Term Scheduling Portal",
        subtitle: "Registrar, Dartmouth College",
        context: "Designer, Developer, Development Mentor",
        description:
            "Dartmouth College’s existing term election interface has a success rate of 25%, and does not support international students. How might Dartmouth make sure their interface works for everyone?",

        featuredImageSrc: "",
        featuredImageAlt: "",
        featuredLogoSrc: "/icons/dartmouth.svg",
        featuredLogoAlt: "Dartmouth College logo",

        storyUrl: storyURLs.scheduling,
        tags: [
            "Web Development",
            "Mentorship",
            "Product Design",
            "JavaScript",
            "HTML / JSX",
            "CSS / SASS",
            "ReactJS",
            "ReduxJS",
        ],
        backgroundStyling:
            "radial-gradient(88.48% 88.48% at 50% 50%, rgba(34, 34, 34, 0) 39.13%, rgba(34, 34, 34, 0.4) 100%), rgba(27, 74, 35, 0.9)",
    },
    {
        title: "JestJS UI Testing Workshop",
        subtitle: "DALI Lab Development Lecturer",
        context: "Developer, Development Mentor",
        description:
            "Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et. Quod fugiat et officia officiis rerum debitis vero molestias.",

        featuredImageSrc: "",
        featuredImageAlt: "",
        featuredLogoSrc: "/icons/react.svg",
        featuredLogoAlt: "ReactJS logo",

        storyUrl: storyURLs.jest,
        tags: [
            "Web Development",
            "Mentorship",
            "Dev Ops",
            "JavaScript",
            "TypeScript",
            "ReactJS",
            "NodeJS",
            "ExpressJS",
        ],
        backgroundStyling:
            "radial-gradient(106.2% 106.2% at 50% 50%, rgba(255, 255, 255, 0.15) 13.09%, rgba(255, 255, 255, 0.103379) 50.52%, rgba(255, 255, 255, 0) 100%), #171E27",
    },
    {
        title: "Portable Radio Repeater",
        subtitle: "Dartmouth College",
        context: "Developer, Electrical Systems Manager",
        description:
            "A highly portable radio repeater mast that allows search and rescue workers to communicate via radio in highly mountainous and dangerous terrain, built to support and improve existing radio infrastructure.",

        featuredImageSrc: "",
        featuredImageAlt: "",
        featuredLogoSrc: "/icons/dartmouth.svg",
        featuredLogoAlt: "Dartmouth College logo",

        storyUrl: storyURLs.repeater,
        tags: [
            "Entrepreneurship",
            "Engineering",
            "Embedded Development",
            "Product Design",
            "C / C++",
        ],
        backgroundStyling:
            "radial-gradient(93.04% 93.04% at 50% 50%, rgba(26, 26, 26, 0) 16.15%, #1A1A1A 100%), rgba(48, 48, 53, 0.95)",
    },
    {
        title: "Granite State Volunteering",
        subtitle: "NH State Government",
        context: "Lead Developer, Development Mentor",
        description:
            "Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et. Quod fugiat et officia officiis rerum debitis vero molestias.",

        featuredImageSrc: "",
        featuredImageAlt: "",
        featuredLogoSrc: "/icons/newhampshire.svg",
        featuredLogoAlt: "New Hampshire vector outline",

        storyUrl: storyURLs.graniteState,
        tags: [
            "Web Development",
            "Mentorship",
            "Dev Ops",
            "JavaScript",
            "HTML / JSX",
            "CSS / SASS",
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "ReduxJS",
        ],
        backgroundStyling:
            "radial-gradient(89.62% 89.62% at 50% 50%, rgba(34, 34, 34, 0) 53.17%, rgba(34, 34, 34, 0.6) 100%), rgba(72, 82, 52, 0.9)",
    },
    {
        title: "ReactJS + Typescript Starter",
        subtitle: "DALI Lab Development Lecturer",
        context: "Developer, Development Mentor",
        description:
            "Veritatis ipsa laborum ducimus facilis qui. Eveniet et hic quidem rem qui natus aut. Recusandae enim iure qui ab. Labore nulla cumque aliquam et. Quod fugiat et officia officiis rerum debitis vero molestias.",

        featuredImageSrc: "",
        featuredImageAlt: "",
        featuredLogoSrc: "/icons/typescript.svg",
        featuredLogoAlt: "Typescript logo",

        storyUrl: storyURLs.tsStarter,
        tags: [
            "Web Development",
            "Mentorship",
            "Dev Ops",
            "TypeScript",
            "HTML / JSX",
            "ReactJS",
            "ReduxJS",
        ],
        backgroundStyling:
            "radial-gradient(107.72% 107.72% at 50% 50%, rgba(255, 255, 255, 0.15) 13.09%, rgba(255, 255, 255, 0.103379) 58.07%, rgba(255, 255, 255, 0) 100%), #171E27",
    },
    {
        title: "Whiteboard Productivity",
        subtitle: "DALI Lab, Dartmouth College",
        context: "Developer, Development Mentor",
        description:
            "An all-encompassing productivity app that empowers users to take full control over their lives through relevant, integrated planning functionality. Built in conjunction with Tuck School of Business.",

        featuredImageSrc: "",
        featuredImageAlt: "",
        featuredLogoSrc: "/icons/github.svg",
        featuredLogoAlt: "Github logo",

        storyUrl: storyURLs.whiteboard,
        tags: [
            "Web Development",
            "Mentorship",
            "JavaScript",
            "HTML / JSX",
            "CSS / SASS",
            "ReactJS",
            "ReduxJS",
        ],
        backgroundStyling:
            "radial-gradient(107.09% 107.09% at 50% 50%, rgba(255, 255, 255, 0.15) 32.84%, rgba(255, 255, 255, 0) 100%), #434279",
    },
    {
        title: "MindSquare",
        subtitle: "Dartmouth College",
        context: "Product Designer",
        description:
            "On college campuses, fear of missing out is a powerful social motivator. MindSquare helps users reframe what it means to take personal time away from stressful daily activities through personalized digital mosaics.",

        featuredImageSrc: "",
        featuredImageAlt: "",
        featuredLogoSrc: "/icons/dartmouth.svg",
        featuredLogoAlt: "Dartmouth College logo",

        storyUrl: storyURLs.mindsquare,
        tags: ["Product Design"],
        backgroundStyling:
            "radial-gradient(92.28% 92.28% at 50% 50%, rgba(81, 143, 245, 0) 0%, rgba(23, 74, 91, 0.5) 100%), #60A8C1",
    },
    // Vox, Dev Onboarding, Petition, CRUD packs
    // {
    //   title: 'TODO: Discuss this portfolio',
    //   subtitle: '',
    //   featuredLogoSrc: '',
    //   featuredLogoAlt: '',
    //   contentText: '',
    //
    //   projectSubURL: '',
    //   bottomText: '',
    //   bottomIconSrc: '',
    //   bottomIconAlt: '',
    //   tags: ['Product Design'],
    //   backgroundStyling: 'radial-gradient(92.28% 92.28% at 50% 50%, rgba(81, 143, 245, 0) 0%, rgba(23, 74, 91, 0.5) 100%), #60A8C1',
    // },
];
