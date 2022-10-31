import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  width: 200px;
  height: 285px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 380px) {
    width: 100%;
    margin: 0 40px;
  }

  button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 100%;
    height: 30px;
    border: none;
    background: #0f52ba;
    border-radius: 0px 0px 8px 8px;
    color: #ffffff;
    cursor: pointer;
    
    img {
      margin-right: 17px;
    }
  }
`;

export const Image = styled.img`
  width: 110px;
  height: 110px;
  margin-top: 18px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 14px;
  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2c2c2c;
    margin-top: 14px;
  }
  p {
    background: #373737;
    border-radius: 5px;
    color: #fff;
    padding: 7px 4px;
    margin-top: 10px;
    margin-left: 10px;
  }
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #2c2c2c;
  margin-top: 7px;
  margin-left: 14px;
`;
