import styled from "styled-components";
import { grayscale, colour } from "../theme/palettes";

const Button = styled.button`
    display: flex;
    flex: none;

    background-color: ${props => props.disabled ? grayscale[2] : props.bg};
    color: ${props => props.disabled ? grayscale[1] : props.color};

    border: 0;
    pointer-events: ${props => props.disabled ? "none" : "all"};
    cursor: pointer;
    transition: background-color 180ms ease-out, color 180ms ease-out;

    border-radius: 1rem;

    padding: 0.75rem 1.5rem;

    &:hover {
        background-color: ${props => colour.purple};
        color: #FFF;
    }
`;

Button.defaultProps = {
    color: grayscale[0],
    bg: grayscale[1]
};

export default Button;