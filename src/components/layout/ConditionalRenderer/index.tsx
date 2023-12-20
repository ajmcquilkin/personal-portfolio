import { ReactNode } from "react";
import { useConditionalRenderer } from "./context";

export interface ConditionalRendererProps {
    children: ReactNode;
}

const ConditionalRenderer = ({
    children,
}: ConditionalRendererProps): JSX.Element => {
    const { isVisible } = useConditionalRenderer();
    return isVisible ? <>{children}</> : <></>;
};

export default ConditionalRenderer;
