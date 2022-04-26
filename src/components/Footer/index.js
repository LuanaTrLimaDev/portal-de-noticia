import { Navbar, NavbarText } from "reactstrap"
import "./style.css"

function Footer() {
    return (
        <>
            <Navbar expand="md" className="footer-direitos">
                <NavbarText className="texto-direitos"> Portal de notícias - Todos os direitos reservados</NavbarText>
            </Navbar>
        </>
    );
}

export default Footer;