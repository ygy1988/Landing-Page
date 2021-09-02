import classes from "../styles/SetupScreenShare.module.css";
import Image from "next/image";

const SetupScreenshare = () => {
  return (
    <>
      <p className={classes.title}>_app.js</p>
       <Image className={classes.image}
        src="https://i.ibb.co/ZGDJ122/Screen-Shot-2021-09-02-at-4-13-31-PM.png"
        alt="Image of Frontend for Next-Step"
        width="421px"
        height="88px"
      />
      <br />
      <p className={classes.title}>./pages/api/hello.js</p>
      <Image
        src="https://i.ibb.co/gZy4LbB/Screen-Shot-2021-09-02-at-4-03-53-PM.png"
        alt="Image of Backend Setup for Next-Step"
        width="693px"
        height="308px"
      />
    </>
  );
};
export default SetupScreenshare;

// https://i.ibb.co/ZGDJ122/Screen-Shot-2021-09-02-at-4-13-31-PM.png

{/* <Image
src="https://i.ibb.co/ZGDJ122/Screen-Shot-2021-09-02-at-4-13-31-PM.png"
alt="Image of Frontend for Next-Step"
width="421px"
height="88px"
/>
<Image
src="https://i.ibb.co/gZy4LbB/Screen-Shot-2021-09-02-at-4-03-53-PM.png"
alt="Image of Backend Setup for Next-Step"
width="693px"
height="308px"
/> */}