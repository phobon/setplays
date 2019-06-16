import React from "react";
import styled from "styled-components";

import { Box, Flex, Heading } from "@phobon/base";
import { Button } from "@phobon/grimoire";

import Identity from "./components/identity";
import { AvatarGroup } from "./components/avatars";

import Next from "./components/next";
import Status from "./components/status";

const Layout = styled(Box)`
    width: 320px;
    height: 300px;
`;

class BitQueue extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            name: "I'll sing for you",
            queueType: "normal",
            hasJoined: false,
            queue: this.createQueue()
        };
    }

    render = () => {
        const { isOpen, name, queueType, queue, hasJoined } = this.state;

        const next = queue[0];

        return <Layout flexDirection="column">
            {/* Status indicator */}
            <Status isOpen={isOpen} />

            {/* Header */}
            <Box fullWidth p={4}>
                <Identity color="reds.3" />
                <Flex/>
                <Button disabled={hasJoined} onClick={() => this.setState({ hasJoined: true })}>{hasJoined ? "You're in!" : "Join Queue"}</Button>
            </Box>

            {/* Title and details */}
            <Box flexDirection="column" align="flex-start" fullWidth px={4}>
                <Heading.H3 color="grayscale.1">{name}</Heading.H3>
                <Heading.H5 color="oranges.3">{queueType}</Heading.H5>
            </Box>

            {/* Up next */}
            <Next next={next}/>

            {/* Queue */}
            <AvatarGroup queue={queue} />
        </Layout>
    }

    createQueue = () => {
        const queue = [];
        for (let i = 0; i < 50; i++) {
            queue.push({ name: "thenoumenon", image: "", bits: 500 });
        };

        return queue;
    }
}

export default BitQueue;