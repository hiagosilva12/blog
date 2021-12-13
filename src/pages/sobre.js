import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";

import * as S from "../components/Estilizacao/sobrestilo";

import { Link } from "gatsby";

import site from "./site";

import { Footer } from "../components/Footer";

export default function Sobre() {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        sobres {
          titlesobre
          paragraphblog
          paragraphsobre
          paragraphprojetos
          paragraphquemsoueu
        }
      }
    }
  `);
  const {
    titlesobre,
    paragraphblog,
    paragraphsobre,
    paragraphprojetos,
    paragraphquemsoueu,
  } = data.alldata.sobres[0];

  return (
    <>
      <S.Header>
        <S.titlesobre>{titlesobre}</S.titlesobre>
        <S.List>
          <Link to="/">
            <S.ParagraphBlog>{paragraphblog}</S.ParagraphBlog>
          </Link>
          <Link to="/sobre">
            <S.ParagraphSobre>{paragraphsobre}</S.ParagraphSobre>
          </Link>
          <Link to="/site">
            <S.ParagraphProjetos>{paragraphprojetos}</S.ParagraphProjetos>
          </Link>
        </S.List>
      </S.Header>
      <S.ContainerSobre>
        <S.paragraphquemsoueu>{paragraphquemsoueu}</S.paragraphquemsoueu>
        <S.Projetos>
          <a href="/site"> Projetos{site}</a>{" "}
        </S.Projetos>
      </S.ContainerSobre>
      <Footer />
    </>
  );
}
