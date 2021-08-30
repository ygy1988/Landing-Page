import Link from "next/link";
import classes from "../styles/TopContainer.module.css";
import TopTitleDescription from "../components/TopTitleDescription";

const TopContainer = () => {
  return (
    <div className={classes.topContainer}>
      <TopTitleDescription />
    </div>
  );
};

export default TopContainer;
