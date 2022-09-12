import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import classes from "./MyNavbar.module.css";

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand href="/">
            <img
              src="/NSLogoTransparent.png"
              width="120"
              height="50"
              className="d-inline-block align-top"
              alt="Nick Schroder logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Link href="/ruby" passHref>
              <Nav.Link className={classes.navlink} active={false}>
                Ruby
              </Nav.Link>
            </Link>
            <Link href="/react" passHref>
              <Nav.Link className={classes.navlink} active={false}>
                React
              </Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link className={classes.navlink} active={false}>
                About
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

/*<header className={classes.header}>
<div className={classes.logo}>
<Link href="/">Logo</Link>
</div>
<nav>
<ul className={classes.navlist}>
  <li className={classes.navitem}>
    <Link href="/ruby">Ruby</Link>
  </li>
  <li className={classes.navitem}>
    <Link href="/react">React</Link>
  </li>
  <li className={classes.navitem}>
    <Link href="/about">About</Link>
  </li>
</ul>
</nav>
</header>*/
