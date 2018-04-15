import styled from "styled-components";

const IdentityGlyph = styled.svg`
    fill: ${props => props.fill};
`;

const Identity = ({ colour }) => (
    <IdentityGlyph fill={colour} xmlns="http://www.w3.org/2000/svg" width="34" height="20" viewBox="0 0 34 20">
        <path d="M0 9.7L9.7 19.4 12.1 17 9.7 14.6 7.3 12.1 4.9 9.7 9.7 4.9 12.1 7.3 14.6 4.9 9.7 0 0 9.7Z"/>
        <path d="M24.3 0L21.9 2.4 24.3 4.9 29.1 9.7 24.3 14.6 21.9 12.1 19.4 14.6 24.3 19.4 34 9.7 24.3 0Z"/>
    </IdentityGlyph>
);

export default Identity;