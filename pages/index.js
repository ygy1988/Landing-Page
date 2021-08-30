import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import TopContainer from "../containers/TopContainer";
import DemoContainer from "../containers/DemoContainer";
import SetupInsContainer from "../containers/SetupInsContainer";
import TeamContainer from "../containers/TeamContainer";
import Footer from "../components/Footer";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Next Step</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Karla:wght@500&display=swap');
        </style>
      </Head>
      <Header />
      <TopContainer />
      <DemoContainer />
      <SetupInsContainer />
      <TeamContainer />
      <Footer />
    </Fragment>
  );
}

/* 

HEADER COMPONENT

TOP CONTAINER
  TITLE & DESCRIPTION COMPONENT
    INSTRUCTION & SETUP LINK COMPONENT

DEMO CONTAINER
  DEMO WRITTEN COMPONENT
  SCREEN SHARE COMPONENT (?)

SETUP INSTRUCTIONS CONTAINER
  LEFT SIDE SCREENSHARE COMPONENT
  SETUP INSTRUCTION WRITTEN COMPONENT

TEAM CONTAINER
  PERSON COMPONENT
FOOTER COMPONENT
*/
