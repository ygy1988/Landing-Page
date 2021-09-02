import classes from "../styles/DemoWritten.module.css";

const DemoWritten = () => {
  return (
    <div className={classes.demoWritten}>
    
    <h2> As the developer refreshes the page in their development environment — NextStep pulls downs the site's performance metrics and displays them directly in the IDE.</h2>

<h2>Actionable data, code-adjacent.</h2>
{/* in the environment in which it’s most useful */}
<h2> Along with other ancillary metrics, Next Step provides Google’s Core Web Vitals: First Contentful Paint (FCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) — metrics identified by Google as ranking factors in their search algorithm.</h2>
    </div>
  );
};

export default DemoWritten;
