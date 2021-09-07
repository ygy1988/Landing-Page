import React from "react";
import classes from "../styles/TopInsSetup.module.css";
import {Link as Scroll} from "react-scroll";

const TopInsSetup = () => {
  return (
    <div className={classes.instructionSetup}>
      {/* <h2>Download our VS Code Extension and install our NPM Package to get started!</h2> */}
     
      <p><Scroll to="SetupInsContainer_title__3wozo" spy={true} smooth={true}>Click here for Setup Instructions</Scroll></p>
    </div>
  );
};

export default TopInsSetup;
