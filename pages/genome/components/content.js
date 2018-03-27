import React from "react";
import styled from "styled-components";

const Content = styled.div`
    pointer-events: none;
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    left: 0;

    &:before {
        content: "";
        width: 1.3rem;
        height: 1.3rem;
        background-color: ${props => props.accent};
        display: flex;
        flex: none;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 500;

        &:before {
            content: "${props => props.count}";
            position: absolute;
            left: -6rem;
            opacity: 0.2;
            font-size: 3rem;
            z-index: -1;
        }
    }

    &:after {
        content: "Read ›";
        color: ${props => props.accent};
        bottom: 5rem;
        position: absolute;
        font-size: 2rem;
        font-weight: 500;
    }
`;

export default (props) => {
    const { count, accent, label } = props;
    return (
        <Content count={count} accent={accent}>
            <h1>{label}</h1>
        </Content>
    )
}