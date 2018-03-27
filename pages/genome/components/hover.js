import React from "react";
import styled from "styled-components";

const Hover = styled.div`
    color: white;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: opacity 250ms cubic-bezier(.17,.67,.53,.99), transform 250ms cubic-bezier(.17,.67,.53,.99);
    transition-delay: 150ms;
    transform: translateY(2.5rem);
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    > h1 {
        font-size: 3rem;
        font-weight: 500;
        margin-left: 2rem;
    }

    > h3 {
        font-size: 2rem;
        font-weight: 500;
        position: absolute;
        bottom: 5rem;
        left: 2rem;
    }

    &:after {
        content: "${props => props.illustration}";
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 8rem;
        transition-delay: 1s;
        opacity: 0;
        transition: opacity 180ms ease-out, transform 180ms ease-out;
        transform: translateY(2rem);
    }

    /* As this is a part of the style that will change constantly, we don't want to re-render the entire component every time the prop changes
        this way we should be able to do a simple state change without messing with anything... */
    &.hover--mouseover {
        opacity: 1;
        transform: translate(0);

        &:after {
            opacity: 1;
            transform: translate(0);
        }
    }
`;

const Illustrations = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex: none;

    &:before, &:after {
        position: absolute;
        font-size: 8rem;
        transition: opacity 1000ms cubic-bezier(.17,.67,.53,.99), transform 1000ms cubic-bezier(.17,.67,.53,.99);
        opacity: 0;
        transform: translateY(2rem);
    }

    &:before {
        content: "${props => props.first}";
        bottom: -1rem;
        right: 1rem;
        transition-delay: 200ms;
    }

    &:after {
        content: "${props => props.second}";
        bottom: -5rem;
        right: 10rem;
        transition-delay: 500ms;
    }

    &.hover--mouseover {
        &:before, &:after {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export default (props) => {
    const { label, description, illustration, isMouseOver } = props;
    return (
        <Hover className={isMouseOver ? "hover--mouseover" : ""}>
            <h1>{description}</h1>
            <h3>{label} ›</h3>
            <Illustrations className={isMouseOver ? "hover--mouseover" : ""} first={illustration} second={illustration}/>
        </Hover>
    )
}