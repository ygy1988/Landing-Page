import TeamContainer from "../containers/TeamContainer";
import classes from "../styles/Person.module.css";
import Image from "next/image";
import Link from 'next/link'


const Person = ({ name, work, linkedIn, gitHub, image, width, height }) => {
  return (
    <div className={classes.teamContainer}>
      <div className={classes.person} >
        <Image src={image} alt={name} width={width} height={height} ></Image>
      </div>
      <div className={`${classes.personInfo} ${classes.topInfo}`}>{name}</div>
      <div className={classes.personInfo}>{work}</div>
      <div className={classes.personInfo}>
      <Link href={linkedIn}><a target="_blank">LinkedIn</a></Link>  | <Link href={gitHub}><a target="_blank">GitHub</a></Link>
      </div>
    </div>
  );
};

export default Person;
