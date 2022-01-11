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
import Soon from "./soon";
class Portfolio extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className="row">
          <div className="w-full">
            <Soon />
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
