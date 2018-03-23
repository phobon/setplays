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
        width: 2rem;
        height: 2rem;
        background-color: ${props => props.accent};
        display: flex;
        flex: none;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    h1 {
        opacity: 0.8;

        &:before {
            content: "${props => props.count}";
            position: absolute;
            left: -6rem;
            opacity: 0.2;
            font-size: 90%;
        }
    }

    &:after {
        content: "Read ›";
        color: ${props => props.accent};
        bottom: 3rem;
        position: absolute;
        font-size: 115%;
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