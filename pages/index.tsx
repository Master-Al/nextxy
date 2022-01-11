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
class Home extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className="row">
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
              <a
                href="#"
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-full shadow-sm text-base font-medium text-white bg-[#266599] hover:bg-indigo-700"
              >
                Get a Qoute
              </a>
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
                  alt="order"
                  className="orderImage"
                  height={150}
                  width={270}
                />
              </div>
              <div className="userInfo">
                <Image
                  src={userInfo}
                  alt="order"
                  className="orderImage"
                  height={150}
                  width={270}
                />
              </div>
              <div className="lgbt">
                <Image
                  src={lgbt}
                  alt="order"
                  className="orderImage"
                  height={550}
                  width={350}
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
