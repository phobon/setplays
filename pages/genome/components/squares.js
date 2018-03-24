import React from "react";
import styled from "styled-components";

import Square from "./square";

const Layout = styled.ul`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
`;

export default (props) => {
    const { accent, isMouseOver } = props;

    const sq = [];
    for (let i = 0; i < 4; i++) {
        sq.push(<Square key={i} accent={accent} isMouseOver={isMouseOver}/>)
    }
    return (
        <Layout>
            {sq}
        </Layout>
    )
}