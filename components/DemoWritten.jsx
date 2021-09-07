import classes from '../styles/DemoWritten.module.css';
import Link from 'next/link';

const DemoWritten = () => {
  return (
    <div className={classes.demoWritten}>
      <h2>
        {' '}
        As the developer refreshes the page in their development environment —
        Next Step pulls downs your site&apos;s performance metrics and displays them
        directly in your IDE.
      </h2>

      <h2>Actionable data, code-adjacent.</h2>
      {/* in the environment in which it’s most useful */}
      <h2>
        {' '}
        Along with other ancillary metrics, Next Step provides Google’s Core Web
        Vitals:{' '}
        <a href='https://web.dev/first-contentful-paint/' target='_blank' rel='noreferrer' >
          First Contentful Paint (FCP) +
        </a>
        <a href='https://web.dev/fid/' target='_blank' rel='noreferrer'> First Input Delay (FID) +</a> {' '}
        <a href='https://web.dev/cls/' target='_blank' rel='noreferrer'>Cumulative Layout Shift (CLS)</a> —
        all identified by Google as ranking factors in their search algorithm.
      </h2>
    </div>
  );
};

export default DemoWritten;
