import Link from "next/link";
import classes from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.leftHeader}>
        LOGO
        <div className={classes.demoSetup}>
          <Link href="/">Demo</Link>
          <Link href="/">Setup</Link>
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
