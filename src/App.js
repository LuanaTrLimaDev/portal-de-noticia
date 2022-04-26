import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header";
import Conteudo from "./components/Conteudo";
import Footer from "./components/Footer";
import "./style.css"
import React, { useState, useEffect } from "react";
import { getNoticia } from "./services/actions";

function App() {
  const [busca, setBusca] = useState("")
  const [artigos, setArtigos] = useState([])
  const [loading, setLoading] = useState(false)

  function paginacao(arr) {
    let paginas = [];
    let data = arr;
    while (data.length) {
      paginas.push(data.splice(0, 6));
    }
    return paginas;
  }

  async function buscaArtigos() {
    setLoading(true)
    const resposta = await getNoticia({ busca })
    const { articles } = resposta.data
    setArtigos(paginacao(articles))
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }
  useEffect(() => {
    buscaArtigos()
  }, [busca])

  const mudaBusca = (b) => {
    setBusca(b)
  }
  return (
    <>
      <Header busca={busca} mudaBusca={mudaBusca} />
      <Conteudo artigos={artigos} loading={loading} busca={busca}/>
      <Footer />
    </>
  );
}

export default App;
