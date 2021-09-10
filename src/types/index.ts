export type ColorMode = 'light' | 'dark';
export type ButtonSize = 'large' | 'small';

export interface StoryMeta {
  title: string,
  subtitle: string,
  description: string,
  // author: string,
  descriptionLong: string[],

  partners: string[],
  roles: string[],
  team: string[],
  timeline: string,
  languages: string,

  link: string,
  icon: string,
  iconAlt: string,
  featuredImage: string,
  featuredImageAlt: string
}

export interface Image {
  title: string,
  subtitle: string,
  src: string
}
