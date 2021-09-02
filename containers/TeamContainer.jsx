import classes from "../styles/TeamContainer.module.css";
import Person from "../components/Person";

const TeamContainer = () => {
  return (
    <>
      <h1 className={classes.teamIntro}>Meet The Engineers!</h1>
      <div className={classes.teamContainer}>
        <Person
          name="Gal Horovits"
          work="Software Engineer"
          linkedIn="LinkedIn"
          gitHub="GitHub"
          image="https://i.ibb.co/Kj8s4Kz/Screen-Shot-2021-09-02-at-5-01-30-PM.png"
        />
        <Person
          name="Lucas Taffo"
          work="Software Engineer"
          linkedIn="LinkedIn"
          gitHub="GitHub"
          image="https://i.ibb.co/Kj8s4Kz/Screen-Shot-2021-09-02-at-5-01-30-PM.png"
        />
        <Person
          name="Simon Yu"
          work="Software Engineer"
          linkedIn="LinkedIn"
          gitHub="GitHub"
          image="https://i.ibb.co/Kj8s4Kz/Screen-Shot-2021-09-02-at-5-01-30-PM.png"
        />
        <Person
          name="Kenny Shen"
          work="Software Engineer"
          linkedIn="LinkedIn"
          gitHub="GitHub"
          image="https://i.ibb.co/Kj8s4Kz/Screen-Shot-2021-09-02-at-5-01-30-PM.png"
        />
      </div>
    </>
  );
};

export default TeamContainer;
