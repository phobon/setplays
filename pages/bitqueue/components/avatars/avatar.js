import React from "react";

import { Box, Image } from "@phobon/base";

const Avatar = ({ src }) => (
    <Box circle>
        <Image src={src} />
    </Box>
);

export default Avatar;