import styled from "styled-components";

import { grayscale, colour } from "../theme/palettes";

const Status = styled.div`
    width: 100%;
    height: 1rem;
    background-color: ${props => props.isOpen ? colour.green : colour.red};
`;

Status.defaultProps = {
    isOpen: false
};

export default Status;