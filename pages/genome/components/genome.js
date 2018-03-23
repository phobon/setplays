import React from "react";
import styled from "styled-components";

import Content from "./content";
import Squares from "./squares";
import Hover from "./hover";

const Genome = styled.li`
    position: relative;
    width: 32rem;
    height: 32rem;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export default (props) => {
    const { count, accent, label, description, illustration } = props;
    return (
        <Genome>
            <Content count={count} accent={accent} label={label}/>
            <Squares accent={accent}/>
            <Hover label={label} description={description} illustration={illustration}/>
        </Genome>
    )
}