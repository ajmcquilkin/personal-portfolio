export type ProjectTags = 'Entrepreneurship' | 'Engineering' | 'Web Development' | 'Embedded Development' | 'Mentorship' | 'Dev Ops' | 'Product Design';
export const ProjectTagsArray: ProjectTags[] = ['Entrepreneurship', 'Engineering', 'Web Development', 'Embedded Development', 'Mentorship', 'Dev Ops', 'Product Design'];

export type ProjectLanguages = 'JavaScript' | 'TypeScript' | 'HTML / JSX' | 'CSS / SASS' | 'C / C++' | 'Python' | 'Ruby';
export const ProjectLanguagesArray: ProjectLanguages[] = ['JavaScript', 'TypeScript', 'HTML / JSX', 'CSS / SASS', 'C / C++', 'Python', 'Ruby'];

export type ProjectFrameworks = 'ReactJS' | 'NodeJS' | 'ExpressJS' | 'NextJS' | 'ReduxJS' | 'Ruby on Rails' | 'Flask';
export const ProjectFrameworksArray: ProjectFrameworks[] = ['ReactJS', 'NodeJS', 'ExpressJS', 'NextJS', 'ReduxJS', 'Ruby on Rails', 'Flask'];

export type AllProjectTags = ProjectTags | ProjectLanguages | ProjectFrameworks;
export const AllProjectTagsArray = [...ProjectTagsArray, ...ProjectLanguagesArray, ...ProjectFrameworksArray];

export interface Project {
  title: string,
  subtitle: string,
  context: string,
  description: string,
  ctaText: string,
  ctaLink: string,

  featuredLogo: string,
  featuredImage: string,
  tags: AllProjectTags[]
}
