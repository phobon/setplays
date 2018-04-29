import styled, { keyframes } from "styled-components";

const defaultDelay = "0s";
const defaultDuration = "500ms";

const slideAnimation = keyframes`
    0% {
        transform: translateX(-100%);
    }

    30% {
        transform: translateX(0);        
    }

    70% {
        transform: translateX(0);        
    }

    100% {
        transform: translateX(100%);
    }
`;

const revealAnimation = keyframes`
    0% {
        opacity: 0;
    }

    30% {
        opacity: 0;        
    }

    70% {
        opacity: 1;        
    }

    100% {
        opacity: 1;
    }
`;

const Layout = styled.div`
    display: flex;
    flex: none;

    position: relative;
    overflow: hidden;

    > * {
        opacity: 0;
        animation: ${revealAnimation} ${props => props.duration ? props.duration : defaultDuration} linear forwards;
    }

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${props => props.fill ? props.fill : "blue"};
        transform: translateX(-100%);
        animation: ${slideAnimation} ${props => props.duration ? props.duration : defaultDuration} ease-out forwards;
        z-index: 1;
    }
`;

const Block = (props) => (
    <Layout {...props}>
        {props.children}
    </Layout>
);

export default Block;