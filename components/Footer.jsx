import classes from "../styles/Footer.module.css";
import Link from 'next/link'

const Footer = () => {
  return <div className={classes.footer}>Product Development Accelerated by&nbsp;<Link href="https://opensourcelabs.io/">OS Labs</Link> &emsp;&nbsp; | &emsp;&nbsp;  Issues or concerns? Report them to our&nbsp;<Link href="https://github.com/">GitHub</Link></div>;
};

export default Footer;
