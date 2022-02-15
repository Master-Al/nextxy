import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Typist from "react-typist";
import * as React from "react";
import Image from "next/image";
import introribbon from "../public/introribbon.png";
import check from "../public/check.png";
import popularribbon from "../public/popularribbon.png";
import gofood from "../public/gofood.png";
import camera from "../public/camera.png";
import othercustomer from "../public/othercustomer.png";
import gofoodsearch from "../public/gofoodsearch.png";
import rolyns from "../public/rolyns.png";
import clip from "../public/clip.png";
import othercustomersribbon from "../public/othercustomersribbon.png";
class Priceandservices extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.portfolio}>
          <div className="priceandservices">
            <div className="innerdiv">
              <div className="page1">
                <div className="introImage">
                  <Image
                    src={introribbon}
                    alt="intro"
                    className="introImage"
                    height={120}
                    width={120}
                  />
                </div>
                <div className="clip1">
                  <Image src={clip} alt="clip" height={79} width={79} />
                </div>
                <div className="mobilepricing1">
                  <div className="plantitle">
                    Base Project Single OS (iOS or Android) ...........Php 15k
                  </div>
                  <span className="pricedesc">
                    *All comes with free 1 hour consulation with dev + designer
                  </span>
                  <div className="baseprojDesc">Base Project includes:</div>
                  <div className="projectinclusions">
                    <ul>
                      <li>
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp; Authentication (Email Login/Signup/Forgot
                        Password)
                      </li>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Feed
                      </li>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Profile Page + Edit Profile
                      </li>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Contact Us (Email, socials)
                      </li>
                    </ul>
                  </div>
                  <div className="ChoosePlan">
                    <button className="choosplanbtn">Choos Plan</button>
                  </div>
                </div>
                <div className="gofood">
                  <Image src={gofood} alt="gofood" height={305} width={180} />
                </div>
                <div className="introImage">
                  <Image
                    src={popularribbon}
                    alt="popular"
                    className="introImage"
                    height={120}
                    width={120}
                  />
                </div>
                <div className="mobilepricing2">
                  <div className="plantitle">
                    Base Project Single OS (iOS or Android) ...........Php 15k
                  </div>
                  <span className="pricedesc">
                    *All comes with free 1 hour consulation with dev + designer
                  </span>
                  <div className="baseprojDesc">Base Project includes:</div>
                  <div className="projectinclusions">
                    <ul>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Authentication (Email Login/Signup/Forgot
                        Password)
                      </li>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Feed
                      </li>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Profile Page + Edit Profile
                      </li>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Contact Us (Email, socials)
                      </li>
                    </ul>
                  </div>
                  <div className="ChoosePlan">
                    <button className="choosplanbtn">Choos Plan</button>
                  </div>
                </div>
                <div className="camera">
                  <Image src={camera} alt="camera" height={305} width={180} />
                </div>
                <div className="clip2">
                  <Image src={clip} alt="clip" height={79} width={79} />
                </div>
              </div>

              <div className="page2">
                <div className="otherCustomers">
                  <Image
                    src={othercustomer}
                    alt="othercustomer"
                    className="introImage"
                    height={324}
                    width={355}
                  />
                </div>
                <div className="gofoodsearch">
                  <Image
                    src={gofoodsearch}
                    alt="gofoodsearch"
                    height={350}
                    width={210}
                  />
                </div>
                <div className="rolyns">
                  <Image
                    src={rolyns}
                    alt="rolyn"
                    className="introImage"
                    height={253}
                    width={296}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.portfoliomobile}>
          <div className="priceandservicesMobile">
            <div className="innerdiv">
              <div className="page1">
                <div className="introImage">
                  <Image
                    src={introribbon}
                    alt="intro"
                    className="introImage"
                    height={100}
                    width={100}
                  />
                </div>
                <div className="clip1">
                  <Image src={clip} alt="clip" height={50} width={50} />
                </div>
                <div className="mobilepricing1">
                  <div className="plantitle">
                    Base Project Single OS (iOS or Android) ........Php 15k
                  </div>
                  <span className="pricedesc">
                    *All comes with free 1 hour consulation with dev + designer
                  </span>
                  <div className="baseprojDesc">Base Project includes:</div>
                  <div className="projectinclusions">
                    <ul>
                      <li>
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp; Authentication (Email Login/Signup/Forgot
                        Password)
                      </li>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Feed
                      </li>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Profile Page + Edit Profile
                      </li>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Contact Us (Email, socials)
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div className="ChoosePlan">
                    <button className="choosplanbtn">Choos Plan</button>
                  </div>
                </div>
                <div className="gofood">
                  <Image src={gofood} alt="gofood" height={305} width={180} />
                </div>
                <div className="introImage">
                  <Image
                    src={popularribbon}
                    alt="popular"
                    className="introImage"
                    height={100}
                    width={100}
                  />
                </div>
                <div className="mobilepricing2">
                  <div className="plantitle">
                    Base Project Single OS (iOS or Android) ........Php 25k
                  </div>
                  <span className="pricedesc">
                    *All comes with free 1 hour consulation with dev + designer
                  </span>
                  <div className="baseprojDesc">Base Project includes:</div>
                  <div className="projectinclusions">
                    <ul>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Authentication (Email Login/Signup/Forgot
                        Password)
                      </li>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Feed
                      </li>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Profile Page + Edit Profile
                      </li>
                      <li>
                        {" "}
                        <Image
                          src={check}
                          alt="intro"
                          className="introImage"
                          height={15}
                          width={15}
                        />
                        &nbsp;Contact Us (Email, socials)
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div className="ChoosePlan">
                    <button className="choosplanbtn">Choos Plan</button>
                  </div>
                </div>
                <div className="camera">
                  <Image src={camera} alt="camera" height={305} width={180} />
                </div>
                <div className="clip2">
                  <Image src={clip} alt="clip" height={50} width={50} />
                </div>

                <div className="othercustomersribbonimage">
                  <Image
                    src={othercustomersribbon}
                    alt="other customers"
                    className="introImage"
                    height={100}
                    width={150}
                  />
                </div>
                <div className="mobilepricing3">
                  <div className="plantitle">
                    Base Project Single OS (iOS or Android) ........Php 25k
                  </div>
                  <span className="pricedesc">
                    *All comes with free 1 hour consulation with dev + designer
                  </span>
                  <div className="baseprojDesc">Base Project includes:</div>
                  <div className="projectinclusions">
                    <ul>
                      <li>
                        CHAT
                        ......................................................................
                        Php 5k
                      </li>
                      <li>
                        CHAT
                        ......................................................................
                        Php 5k
                      </li>
                      <li>
                        CHAT
                        ......................................................................
                        Php 5k
                      </li>
                      <li>
                        CHAT
                        ......................................................................
                        Php 5k
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="rolyns">
                  <Image
                    src={rolyns}
                    alt="rolyn"
                    className="introImage"
                    height={150}
                    width={190}
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default Priceandservices;
