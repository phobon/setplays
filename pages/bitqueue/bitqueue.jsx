import React from "react";
import styled from "styled-components";
import posed from "react-pose";

import { Box, Flex } from "./components/containers";
import Button from "./components/button";
import { H3, H5 } from "./components/text";

import Identity from "./components/identity";
import { AvatarGroup } from "./components/avatars";

import { grayscale, colour } from "./theme";

import Next from "./components/next";
import Status from "./components/status";

const Layout = Box.extend`
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
            <Box fullWidth style={{ padding: "2rem" }}>
                <Identity colour={colour.red} />
                <Flex/>
                <Button disabled={hasJoined} onClick={() => this.setState({ hasJoined: true })}>{hasJoined ? "You're in!" : "Join Queue"}</Button>
            </Box>

            {/* Title and details */}
            <Box flexDirection="column" align="flex-start" fullWidth style={{ padding: "0 2rem" }}>
                <H3 style={{ color: grayscale[0] }}>{name}</H3>
                <H5 style={{ color: colour.yellow }}>{queueType}</H5>
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