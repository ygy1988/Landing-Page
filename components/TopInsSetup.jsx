import React from "react";
import classes from "../styles/TopInsSetup.module.css";

const TopInsSetup = () => {
  return (
    <div className={classes.instructionSetup}>
      <h2>Simply download our VS Code Extension and Install the NPM Package to get started</h2>
      <button className={classes.codeBtn}> 
      Download VS Code Extension
      </button>
      <button className={classes.npmBtn}>NPM Install Next-Step</button>
      <p>Setup Instructions</p>
    </div>
  );
};

export default TopInsSetup;
