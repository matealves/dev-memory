import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

  font-family: Poppins, sans-serif;
  width: 90%;
  height: 60vh;
  max-width: 1080px;
  margin: auto;
  display: flex;
  padding: 75px 0;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 35px 0;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;

  @media (max-width: 750px) {
    margin-bottom: 50px;
    align-items: center;
  }
`;

export const LogoLink = styled.a`
  display: block;
`;

export const InfoArea = styled.div`
  width: 100%;
  margin: 10px 0;

  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    gap: 40px;
    text-align: center;
  }
`;

export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 750px) {
    align-items: center;
    justify-content: center;
    margin: 0 30px;
  }
`;

export const Grid = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;

  @media (max-width: 750px) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
`;
