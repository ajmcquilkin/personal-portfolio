import { Children, ReactNode, useEffect } from "react";
import styles from "./Carousel.module.scss";

export interface CarouselProps {
    position: number;
    children: ReactNode;

    className?: string;
}

const Carousel = ({
    position,
    children,
    className = "",
}: CarouselProps): JSX.Element => {
    const childrenArray = Children.toArray(children);

    return <div className={className}>{childrenArray[position]}</div>;
};

export default Carousel;
