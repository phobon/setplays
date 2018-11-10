import React from "react";
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    flex: none;

    align-items: center;
    justify-content: center;
`;

const Bubble = styled.li`
    display: flex;
    flex: none;

    align-items: center;
    justify-content: center;
    
    width: 5rem;
    height: 5rem;
    border-radius: 100%;
    
    background-color: ${props => props.theme.colors.grayscale[1]};
    border: 0.5rem solid #FFF;
    transform: ${props => `translateX(-${props.index * 2}rem)`};
`;

const AvatarGroup = ({ queue }) => {
    const q = queue.slice(0, 5);

    const avatars = q.map((a, i) => (
        <Bubble key={i} index={i} />
    ));

    return <List>{avatars}</List>;
};

export default AvatarGroup;