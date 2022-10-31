import styled from "styled-components";

export const Container = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const CartItem = styled.div`
  height: 80vh;
  overflow-y: auto;
  margin: 28px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  padding-top: 1rem;
  @media (max-width: 380px) {
    margin: 28px 20px;
   
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  width: 380px;
  height: 95px;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  position: relative;
  @media (max-width: 380px) {
    width: 250px;
    padding: 20px;
    gap: 10px;
  }

  img {
    width: 50px;
    height: 57px;
  }
  h3 {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    width: 113px;
  }
  div {
    height: 19px;
    display: flex;
    gap: 5px;
    border: 1px solid #bfbfbf;
    border-radius: 10px;
    padding: 5px;
    button {
      border: 0;
      background: transparent;
      font-style: normal;
      font-weight: 400;
      font-size: 8px;
      line-height: 10px;
      cursor: pointer;
    }
    span {
      border-right: 1px solid #bfbfbf;
      border-left: 1px solid #bfbfbf;
      padding: 0 5px;
      font-style: normal;
      font-weight: 400;
    }
  }

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin-right: 25px;
    width: 50px;
  }
`;
export const RemoveItem = styled.button`
  position: absolute;
  right: -5px;
  top: -5px;
  background: #000;
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
`;

export const ValueCar = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin: 45px 60px;
`;
export const Finishing = styled.button`
  width: 100%;
  height: 97px;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  text-align: center;
  border: 0;
  background: #000;
  color: #fff;
`;
