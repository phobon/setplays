import React from "react";
import styled from "styled-components";

import { Genome } from "./components";

const genomeData = [
    {
        accent: "rgb(229, 9, 20)",
        label: "Name 1",
        description: "Tagline 1",
        illustration: "🤤"
    },
    {
        accent: "rgb(110, 202, 220)",
        label: "Name 2",
        description: "Tagline 2",
        illustration: "🤤"
    },
    {
        accent: "rgb(150, 191, 72)",
        label: "Name 3",
        description: "Tagline 3",
        illustration: "🤤"
    },
    {
        accent: "rgb(0, 73, 119)",
        label: "Name 4",
        description: "Tagline 4",
        illustration: "🤤"
    },
    {
        accent: "rgb(189, 8, 28)",
        label: "Name 5",
        description: "Tagline 5",
        illustration: "🤤"
    }
];

const BoxList = styled.ul`
    align-self: center;
    display: grid;
    grid-template-columns: repeat(3, calc(60vw / 3));
    grid-auto-rows: calc(60vw / 3);
`;

export default () => {
    const genomes = genomeData.map((g, i, a) => <Genome key={i} count={`0${(i + 1)}`.slice(-2)} {...g}/>)
    return (
        <BoxList>
            {genomes}
        </BoxList>
    )
}