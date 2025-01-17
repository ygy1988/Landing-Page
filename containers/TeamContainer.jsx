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
          linkedIn="https://www.linkedin.com/in/gal-h-b81b1018a"
          gitHub="https://github.com/horovitsg"
          image="https://i.ibb.co/W6VpYPx/IMG-9182.jpg"
          width="640px"
          height="678px"
        />
        <Person
          name="Lucas Taffo"
          work="Software Engineer"
          linkedIn="https://www.linkedin.com/in/lucastaffo"
          gitHub="https://github.com/lucastaffo"
          image="https://i.ibb.co/Kj8s4Kz/Screen-Shot-2021-09-02-at-5-01-30-PM.png"
          width="460px"
          height="591px"
        />
        <Person
          name="Simon Yu"
          work="Software Engineer"
          linkedIn="https://www.linkedin.com/in/simon-yu-398442101"
          gitHub="https://github.com/syu449"
          image="https://i.ibb.co/kq4fTVB/simone.jpg"
          width="435px"
          height="396px"
        />
        <Person
          name="Kenny Shen"
          work="Software Engineer"
          linkedIn="https://www.linkedin.com/in/kenny-shen-ny"
          gitHub="https://github.com/shenkenny"
          image="https://i.ibb.co/QfDVVhy/Screen-Shot-2021-09-07-at-3-17-40-PM.png"
          width="346px"
          height="309px"
        />
      </div>
    </>
  );
};

export default TeamContainer;
