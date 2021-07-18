import { StoryProps } from 'components/pages/Story';

export interface StoriesProps {
    stories: StoryProps[]
}

const Stories = ({ stories }: StoriesProps): JSX.Element => <div>{JSON.stringify(stories)}</div>;

export default Stories;
