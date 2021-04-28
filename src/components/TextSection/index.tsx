import { createElement, ReactNode } from 'react';
import { ColorMode } from 'types';
import TextSectionCTA from './TextSectionCTA';
import TextSectionParagraph from './TextSectionParagraph';

import styles from './TextSection.module.scss';

export interface TextSectionProps {
  title: string,
  subtitle: string,
  context: string,
  children: ReactNode,

  className?: string,
  colorMode?: ColorMode,
  headerLevel?: number
}

const TextSection = ({
  title, subtitle, context, children,
  className = '', colorMode = 'dark', headerLevel = 2
}: TextSectionProps): JSX.Element => (
  <div className={[styles.container, colorMode === 'dark' ? styles.dark : styles.light, className].join(' ')}>
    <div className={styles.context}>{context}</div>
    {createElement(
      `h${headerLevel > 0 && headerLevel <= 6 ? headerLevel : 2}`,
      { className: styles.header },
      title
    )}
    <p className={styles.subtitle}>{subtitle}</p>

    <div className={styles.children}>{children}</div>
  </div>
);

export {
  TextSection as default,
  TextSectionCTA,
  TextSectionParagraph
};
