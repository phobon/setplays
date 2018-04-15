import React from "react";
import styled from "styled-components";

import { Box } from "../containers";
import Image from "../images";

const Avatar = ({ src }) => (
    <Box circle>
        <Image src={src} />
    </Box>
);

export default Avatar;