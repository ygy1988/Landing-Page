import classes from "../styles/DemoScreenshare.module.css";
import Image from "next/image";

const DemoScreenshare = () => {
  return (
    <div className={classes.demoScreenshare}>
      {/* <Image
        src="https://raw.githubusercontent.com/axilleasiv/vscode-javascript-repl-docs/master/vscode-javascript-repl.gif"
        alt="GIF of Next-Step Demo"
        width="600px"
        height="289
        px"
      /> */}
      <iframe
        src="https://streamable.com/e/qte3e9"
        width="1500px"
        height="700px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default DemoScreenshare;
// https://streamable.com/qte3e9
// "https://streamable.com/e/d5mpxx"
