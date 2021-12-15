import styled from "styled-components";

export const Main = styled.div`
  height: 20.92vw;
  font-family: "Corinthia", cursive;
  @media (max-width: 1440px) {
    height: 30vw;
  }
  @media (max-width: 1024px) {
    height: 37vw;
  }
  @media (max-width: 768px) {
    height: 59vw;
  }
  @media (max-width: 425px) {
    height: 120vw;
  }
  @media (max-width: 375px) {
    height: 149vw;
  }
  @media (max-width: 320px) {
    height: 179vw;
  }
`;

export const TitleMain = styled.h1`
  color: black;
  font-size: 45px;
  padding: 3rem;
  animation: blink 1s steps(1, end) infinite;
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
      color: red;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 320px) {
    font-size: 11vw;
  }
`;

export const paragraphConteudo = styled.p`
  font-size: 25px;
  display: flex;
  padding: 2rem;
`;

export const paragraphSaibamais = styled.p`
  font-size: 25px;
  padding: 2rem;
`;
