import styled from "styled-components";

export const Container = styled.div`
  background-color: #0f52ba;
  height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
`;
export const Logo = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 19px;
  color: #fff;
  span {
    font-weight: 300;
    font-size: 1.25rem;
  }
`;
export const Button = styled.div`
  width: 90px;
  height: 45px;
  background-color: #fff;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 20px;
    height: 18px;
    margin-right: 14px;
  }
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }
`;
