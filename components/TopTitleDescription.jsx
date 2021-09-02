import classes from "../styles/TopTitleDescription.module.css";
import TopInsSetup from "./TopInsSetup";
import Image from "next/image";

const TopTitleDescription = () => {
  return (
    <div className={classes.titleContainer}>
      <div className={classes.containerLeft}>
      <h1 className={classes.heading}>Next Step</h1>
        
      <h1 className={classes.underHeading}>
       Actionable metrics to guide your site-improvement decisions
      </h1>
      </div>
      <div className={classes.mainImage}>
      <Image
        src="https://i.ibb.co/L9250tV/next-step-output.png"
        alt="GIF of Next-Step Demo"
        width="754px"
        height="210px"
      />
      </div>
      {/* <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </h3> */}
      {/* <TopInsSetup /> */}
   </div>
  );
};

export default TopTitleDescription;
