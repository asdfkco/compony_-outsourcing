import styled from "styled-components";


export const Header = styled.header`
  width: 700px;
  border-radius: 100px;
  height: 60px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  backdrop-filter: saturate(130%) blur(4px);
  margin: 15px;
  z-index: 999;
  

`;
export const Elements = styled.div`
    width:100px;
    margin: 0 auto;
    height: 65x;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ElementsWord = styled.p`
    color: white;
    font-size: 20px;
    text-decoration: none;
    opacity: 1;
`;
