import classes from "../styles/TopTitleDescription.module.css";
import TopInsSetup from "./TopInsSetup";

const TopTitleDescription = () => {
  return (
    <div className={classes.titleContainer}>
      <h1>What is Lorem Ipsum?</h1>
      <h1>
        Saying insightful things about how special our extension and npm package
        are
      </h1>
      <h3>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </h3>
      <TopInsSetup />
    </div>
  );
};

export default TopTitleDescription;
