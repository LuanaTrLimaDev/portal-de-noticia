import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"
import "./style.css"
function Noticia({ artigo }) {
    const d = new Date(artigo.publishedAt || null)
    const data = `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear()}`
    return (
        <Card className="mb-5">
            <CardImg
                alt="Card image cap"
                src={artigo.urlToImage}
                top
                width="100%" />
            <CardBody>
                <CardTitle tag="h5" className="titulo-noticia">
                    {artigo.title}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6" > {artigo.author}  - {data}
                </CardSubtitle>
                <CardText className="descricao-noticia">{artigo.description}</CardText>
                <a href={artigo.url} className="btn btn-ver-noticias" target="_blank" >Ver Notícia</a>
            </CardBody>
        </Card>
    );
}

export default Noticia;
