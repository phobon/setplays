import styled from "styled-components";

const Text = styled.div``;
const H1 = styled.h1``;

H1.defaultProps = {
};

const H2 = H1.withComponent("h2");
const H3 = H1.withComponent("h3");
const H4 = H1.withComponent("h4");
const H5 = H1.withComponent("h5"); 

export { Text, H1, H2, H3, H4, H5 };