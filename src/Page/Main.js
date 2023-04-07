import React from "react";
import Header from "Components/Header";
import "Style/Main.css";

const Intro = () => {
  return (
    <>
      <Header />
      <section>
        {/* <img src={process.env.PUBLIC_URL + "/img/main/Mainicon.PNG"} alt="1" /> */}
        <h2>메인</h2>
      </section>
      {/* <img
        src={process.env.PUBLIC_URL + "/img/intro/backgroundimage.jpg"}
        alt="1"
      /> */}
    </>
  );
};

export default Intro;
