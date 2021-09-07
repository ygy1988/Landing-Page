import SetupWritten from "../components/SetupWritten";
import classes from "../styles/SetupInsContainer.module.css";
import SetupScreenshare from "../components/SetupScreenshare";

const SetupInsContainer = () => {
  return (
    <>
    <div className={classes.title}>
      <h2>SETUP INSTRUCTIONS</h2>
    </div>
    <div className={classes.container}>
      <div className={classes.right}>
      <SetupWritten />
      </div>
      <div className={classes.left}>
        
        <SetupScreenshare />
      </div>
    </div>
    </>
  );
};

export default SetupInsContainer;
