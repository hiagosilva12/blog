import React from "react";

import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Footer } from "../components/Footer"
import "../components/Global/style.css"
// import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle `

// ` 

export default function Index() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}