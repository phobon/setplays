import React from "react";
import styled from "styled-components";

import { grayscale, colour } from "../../theme";

import { Box, Flex } from "../containers";
import Image from "../images";

const Next = ({ next }) => (
    <Flex fullWidth style={{ padding: "2rem" }}>
        <svg width="40" height="40" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <image width="40" height="40" href="data:image/png;base64,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"/>
        </svg>

        <Box flexDirection="column" align="flex-start" style={{ marginLeft: "1rem" }}>
            <Box style={{ color: grayscale[1], fontSize: "14px" }}>Up Next</Box>
            <Box style={{ color: grayscale[0], fontSize: "18px", fontWeight: 500 }}>{next.name}</Box>
        </Box>
        <Flex justify="flex-end">
            <Box style={{ color: colour.purple, fontSize: "14px" }}>{next.bits} bits</Box>
        </Flex>
    </Flex>
)

export default Next;