import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style"

export function Main() {
    const data = useStaticQuery(graphql`
    query {
        alldata{
          mains{
            titlemain
          paragraphconteudo
          paragraphsaibamais
        }
    }
}
`)

const {titlemain, paragraphconteudo, paragraphsaibamais} = data.alldata.mains[0]

return (
    <>
    <S.TitleMain>{titlemain}</S.TitleMain>
    <S.paragraphConteudo>{paragraphconteudo}</S.paragraphConteudo>
    <S.paragraphSaibamais>{paragraphsaibamais}</S.paragraphSaibamais>
    </>
)
}