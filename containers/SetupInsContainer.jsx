import SetupWritten from "../components/SetupWritten";
import classes from "../styles/SetupInsContainer.module.css";
import SetupScreenshare from "../components/SetupScreenshare";

const SetupInsContainer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <SetupScreenshare />
        <SetupScreenshare />
      </div>
      <div className={classes.right}>
        <SetupWritten />
      </div>
    </div>
  );
};

export default SetupInsContainer;
