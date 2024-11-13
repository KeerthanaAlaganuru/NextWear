import { useContext, useState } from 'react';
import { Navbar, Container, Button, Badge } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/HomeLogo.png';
import './Navbar.css';
import { ShopContext } from '../../Context/ShopContext';

function MyNavbar() {
  const location = useLocation();
  const [menu, setMenu] = useState(location.pathname);

  const handleNavClick = (path) => {
    setMenu(path);
  };

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo of the WebPage"
            width="30"
            height="30"
            className="nav-logo"
          />{' '}
          NextWear
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="nav mx-auto">
            <li className="nav-item">
              <Link to="/" onClick={() => handleNavClick('/')} className="nav-link">
                Shop{menu === '/' ? <hr /> : null}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/men" onClick={() => handleNavClick('/men')} className="nav-link">
                Men{menu === '/men' ? <hr /> : null}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/women" onClick={() => handleNavClick('/women')} className="nav-link">
                Women{menu === '/women' ? <hr /> : null}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/kids" onClick={() => handleNavClick('/kids')} className="nav-link">
                Kids{menu === '/kids' ? <hr /> : null}
              </Link>
            </li>
          </ul>

          <div className="align-items-center d-flex">
            <Link to="/login">
              <Button variant="outline-light" className="login-button">
                Login
              </Button>
            </Link>

            <Link to="/cart" className="position-relative cart-icon">
              <BsCart size={30} className="text-white" />
              <Badge pill bg="danger" className="cart-badge">{getTotalCartItems()}</Badge>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
