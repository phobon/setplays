import React from "react";
import styled from "styled-components";

const Hover = styled.div`
    color: white;
    position: absolute;
    width: 75%;
    height: 75%;
    opacity: 0;
    transition: opacity 180ms ease-out, transform 180ms ease-out;
    transition-delay: 120ms;
    transform: translateY(2rem);
    display: flex;
    flex: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    &:after {
        content: "${props => props.illustration}";
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 8rem;
        transition-delay: 500ms;
        opacity: 0;
        transition: opacity 180ms ease-out, transform 180ms ease-out;
        transform: translateY(2rem);
    }
`;

export default (props) => {
    const { label, description, illustration } = props;
    return (
        <Hover illustration={illustration}>
            <h1>{description}</h1>
            <h3>{label} ›</h3>
        </Hover>
    )
}