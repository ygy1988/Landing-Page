import TeamContainer from "../containers/TeamContainer";
import classes from "../styles/Person.module.css";

const Person = ({ name, work, linkedIn, gitHub }) => {
  return (
    <div className={classes.teamContainer}>
      <div className={classes.person}>Person</div>
      <div className={`${classes.personInfo} ${classes.topInfo}`}>{name}</div>
      <div className={classes.personInfo}>{work}</div>
      <div className={classes.personInfo}>
        {linkedIn} | {gitHub}
      </div>
    </div>
  );
};

export default Person;
