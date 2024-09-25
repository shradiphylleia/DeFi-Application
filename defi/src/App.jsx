import React from "react";
import Button from "./Button";
import Container from "./Container";
import Header from "./Header";
import Paragraph from "./Paragraph";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="company">
          <h1>yield</h1>
        </div>
        <div className="navLinks">
          <Button className="nav" link="about" name="About" />
          <Button className="nav" link="features" name="Features" />
          <Button className="nav" link="products" name="Products" />
          <Button className="nav" link="guide" name="Guide" />
        </div>
        <Button className="signup" link="signup" name="Sign Up" />
      </div>

      {/* big container */}
      <>
        <Container className="landingcntr"></Container>
        <Header
          className="landingH"
          title="Yield farming crypto platfrom"
        ></Header>
        <Header
          className="landingBrief"
          title="Stake anytime-anywhere!"
        ></Header>
        a
      </>

      <div className="dashboardcntr">
        <Container className="dCntr"></Container>
      </div>

      <>
        <Header
          className="secondH"
          title="Explore the new era of financial services"
        ></Header>
        <Paragraph
          className="secondBrief"
          data="Yield is an innovative crypto platform which issues token in cryptocurrency. The Platform provides a unique opportunity to earn rewards in the form of crypto."
        ></Paragraph>
      </>

      <Header className="features" title="Key Features"></Header>

      <div className="featureCntr1">
        <Container className="fCntr1"></Container>
        <Container className="fCntr2"></Container>
      </div>

      <div className="featureCntr2">
        <Container className="fCntr1"></Container>
        <Header className="fCntr2Heading" title="2X"></Header>
        <Paragraph className="f2Brief" data="growth"></Paragraph>
      </div>

      <Header
        className="Header3"
        title={
          <span>
            Ensuring seamless and secure{" "}
            <span style={{ color: " #f59cf3" }}>transactions</span>
          </span>
        }
      ></Header>

      <div className="cntr3">
        <Container className="fCntr3"></Container>
        <Container className="fCntr4"></Container>
      </div>

      <div className="cntr4">
        <Container className="fCntr5"></Container>
        <Header className="prompt" title="Join the waitlist"></Header>
        <Button className="arrow" link="signup" name="Join"></Button>
      </div>

      <div className="connect">
        <Header className="connectTitle" title="Connect with us"></Header>
        <div className="connectDiv">
          <Container className="guideCntr">
            <a href="guide">Get started</a>
          </Container>
          <Container className="productCntr">
            <a href="product">Product catalogue</a>
          </Container>
          <Container className="aboutCntr">
            <a href="about">About us</a>
          </Container>
        </div>
      </div>

      <Header className="headFooter" title="Yield:Stake now"></Header>
      <hr className="hr" />
      <Header className="copyright" title="Made with love in Bharat"></Header>
    </>
  );
}

export default App;
