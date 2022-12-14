import Image from "next/image";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerbox}>
      <div className={classes.copyrighttext}>&#169; Nick Schroder</div>
      <div className={classes.iconlist}>
        <a
          href="https://www.linkedin.com/in/nicholas-schroder-248082b9"
          rel="noreferrer"
          target="_blank"
          className={classes.icons}
        >
          <Image
            src="/LinkedIn.png"
            width="25"
            height="25"
            alt="LinkedIn logo"
          />
        </a>
        <a
          href="https://github.com/nschroder26"
          rel="noreferrer"
          target="_blank"
          className={classes.icons}
        >
          <Image src="/GitHub.png" width="25" height="25" alt="LinkedIn logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
