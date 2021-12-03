import styled from "styled-components";

export const Container = styled.div`
  height: 53vw;
`;

export const Header = styled.section`
  background: #191970;
  color: white;
`;

export const LogoImg = styled.section`
  width: 50vw;
  padding: 1vw;
`;

export const ImgLogo = styled.img`
  width: 3.191vw;
`;

export const TitleSite = styled.h1`
  display: flex;
  justify-content: flex-end;
  padding-right: 6vw;
  font-size: 2.66vw;
  color: white;
`;

export const List = styled.ul`
  width: 95vw;
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
`;

export const ParagraphSobre = styled.li`
  display: flex;
  font-size: 1.33vw;
  color: white;
`;

export const ParagraphProjetos = styled.li`
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

export const ImgsSite = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 6vw;
`;

export const ThewitcherImg = styled.img`
  display: flex;
  width: 26.596vw;
  height: 15.957vw;
  border-radius: 10.638vw;
  padding: 1vw;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

export const CresposImg = styled.img`
  width: 26.596vw;
  height: 15.957vw;
  border-radius: 10.638vw;
  padding: 1vw;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

export const BeatImg = styled.img`
  width: 26.596vw;
  height: 15.957vw;
  border-radius: 10.638vw;
  padding: 1vw;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

export const FinnImg = styled.img`
  width: 26.596vw;
  height: 15.957vw;
  border-radius: 10.638vw;
  padding: 1vw;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

export const CalculadoraImg = styled.img`
  width: 26.596vw;
  height: 15.957vw;
  border-radius: 10.638vw;
  padding: 1vw;
  border: 1px solid green;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: scale(1.1);
  }
`;
