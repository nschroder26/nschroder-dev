import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import classes from "./MyNavbar.module.css";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link href="/ruby" passHref>
            <Nav.Link>Ruby</Nav.Link>
          </Link>
          <Link href="/react" passHref>
            <Nav.Link>React</Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
        </Nav>
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
