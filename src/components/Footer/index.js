import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";

export function Footer() {
  const data = useStaticQuery(graphql`
    query {
      alldata {
        footers {
          paragraphcopyright
          paragraphcontatos
          iconlinkedin {
            url
          }
          icongithub {
            url
          }
          iconinstagram {
            url
          }
        }
      }
    }
  `);

  const {
    paragraphcopyright,
    paragraphcontatos,
    iconlinkedin,
    icongithub,
    iconinstagram,
  } = data.alldata.footers[0];

  return (
    <S.Footer>
      <S.ParagraphCopyright>{paragraphcopyright}</S.ParagraphCopyright>
      <S.ParagraphContatos>{paragraphcontatos}</S.ParagraphContatos>
      <S.Section>
        <a href="https://www.linkedin.com/in/hiago-da-silva-58b103186/">
          <S.IconLinkedin src={iconlinkedin.url} alt="Icone do Linkedin" />
        </a>
        <a href="https://github.com/hiagosilva12">
          <S.IconGithub src={icongithub.url} alt="Icone do Github" />
        </a>
        <a href="https://www.instagram.com/hiaguinsilva/">
          <S.IconInsta src={iconinstagram.url} alt="Icone do Instagram" />
        </a>
      </S.Section>
    </S.Footer>
  );
}
