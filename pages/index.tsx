import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Typist from "react-typist";
import * as React from "react";
import Image from "next/image";
import order from "../public/order.png";
import lgbt from "../public/lgbt.png";
import userInfo from "../public/popup.png";
import userInfoGray from "../public/popupGray.png";
import QueueAnim from "rc-queue-anim";
import Link from "next/link";

class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className="row desktop">
          <div className="col-half">
            <div className="col-40">
              <div className="tops">
                <Typist
                  className="MyTypist"
                  cursor={{
                    show: false,
                    blink: true,
                    element: "|",
                    hideWhenDone: true,
                    hideWhenDoneDelay: 100,
                  }}
                >
                  <span className="heyRolyn">Hey! What’s Rolyn?</span> <br />
                  <span className="question">
                    Do you have a Mobile Application Idea?
                  </span>
                  <br />
                  <span className="desc">
                    We can help you build it! Turn your imagination and ideas
                    into reality. Check us out and Message us!
                  </span>
                </Typist>
              </div>

              <br />
              <br />
              <Link href="#">
                <a className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-full shadow-sm text-base font-medium text-white bg-[#266599] hover:bg-indigo-700">
                  Get a Qoute
                </a>
              </Link>
            </div>
          </div>
          <div className="col-half">
            <div className="imageContainer">
              <div className="orderImage">
                <Image
                  src={order}
                  alt="order"
                  className="orderImage"
                  height={500}
                  width={300}
                />
              </div>
              <div className="greyuserInfo">
                <Image
                  src={userInfoGray}
                  alt="greyuserInfo"
                  className="greyuserInfos"
                  height={150}
                  width={270}
                />
              </div>
              <div className="userInfo">
                <Image
                  src={userInfo}
                  alt="userInfo"
                  className="userInfos"
                  height={150}
                  width={270}
                />
              </div>
              <div className="lgbt">
                <Image
                  src={lgbt}
                  alt="order"
                  className="lgbts"
                  height={550}
                  width={350}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mobile">
          <div className="mobilecol">
            <div className="col-50">
              <div className="tops">
                <Typist
                  className="MyTypist"
                  cursor={{
                    show: false,
                    blink: true,
                    element: "|",
                    hideWhenDone: true,
                    hideWhenDoneDelay: 100,
                  }}
                >
                  <span className="heyRolyn">Hey! What’s Rolyn?</span> <br />
                  <span className="question">
                    Do you have a Mobile Application Idea?
                  </span>
                  <br />
                  <span className="desc">
                    We can help you build it! Turn your imagination and ideas
                    into reality. Check us out and Message us!
                  </span>
                </Typist>
              </div>
              <br />
              <br />
              <Link href="#">
                <a className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-full shadow-sm text-base font-medium text-white bg-[#266599] hover:bg-indigo-700">
                  Get a Qoute
                </a>
              </Link>
            </div>
          </div>
          <div className="mobilecol">
            <div className="mobileimageContainer">
              <div className="mobileorderImage">
                <Image
                  src={order}
                  alt="order"
                  className="mobileorderImage"
                  height={300}
                  width={190}
                />
              </div>
              <div className="mobilegreyuserInfo">
                <Image
                  src={userInfoGray}
                  alt="greyuserInfo"
                  className="mobilegreyuserInfos"
                  height={100}
                  width={150}
                />
              </div>
              <div className="mobileuserInfo">
                <Image
                  src={userInfo}
                  alt="userInfo"
                  className="mobileuserInfos"
                  height={100}
                  width={150}
                />
              </div>
              <div className="mobilelgbt">
                <Image
                  src={lgbt}
                  alt="order"
                  className="mobilelgbts"
                  height={280}
                  width={170}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
