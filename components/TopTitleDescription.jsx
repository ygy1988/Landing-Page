import classes from "../styles/TopTitleDescription.module.css";
import TopInsSetup from "./TopInsSetup";
import Image from "next/image";
import Link from "next/link";


const TopTitleDescription = () => {
  return (
    <>
    <div className={classes.titleContainer}>
      <div className={classes.logoImage}>
      <Image src="https://i.ibb.co/0csqNyQ/logo-nobackground-5000.png" alt="Next Step Logo" width="300px" height="300px" quality="100" placeholder="blur" blurDataURL="empty"></Image>
      <h1>Next Step</h1>
      </div>
      <div className={classes.containerLeft}>  
      <h2 className={classes.underHeading}>
       Actionable metrics to guide your Next.js development decisions.
      </h2>
      <Link href="https://marketplace.visualstudio.com/items?itemName=NextStep.nextstep"><a target="_blank">
      <button className={classes.codeBtn}> 
      Download VS Code Extension
      </button>
      </a></Link>
      <Link href="https://www.npmjs.com/package/next-step-metrics"><a target="_blank">
      <button className={classes.npmBtn}>npm install Next-Step</button>
      </a></Link>
       </div>
      </div>
      <div className={classes.mainImage}>
      {/* <Image
        src="https://i.ibb.co/QdJqL3W/image-1.png"
        alt="Image of Next-Step Output"
        width="370px"
        height="170px"
        layout="fixed"
        id={classes.imageId}
      /> */}
      <h3>Next Step is a VS Code Extension that displays your website&apos;s Web Vitals directly into your console as you develop -- providing actionable data in real-time to guide your site-performance decisions.</h3>
      </div>
      {/* <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </h3> */}
      {/* <TopInsSetup /> */}
      </>
  );
};

export default TopTitleDescription;
