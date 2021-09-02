import classes from "../styles/DemoScreenshare.module.css";
import Image from "next/image";

const DemoScreenshare = () => {
  return (
    <div className={classes.demoScreenshare}>
      <Image
        src="https://raw.githubusercontent.com/axilleasiv/vscode-javascript-repl-docs/master/vscode-javascript-repl.gif"
        alt="GIF of Next-Step Demo"
        width="600px"
        height="289px"
      />
    </div>
  );
};

export default DemoScreenshare;
