import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavbarText, InputGroup, Input, Button, Col } from "reactstrap"
import { Newspaper, MagnifyingGlass } from "phosphor-react";
import "./style.css"
import { useState } from "react";

function Header({busca, mudaBusca}) {
    const [pesquisa, setPesquisa] = useState("")
    return (
        <>
            <Navbar expand="md">
                <Col md={3}>
                    <NavbarBrand href="/" className="logo-portal">
                        <Newspaper size={32} weight="thin" />Portal de Notícias
                    </NavbarBrand>
                </Col>
                <Col md={6}>
                    <Collapse navbar isOpen={true} className="d-flex justify-content-center">
                        <NavbarText className="info-header">Fale conosco: (11)99999-9999 / hello@portalnoticias.com.br</NavbarText>
                    </Collapse>
                </Col>
                <Col md={3}>
                    <Collapse navbar isOpen={true} className="d-flex justify-content-between">
                        <InputGroup>
                            <Input value={pesquisa} onChange={(e)=> setPesquisa(e.target.value)}/>
                            <Button className="btn-buscar" onClick={()=>mudaBusca(pesquisa)}><MagnifyingGlass size={19} weight="thin" /> Buscar</Button>
                        </InputGroup>
                    </Collapse>
                </Col>
            </Navbar>
            <hr />
        </>
    );
}

export default Header;