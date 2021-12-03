import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background: #191970;
`;

export const TitleHeader = styled.h1`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  font-size: 5vw;
  color: white;
  text-align: end;
  font-family: "M PLUS 1 Code", sans-serif;
  @media (max-width: 1440px) {
    font-size: 4.5vw;
  }
  @media (max-width: 1024px) {
    font-size: 6vw;
  }
  @media (max-width: 425px) {
    font-size: 8vw;
  }
  @media (max-width: 375px) {
    font-size: 6vw;
  }
  @media (max-width: 320px) {
    font-size: 10vw;
  }
`;

export const BoxImg = styled.div`
  display: flex;
  padding: 1rem;
  height: 15.244vw;
  width: 27.439vw;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0px 15px 1.33vw rgba(0, 0, 0, 0.5);
  justify-content: space-between;
  color: white;
  @media (max-width: 1024px) {
    height: 30vw;
    width: 60vw;
  }
  @media (max-width: 768px) {
    height: 30vw;
    width: 60vw;
  }
  @media (max-width: 425px) {
    height: 55vw;
    width: 100vw;
  }
  @media (max-width: 320px) {
    height: 60vw;
    width: 100vw;
  }
`;

export const Img = styled.img`
  width: 30%;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

export const ParagraphImg = styled.p`
  display: flex;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.9vw;
  padding: 1rem;
  color: white;
  @media (max-width: 1440px) {
    font-size: 1.8vw;
  }
  @media (max-width: 1024px) {
    font-size: 4vw;
  }
  @media (max-width: 768px) {
    font-size: 4vw;
  }
  @media (max-width: 425px) {
    font-size: 6.7vw;
  }
  @media (max-width: 320px) {
    font-size: 6.1vw;
  }
`;

export const List = styled.ul`
  width: 100vw;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  text-decoration: none;
  color: white;
`;

export const ParagraphBlog = styled.li`
  display: flex;
  font-size: 1.33vw;
  text-decoration: none;
  color: white;
  background: linear-gradient(to right, #e10101, #00ffff 50%, #f5f5f5 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  &:hover {
    background-position: 0 100%;
  }
  @media (max-width: 320px) {
    font-size: 5vw;
  }
`;

export const ParagraphSobre = styled.li`
  display: flex;
  font-size: 1.33vw;
  color: white;
  @media (max-width: 320px) {
    font-size: 5vw;
  }
`;

export const ParagraphProjetos = styled.li`
  display: flex;
  font-size: 1.33vw;
  color: white;
  @media (max-width: 320px) {
    font-size: 5vw;
  }
`;
