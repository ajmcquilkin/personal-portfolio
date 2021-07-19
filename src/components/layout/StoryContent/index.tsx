import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import styles from './StoryContent.module.scss';

export interface StoryContentProps {
  children: string
}

const StoryContent = ({ children }: StoryContentProps): JSX.Element => (
    <div className={styles.container}>
        <ReactMarkdown plugins={[gfm]} className={styles.content}>{children}</ReactMarkdown>
    </div>
);

export default StoryContent;
