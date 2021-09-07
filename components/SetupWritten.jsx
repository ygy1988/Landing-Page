import classes from "../styles/SetupWritten.module.css";
import Link from 'next/link'

const SetupWritten = () => {
  return <div className={classes.container}>

  
  <br />
  <p>STEP 1: Download the VS Code extension from the<Link href="https://marketplace.visualstudio.com/items?itemName=NextStep.nextstep"><a target="_blank"> Extension Marketplace</a></Link>.</p>
  <br />
  <p>STEP 2: Install the npm package by running <span>npm install next-step-metrics.</span></p>
  <br />
  <p>STEP 3: Go to your _app.js file, and copy/paste the following commands:</p>
  <br />
  <p> --&gt; At the top of the file:</p>
  <p><span className={classes.centerText}>import &#123; reportWebVitals &#125; from &quot;next-step-metrics&quot;</span></p>
  <p> --&gt; At the bottom of the file:</p>
  <p><span className={classes.centerText}>export  &#123; reportWebVitals &#125;</span></p>
  <br />
  <p>STEP 4: Create a file named <span>next-step.js</span> inside your pages/api folder and copy this: </p>
  <br />
  <span className={classes.centerText}>
  <p>import nc from &quot;next-connect&quot;;</p>
  <p>import &#123; metrics &#125; from &quot;next-step-metrics&quot;;</p>
  <br />
  <p>const handler = nc().post((req, res) =&gt; &#123;</p>
  <p>&emsp;return metrics(req, res);</p>
  <p>&#125;);</p>
  <br />
  <p>export default handler;</p>
  </span>
  <br />
  <p>STEP 5: Start up your server and click on the NextStep button in the VS Code Status Bar.</p>
  <br />
  <p>STEP 6: Optimize  your site and enjoy 😎</p>
  </div>;
};

export default SetupWritten;

// Setup Instructions:
// Step 1: Download the VS Code extension from the Extension Marketplace(link)
// Step 2: Install the NPM package by running the following command from within your root folder directory: npm install next-step-up-your-game
// Step 3: As shown to the right, cd into the _app.js file within your root folder, and copy/paste the following commands:
// At the top of _app.js paste in:
// import reportWebVitals from "next-step-npm"

// At the bottom of _app.js, paste in:
// export reportWebVitals

// Step 4: As shown to the right; cd into pages folder, then into the api folder, and then the main file within api (this is likely ‘hello.js’ if using create-next-app).

// Within this file, copy the following block of code (make sure the import statement is at the top of file):
// NEED TO PUT CODE BLOCKS HERE

// Step 5: Start up your server — and open up the OUTPUT section of your console to see the metrics being displayed.
// Step 6: Optimize  your site and enjoy 😎
// import { importMetrics } from "next-step-npm";

// const handler = nc().post((req, res) => {
//   return importMetrics(req, res);
// });

// export default handler;
// Step 5: Start up your server — and see the metrics being displayed within the OUTPUT section of your console.
// Step 6: Optimize and enjoy.

// Install the npm package by running <span>npm install next-step-up-your-game</span> from within your root folder directory:
// Step 3: As shown to the right, cd into the _app.js file within your root folder, and copy/paste the following commands:

// 

// <p className={classes.p}>Step 4: In your pages folder, then into the api folder, and then the main file within api (this is likely ‘hello.js’ if using create-next-app).</p>
//   <br />
//   <p className={classes.p}>Within this file, copy the following block of code (make sure the import statement is at the top of file):</p>
//   <p className={classes.p}>NEED TO PUT CODE BLOCKS HERE</p>
//   <br />

// 
