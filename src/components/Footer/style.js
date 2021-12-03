import styled from "styled-components";

export const Footer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0vw 10vw 0vw 10vw;
`;

export const ParagraphCopyright = styled.p`
  display: flex;
  align-items: center;
  font-family: "Bebas Neue", cursive;
  @media (max-width: 320px) {
    font-size: 3.5vw;
  }
`;

export const ParagraphContatos = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.33vw;
  @media (max-width: 320px) {
    font-size: 6vw;
  } ;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
`;

export const IconLinkedin = styled.img`
  width: 4vw;
  height: 4vw;
  align-items: center;
  @media (max-width: 320px) {
    width: 20vw;
    height: 20vw;
  }
`;

export const IconGithub = styled.img`
  width: 2vw;
  height: 2vw;
  position: relative;
  right: 0.5vw;
  @media (max-width: 320px) {
    width: 10vw;
    height: 10vw;
  }
`;

export const IconInsta = styled.img`
  width: 2vw;
  height: 2vw;
  position: relative;
  @media (max-width: 320px) {
    width: 10vw;
    height: 10vw;
  }
`;
