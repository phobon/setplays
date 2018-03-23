import React from "react";
import styled from "styled-components";

import { Genome } from "./components";

const genomeData = [
    {
        accent: "rgb(229, 9, 20)",
        label: "Netflix",
        description: "Freedom and Flexibility",
        illustration: "🤤"
    },
    {
        accent: "rgb(110, 202, 220)",
        label: "Slack",
        description: "Working Transparently",
        illustration: "🤤"
    },
    {
        accent: "rgb(150, 191, 72)",
        label: "Shopify",
        description: "A North Star",
        illustration: "🤤"
    },
    {
        accent: "rgb(0, 73, 119)",
        label: "Capital One",
        description: "Customer Connections",
        illustration: "🤤"
    },
    {
        accent: "rgb(189, 8, 28)",
        label: "Pinterest",
        description: "Mission Driven",
        illustration: "🤤"
    }
];

const BoxList = styled.ul`
    display: flex;
    flex: none;
    align-items: flex-start;
    justify-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    align-content: flex-start;
    padding: 5rem 10rem;
`;

export default () => {
    const genomes = genomeData.map((g, i, a) => <Genome key={i} count={(i + 1).toString()} {...g}/>)
    return (
        <BoxList>
            {genomes}
        </BoxList>
    )
}