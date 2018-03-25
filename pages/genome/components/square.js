import styled, { css } from "styled-components";

const directions = ["left", "right", "up", "down"];
const delays = [0, 100, 150, 200];

const randomDelay = () => {
    return delays[Math.floor(Math.random() * delays.length)];
};
const randomDirection = () => {
    return directions[Math.floor(Math.random() * directions.length)];
};

const transform = (isMouseOver, direction) => {
    if (isMouseOver) {
        return "";
    }

    // Determine direction here.
    switch (direction) {
        case "left":
        return "square--left";
        case "right":
        return "square--right";
        case "up":
        return "square--up";
        case "down":
        return "square--down";
    }
};

const Layout = styled.li`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    
    &:before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: ${props => props.accent};
        transition: transform 300ms cubic-bezier(.05,.82,.51,.99);
        position: absolute;
        transition-delay: ${props => props.delay}ms;
        transform: translate(0, 0);
        left: 0;
        top: 0;
        will-change: transform;
    }

    /* Transition directions */
    &.square--left {
        &:before {
            transform: translate(-100%, 0);
        }
    }
    &.square--right {
        &:before {
            transform: translate(100%, 0);
        }
    }
    &.square--up {
        &:before {
            transform: translate(0, -100%);
        }
    }
    &.square--down {
        &:before {
            transform: translate(0, 100%);
        }
    }
`;

export default class Square extends React.Component {
    constructor(props) {
        super(props);

        this.state = { direction: randomDirection(), delay: randomDelay() };
    }

    componentWillReceiveProps(nextProps) {
        const { isMouseOver } = nextProps;
        if (!isMouseOver) {
            this.setState({ direction: randomDirection() });
        }
    }

    render() {
        const { isMouseOver, accent } = this.props;
        const { direction, delay } = this.state;
        return <Layout delay={delay} accent={accent} className={transform(isMouseOver, direction)}/>
    }
}