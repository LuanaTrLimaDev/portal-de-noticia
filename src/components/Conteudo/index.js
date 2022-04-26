import { useEffect, useState } from "react";
import { CardGroup, Container } from "reactstrap"
import Noticia from "../Noticia"
import Paginacao from "../Paginacao";
import "./style.css"
import Loading from "../Loading";

function Conteudo({ artigos, loading, busca }) {
    const [indice, setIndice] = useState(0);
    const mudaIndice = (i) => setIndice(i);

    useEffect(() => setIndice(0), [artigos])

    console.log(indice)
    return (
        <Container>
            <h3 className="titulo-conteudo">Notícias: {busca} </h3>
            {loading ? <Loading /> :
                <>
                    <CardGroup className="d-flex justify-content-between flex-wrap">
                        {(artigos[indice] || []).map((artigo, index) => <Noticia key={index} artigo={artigo} />)}
                    </CardGroup>

                    <Paginacao artigos={artigos} indice={indice} mudaIndice={mudaIndice} />
                </>
            }
        </Container>
    );
}

export default Conteudo;