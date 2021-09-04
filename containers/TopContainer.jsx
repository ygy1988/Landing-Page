import Link from "next/link";
import classes from "../styles/TopContainer.module.css";
import TopTitleDescription from "../components/TopTitleDescription";
import TopInsSetup from '../components/TopInsSetup'

const TopContainer = () => {
  return (
    <div className={classes.topContainer}>
     
      <TopTitleDescription />
     
   
      {/* <TopInsSetup /> */}
    
    </div>
  );
};

export default TopContainer;
