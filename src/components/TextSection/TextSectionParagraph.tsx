import styles from "./TextSection.module.scss";

export interface TextSectionParagraphProps {
    children: string;
    className?: string;
}

const TextSectionParagraph = ({
    children,
    className = "",
}: TextSectionParagraphProps): JSX.Element => (
    <p className={[styles.description, className].join(" ")}>{children}</p>
);

export default TextSectionParagraph;
