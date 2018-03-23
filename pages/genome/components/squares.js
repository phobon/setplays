import React from "react";
import styled from "styled-components";

import Square from "./square";

const Squares = styled.ul`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
`;

export default (props) => {
    const { accent } = props;
    return (
        <Squares>
            <Square accent={accent} delay={80} direction="left"/>
            <Square accent={accent} delay={120} direction="left"/>
            <Square accent={accent} delay={40} direction="left"/>
            <Square accent={accent} delay={0} direction="left"/>
        </Squares>
    )
}