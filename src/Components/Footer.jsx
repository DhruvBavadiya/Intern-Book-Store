import React from "react";
// import siteLogo from "./../img/site-logo.svg";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        alt="logo"
        src="https://www.drupal.org/files/styles/grid-4-2x/public/logo-vert-250.png?itok=auyB2fmL"
        style={{ height: 100, width: 200, marginBottom: 20 }}
      ></img>
      <p style={{ fontFamily: "'Roboto', sans-serif", color: "#666666" }}>
        ©2015 Tatvasoft.com. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;