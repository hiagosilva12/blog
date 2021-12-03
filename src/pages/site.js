import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";

import { Link } from "gatsby";
import * as S from "../components/Estilizacao/style"
import { Footer } from "../components/Footer"

export default function Site() {
  const data = useStaticQuery(graphql`
query {
    alldata{
    meusites{
      titlesite
      logoimg{
        url
      }
      paragraphblog
      paragraphsobre
      paragraphprojetos
      thewitcherimg{
        url
      }
      cresposimg{
        url
      }
      beatimg{
        url
      }
      finnimg{
        url
      }
      calculadoraimg{
        url
      }
    }
  }
}
`)

  const { logoimg, paragraphblog, paragraphsobre, paragraphprojetos, titlesite, thewitcherimg, cresposimg, beatimg, finnimg, calculadoraimg } = data.alldata.meusites[0]

  return (
    <>
    <S.Container>
    <S.Header>
      <S.LogoImg>
        <S.ImgLogo src={logoimg.url} alt="logo do blog" />
      </S.LogoImg>
      <S.TitleSite>{titlesite}</S.TitleSite>
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
      <S.ImgsSite>
        <a href="https://hiagosilva12.github.io/the-witcher-page/" >
          <S.ThewitcherImg src={thewitcherimg.url} alt="Projeto The Witcher" />
        </a>
        <a href="https://hiagosilva12.github.io/page-Crespos/">
          <S.CresposImg src={cresposimg.url} alt="Projeto Crespos" />
        </a>
        <a href="https://hiagosilva12.github.io/page-beat/">
          <S.BeatImg src={beatimg.url} alt="Projeto Beat" />
        </a>
        <a href="https://hiagosilva12.github.io/page-finn/">
          <S.FinnImg src={finnimg.url} alt="Projeto Finn" />
        </a>
        <a href="https://hiagosilva12.github.io/calculadora/">
          <S.CalculadoraImg src={calculadoraimg.url} alt="Projeto Calculadora" />
        </a>
      </S.ImgsSite>
      <Link to="/">
      </Link>
      </S.Container>
      <Footer />
    </>
  )
}