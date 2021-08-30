import classes from "../styles/TeamContainer.module.css";
import Person from "../components/Person";

const TeamContainer = () => {
  return (
    <>
      <h1 className={classes.teamIntro}>Meet the Team!</h1>
      <div className={classes.teamContainer}>
        <Person
          name="Gal Horovits"
          work="Software Engineer"
          linkedIn="LinkedIn"
          gitHub="GitHub"
        />
        <Person
          name="Lucas Taffo"
          work="Software Engineer"
          linkedIn="LinkedIn"
          gitHub="GitHub"
        />
        <Person
          name="Simon Yu"
          work="Software Engineer"
          linkedIn="LinkedIn"
          gitHub="GitHub"
        />
        <Person
          name="Kenny Shen"
          work="Software Engineer"
          linkedIn="LinkedIn"
          gitHub="GitHub"
        />
      </div>
    </>
  );
};

export default TeamContainer;
