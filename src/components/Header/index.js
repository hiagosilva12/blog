import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import "../../pages/site";
import * as S from "./style";

export function Header() {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
          titleprincipal
          logoheader {
            url
          }
          paragraphblog
          paragraphsobre
          paragraphprojetos
          paragraphimg
        }
      }
    }
  `);

  const {
    titleprincipal,
    logoheader,
    paragraphblog,
    paragraphsobre,
    paragraphprojetos,
    paragraphimg,
  } = data.alldata.headers[0];

  return (
    <S.Header>
      {/* <S.BtnDark>Dark</S.BtnDark> */}
      <S.TitleHeader>{titleprincipal}</S.TitleHeader>
      <S.BoxImg>
        <S.Img src={logoheader.url} alt="logo do blog" />
        <S.ParagraphImg>{paragraphimg}</S.ParagraphImg>
      </S.BoxImg>
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
  );
}
