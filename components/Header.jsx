import Link from "next/link";
import classes from "../styles/Header.module.css";
import {Link as Scroll} from "react-scroll";
import Image from 'next/image'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.leftHeader}>
        NextStep
        <div className={classes.demoSetup}>
          <Link href="/" passHref={true}><Scroll to="DemoContainer_demoContainer__3sCL7" spy={true} smooth={true}>Demo</Scroll></Link>
          <Link href="/" passHref={true}><Scroll to="SetupInsContainer_container__2dP5H" spy={true} smooth={true}>Setup</Scroll></Link>
        </div>
      </div>
      <div className={classes.navigation}>
        <Link href="/">VS Code</Link>
        <Link href="#">GitHub</Link>
        <Link href="#">NPM</Link>
        <Link href="#">LinkedIn</Link>
      </div>
    </header>
  );
};

export default Header;
