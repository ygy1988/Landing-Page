import Link from "next/link";
import classes from "../styles/Header.module.css";
import {Link as Scroll} from "react-scroll";
import Image from 'next/image'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.leftHeader}>
      <Image src="https://i.ibb.co/0csqNyQ/logo-nobackground-5000.png" alt="Next Step Logo" width="82px" height="82px" quality="100" placeholder="blur" blurDataURL="empty"></Image>
        NextStep
        <div className={classes.demoSetup}>
          <Link href="/" passHref={true}><Scroll to="DemoContainer_title__1hInB" spy={true} smooth={true}>Demo</Scroll></Link>
          <Link href="/" passHref={true}><Scroll to="SetupInsContainer_title__3wozo" spy={true} smooth={true}>Setup</Scroll></Link>
        </div>
      </div>
      <div className={classes.navigation}>
        <Link href="https://marketplace.visualstudio.com/items?itemName=NextStep.nextstep"><a target="_blank">VS Code</a></Link>
        <Link href="https://github.com/oslabs-beta/next-step"><a target="_blank">GitHub</a></Link>
        <Link href="https://www.npmjs.com/package/next-step-metrics"><a target="_blank">npm</a></Link>
        <Link href="#">LinkedIn</Link>
      </div>
    </header>
  );
};

export default Header;
