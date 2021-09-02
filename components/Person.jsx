import TeamContainer from "../containers/TeamContainer";
import classes from "../styles/Person.module.css";
import Image from "next/image";


const Person = ({ name, work, linkedIn, gitHub, image }) => {
  return (
    <div className={classes.teamContainer}>
      <div className={classes.person}>
        <Image src={image} alt={name} width="460px" height="591px"></Image>
      </div>
      <div className={`${classes.personInfo} ${classes.topInfo}`}>{name}</div>
      <div className={classes.personInfo}>{work}</div>
      <div className={classes.personInfo}>
        {linkedIn} | {gitHub}
      </div>
    </div>
  );
};

export default Person;
