import classes from "../styles/DemoContainer.module.css";
import DemoWritten from "../components/DemoWritten";
import DemoScreenshare from "../components/DemoScreenshare";

const DemoContainer = () => {
  return (
    <>
    <div className={classes.title}>
    <h2>DEMO</h2>
    </div>
    <div className={classes.demoContainer}>
      <DemoWritten />
      <DemoScreenshare />
    </div>
    </>
  );
};

export default DemoContainer;
