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
  position: absolute;
  top: 250px;
  left: 45%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-right-color: transparent;
  animation: loading 1s infinite;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
