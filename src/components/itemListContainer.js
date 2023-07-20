import { Nav } from 'react-bootstrap';
import { BsCart } from "react-icons/bs";

const ItemListContainer = (greeting) => {
    return (
        <div>
            <Nav.Link href="#Carrito">
              <p><BsCart size={25} />7</p>
            </Nav.Link>
        </div>

    )
}

export default ItemListContainer;