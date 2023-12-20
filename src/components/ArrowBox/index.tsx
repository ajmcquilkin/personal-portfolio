import { ColorMode } from "types";
import styles from "./ArrowBox.module.scss";

export interface ArrowBoxProps {
    orientation?: "up" | "down" | "left" | "right"; // * UNUSED
    colorMode?: ColorMode;
    className?: string;
}

const ArrowBox = ({
    orientation = "up",
    colorMode = "light",
    className = "",
}: ArrowBoxProps): JSX.Element => (
    <div
        className={[
            styles.container,
            colorMode === "dark" ? styles.dark : styles.light,
            className,
        ].join(" ")}
    >
        <svg
            width="14"
            height="23"
            viewBox="0 0 14 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M7 0V21.5M7 21.5L13 15.5M7 21.5L1 15.5" />
        </svg>
    </div>
);

export default ArrowBox;
