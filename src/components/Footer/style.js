import styled from "styled-components";

export const Footer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0vw 10vw 0vw 10vw;
  background-color: #2f4f4f;
`;

export const ParagraphCopyright = styled.p`
  display: flex;
  align-items: center;
  font-family: "Bebas Neue", cursive;
  @media (max-width: 320px) {
    font-size: 3.5vw;
  }
  @media (max-width: 768px) {
    font-size: 2vw;
  }
`;

export const ParagraphContatos = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.33vw;
  @media (max-width: 320px) {
    font-size: 6vw;
  }
  @media (max-width: 768px) {
    font-size: 3vw;
  }
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
  @media (max-width: 768px) {
    width: 10vw;
    height: 10vw;
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
  @media (max-width: 768px) {
    width: 5vw;
    height: 5vw;
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
  @media (max-width: 768px) {
    width: 6vw;
    height: 6vw;
  }
`;
