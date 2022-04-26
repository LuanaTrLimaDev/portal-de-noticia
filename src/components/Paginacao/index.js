import "bootstrap/dist/css/bootstrap.min.css"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import "./style.css"

function Paginacao({ artigos, indice, mudaIndice }) {
    const total = artigos.length
    const ativa = indice
    const paginas = []
    const inicial = ativa > 3 ? ativa - 3 : 1
    const final = (ativa + 3) <= total ? ativa + 3 : total
    for (let pagina = inicial; pagina <= final; pagina++) { paginas.push(pagina) }
    return (
        <>
            <Pagination className="paginacao-noticia">
                {!ativa == 0 && <PaginationItem>
                    <PaginationLink
                        first
                        href="#" 
                        onClick={()=>mudaIndice(0)}/>
                </PaginationItem>}
                {!ativa == 0 && <PaginationItem>
                    <PaginationLink
                        href="#"
                        onClick={() => mudaIndice(ativa - 1)}
                        previous />
                </PaginationItem>}
                {paginas.map((valor, index)=>(
                    <PaginationItem active={valor==ativa+1} key={index}>
                    <PaginationLink href="#" onClick={()=>mudaIndice(valor-1)}>
                        {valor}
                    </PaginationLink>
                </PaginationItem>
                ))}
                {!(ativa==total-1)&& <PaginationItem>
                    <PaginationLink
                        href="#"
                        next
                        onClick={()=>mudaIndice(ativa+1)}/>
                </PaginationItem>}
                {!(ativa==total-1) && <PaginationItem>
                    <PaginationLink
                        href="#"
                        last
                        onClick={()=>mudaIndice(total-1)}/>
                </PaginationItem>}
            </Pagination>
        </>
    );
}

export default Paginacao;
