import classes from '../styles/SetupWritten.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const importCode = `import nc from "next-connect";
import { metrics } from "next-step-metrics";
const handler = nc().post((req, res) => {
 return metrics(req, res);
});
export default handler;`;

const importRwb = `import { reportWebVitals } from \'next-step-metrics\';`

const exportRwb = `export { reportWebVitals };`

const SetupWritten = () => {
  const [code, setCode] = useState(importCode);
  return (
    <div className={classes.container}>
      <br />
      <p>
        STEP 1: Download the VS Code extension from the
        <Link href='https://marketplace.visualstudio.com/items?itemName=NextStep.nextstep'>
          <a target='_blank'> Extension Marketplace</a>
        </Link>
        .
      </p>
      <br />
      <p>
        STEP 2: Install the npm package by running{' '}
        <span>npm install next-step-metrics.</span>
      </p>
      <br />
      <p>
        STEP 3: Go to your _app.js file, and copy/paste the following commands:
      </p>
      <br />
      <p> --&gt; At the top of the file:</p>
        <SyntaxHighlighter language='javascript'>{importRwb}</SyntaxHighlighter>
      <p> --&gt; At the bottom of the file:</p>
        <SyntaxHighlighter language='javascript'>{exportRwb}</SyntaxHighlighter>
        <br />
      <p>
        STEP 4: Create a file named <span>next-step.js</span> inside your
        pages/api folder and copy this:{' '}
      </p>
        <SyntaxHighlighter language='javascript'>{importCode}</SyntaxHighlighter>
      <p>
      <br />
        STEP 5: Start up your server and click on the NextStep button in the VS
        Code Status Bar.
      </p>
      <br />
      <p>STEP 6: Optimize your site and enjoy 😎</p>
    </div>
  );
};

export default SetupWritten;


// <Editor
// value={code}
// onValueChange={(code) => setCode(code)}
// highlight={e => highlight(e, languages.js)}
// padding={15}
// style={{
//   fontFamily: '"Fira code", "Fira Mono", monospace',
//   fontSize: 20,
// }}
// />