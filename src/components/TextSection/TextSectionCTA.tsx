import { ReactNode } from "react";
import styles from "./TextSection.module.scss";

export interface TextSectionCTAProps {
    children: ReactNode;
    className?: string;
}

const TextSectionCTA = ({
    children,
    className = "",
}: TextSectionCTAProps): JSX.Element => (
    <div className={[styles.cta, className].join(" ")}>{children}</div>
);

export default TextSectionCTA;
