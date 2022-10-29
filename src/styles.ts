import styled from "styled-components";

export const Section = styled.section`
  max-width: 960px;
  margin: 200px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 22px;
  position: relative;
`;

export const Loading = styled.span`
  background: #000;
  position: absolute;
  top: 250px;
  left: 45%;

`;
