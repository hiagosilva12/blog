import styled from "styled-components";

export const Header = styled.div`
  background: #191970;
`;

export const ContainerSobre = styled.div`
  height: 59vw;
  background-color: #87cefa;
  @media (max-width: 1024px) {
    height: 140vw;
  }
  @media (max-width: 768px) {
    height: 150vw;
  }
  @media (max-width: 425px) {
    height: 277vw;
  }
  @media (max-width: 375px) {
    height: 390vw;
  }
  @media (max-width: 320px) {
    height: 550vw;
  }
`;
export const ParagraphBlog = styled.li`
  display: flex;
  font-size: 1.33vw;
  text-decoration: none;
  color: white;
  @media (max-width: 1024px) {
    font-size: 4vw;
  }
  @media (max-width: 425px) {
    font-size: 5vw;
  }
  @media (max-width: 375px) {
    font-size: 5vw;
  }
  @media (max-width: 320px) {
    font-size: 5vw;
  }
`;

export const ParagraphSobre = styled.li`
  display: flex;
  font-size: 1.33vw;
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
  @media (max-width: 1024px) {
    font-size: 4vw;
  }
  @media (max-width: 425px) {
    font-size: 5vw;
  }
  @media (max-width: 375px) {
    font-size: 5vw;
  }
  @media (max-width: 320px) {
    font-size: 5vw;
  }
`;

export const ParagraphProjetos = styled.li`
  display: flex;
  font-size: 1.33vw;
  color: white;
  @media (max-width: 1024px) {
    font-size: 4vw;
  }
  @media (max-width: 425px) {
    font-size: 5vw;
  }
  @media (max-width: 375px) {
    font-size: 5vw;
  }
  @media (max-width: 320px) {
    font-size: 5vw;
  }
`;

export const titlesobre = styled.h1`
  font-size: 3.457vw;
  display: flex;
  justify-content: flex-end;
  padding-right: 5vw;
  color: white;
  @media (max-width: 1024px) {
    font-size: 5vw;
  }
  @media (max-width: 425px) {
    font-size: 5vw;
  }
  @media (max-width: 375px) {
    font-size: 5vw;
  }
  @media (max-width: 320px) {
    font-size: 5vw;
  }
`;

export const paragraphquemsoueu = styled.p`
  display: flex;
  padding: 4vw;
  font-size: 2vw;
  font-family: "Lato", sans-serif;
  @media (max-width: 1024px) {
    font-size: 3.5vw;
  }
  @media (max-width: 425px) {
    font-size: 5vw;
  }
  @media (max-width: 375px) {
    font-size: 6vw;
  }
  @media (max-width: 320px) {
    font-size: 7vw;
  }
`;

export const Projetos = styled.button`
  font-size: 2.66vw;
  text-decoration: none;
  padding: 1vw;
  border: none;
  background: transparent;
  background: linear-gradient(to right, #e10101, #00ffff 50%, #000000 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  &:hover {
    background-position: 0 100%;
  }
  @media (max-width: 1024px) {
    font-size: 4vw;
  }
  @media (max-width: 425px) {
    font-size: 5vw;
  }
  @media (max-width: 375px) {
    font-size: 5vw;
  }
  @media (max-width: 320px) {
    font-size: 5vw;
  }
`;

export const List = styled.ul`
  width: 95vw;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  text-decoration: none;
  color: white;
`;
