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
class Soon extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className="row">
          <div className="w-full">
            <div className="Soon">ROLYN SOON</div>
            <div className="bottom">
              <div className="SoonDesc ">
                Get A Qoute while we&rsquo;re Rolyn the website
              </div>
              <div className="SoonDesc ">
                <input
                  type="text"
                  className="ml-8 text-neutral-900 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-full text-base font-medium text-white bg-[#ffffff]"
                />
                <input
                  type="submit"
                  value="Get A Qoute"
                  className="ml-8 whitespace-wrap inline-flex items-center justify-center px-4 py-1  rounded-full shadow-sm text-base font-medium text-white bg-[#266599] hover:bg-indigo-700"
                />
              </div>
            </div>
          </div>
          <div className="desc row w-full">
            <div>
              <div className="container h-screen flex justify-center items-center">
                <div className="getQoute">
                  Get A Quote while We&rsquo;re Rolyn the Website
                </div>
                <div className="relative">
                  <input
                    type="text"
                    className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                    placeholder="Input your Email Address"
                  />
                  <div className="absolute top-2 right-2">
                    {" "}
                    <button className="h-10 w-20 text-white rounded-lg text-white bg-[#266599]">
                      Get a Qoute
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Soon;
