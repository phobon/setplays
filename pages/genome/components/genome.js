import React from "react";
import styled from "styled-components";

import Content from "./content";
import Squares from "./squares";
import Hover from "./hover";

const Layout = styled.li`
    position: relative;
    width: 32rem;
    height: 32rem;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export default class Genome extends React.Component {
    constructor(props) {
        super(props);

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.state = { isMouseOver: false };
    }

    render() {
        const { count, accent, label, description, illustration } = this.props;
        const { isMouseOver } = this.state;

        return (
            <Layout onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                <Content count={count} accent={accent} label={label}/>
                <Squares accent={accent} isMouseOver={isMouseOver}/>
                <Hover label={label} description={description} illustration={illustration} isMouseOver={isMouseOver}/>
            </Layout>
        )
    }

    onMouseOver = (e) => {
        requestAnimationFrame(() => {
            this.setState({ isMouseOver: true });
        });
    }

    onMouseLeave = (e) => {
        requestAnimationFrame(() => {
            this.setState({ isMouseOver: false });
        });
    }
}