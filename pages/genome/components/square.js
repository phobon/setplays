import styled from "styled-components";

export default styled.li`
    width: 16rem;
    height: 16rem;
    overflow: hidden;
    position: relative;

    &:before {
        content: "";
        background-color: ${props => props.accent};
        transition: transform 150ms cubic-bezier(.05,.82,.51,.99);
        width: 100%;
        height: 100%;
        position: absolute;
        transition-delay: ${props => props.delay};
        transform: translateX(-100%);
    }
`;