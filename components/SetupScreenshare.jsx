import classes from "../styles/SetupScreenShare.module.css";
import Image from "next/image";

const SetupScreenshare = () => {
  return (
    <>
      <p className={classes.title}>_app.js</p>
      <iframe src="https://streamable.com/e/d5mpxx" width="639px" height="400px" frameBorder="0"></iframe>
      <br />
      <p className={classes.title}>./pages/api/hello.js</p>
      <iframe src="https://streamable.com/e/xx1zqu" width="639px" height="400px" frameBorder="0"></iframe>
      
    </>
  );
};
export default SetupScreenshare;

// https://i.ibb.co/ZGDJ122/Screen-Shot-2021-09-02-at-4-13-31-PM.png
