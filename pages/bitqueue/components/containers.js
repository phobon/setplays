import styled from "styled-components";

const br = (props) => {
    if (props.circle) {
        return "100%";
    }

    if (props.squircle) {
        return "1rem";
    }

    return 0;
};

const Box = styled.div`
    display: flex;
    flex: none;

    flex-direction: ${props => props.flexDirection};

    align-items: ${props => props.align};
    justify-content: ${props => props.justify};

    border-radius: ${props => br(props)};

    width: ${props => props.fullWidth ? "100%" : ""};
    height: ${props => props.fullHeight ? "100%" : ""};
`;

Box.defaultProps = {
    align: "center",
    justify: "center",
    flexDirection: "row"
};

const Flex = Box.extend`
    flex: 1 1 auto;
`;

export { Box, Flex };