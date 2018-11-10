import styled from "styled-components";

const Status = styled.div`
    width: 100%;
    height: 1rem;
    background-color: ${props => props.isOpen ? props.theme.colors.greens[3] : props.theme.colors.reds[3]};
`;

Status.defaultProps = {
    isOpen: false
};

export default Status;