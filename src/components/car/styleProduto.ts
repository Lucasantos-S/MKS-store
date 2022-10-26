import styled from "styled-components";

export const Container = styled.section`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 380px;
  height: 95px;
  margin: 28px auto;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  img {
    width: 46px;
    height: 57px;
    margin-right: 21px;
  }
  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    width: 113px;
  }
  div {
    width: 50px;
    height: 19px;
    display: flex;
    gap: 5px;
  }
`;

export const ValueCar = styled.div`
display: flex;
justify-content:space-between;
position: relative;
bottom: -50px;
`
