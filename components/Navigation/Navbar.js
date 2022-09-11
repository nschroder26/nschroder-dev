import Link from "next/link";

import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={classes.header}>
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
    </header>
  );
};

export default Navbar;
