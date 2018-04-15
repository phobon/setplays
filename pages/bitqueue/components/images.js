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

const Image = styled.img`
    border-radius: ${props => br(props)};
`;

export default Image;