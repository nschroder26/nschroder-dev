import Link from "next/link";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerbox}>
      <div className={classes.copyrighttext}>&#169; Nick Schroder</div>
      <div className={classes.iconlist}>
        <a
          href="www.linkedin.com/in/nicholas-schroder-248082b9"
          passHref
          target="_blank"
        >
          <img
            src="/LinkedIn.png"
            width="25"
            height="25"
            className={classes.icons}
            alt="LinkedIn logo"
          />
        </a>
        <a href="https://github.com/nschroder26" passHref target="_blank">
          <img
            src="/GitHub.png"
            width="25"
            height="25"
            className={classes.icons}
            alt="LinkedIn logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
