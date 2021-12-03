import styled from "styled-components";

export const Header = styled.div`
  background: #191970;
`;

export const ContainerSobre = styled.div``;
export const ParagraphBlog = styled.li`
  display: flex;
  font-size: 1.33vw;
  text-decoration: none;
  color: white;
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
`;

export const ParagraphProjetos = styled.li`
  display: flex;
  font-size: 1.33vw;
  color: white;
`;

export const titlesobre = styled.h1`
  font-size: 3.457vw;
  display: flex;
  justify-content: flex-end;
  padding-right: 5vw;
  color: white;
`;

export const paragraphquemsoueu = styled.p`
  display: flex;
  padding: 1vw;
  font-size: 2vw;
  font-family: "Gwendolyn", cursive;
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
`;

export const List = styled.ul`
  width: 95vw;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  text-decoration: none;
  color: white;
`;
