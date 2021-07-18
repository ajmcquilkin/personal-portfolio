import { createContext, ReactNode, useContext } from 'react';

export interface ConditionalRendererContext {
    isVisible: boolean
}

export interface ConditionalRendererContextProps extends ConditionalRendererContext {
    children: ReactNode
}

const context = createContext<ConditionalRendererContext>({ isVisible: false });

const useConditionalRenderer = (): ConditionalRendererContext => useContext(context);

const ConditionalRendererProvider = ({ isVisible, children }: ConditionalRendererContextProps): JSX.Element => (
    <context.Provider value={{ isVisible }}>{children}</context.Provider>
);

export { useConditionalRenderer, ConditionalRendererProvider };

export default context.Provider;
