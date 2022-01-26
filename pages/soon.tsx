import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Typist from "react-typist";
import * as React from "react";
import Image from "next/image";
import Device1 from "../public/Device1.png";
import Device2 from "../public/Device2.png";
import Device3 from "../public/Device3.png";
import userInfoGray from "../public/popupGray.png";
import QueueAnim from "rc-queue-anim";
class Soon extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className="Device2">
          <Image
            src={Device2}
            alt="Device2"
            className="Device2logo"
            height={450}
            width={400}
          />
        </div>
        <div className="Device1">
          <Image
            src={Device1}
            alt="Device1"
            className="Device1logo"
            height={450}
            width={400}
          />
        </div>
        <div className="Device3">
          <Image
            src={Device3}
            alt="Device3"
            className="Device3logo"
            height={400}
            width={350}
          />
        </div>
        <div className="row">
          <div className="w-full">
            <div className="Soon">ROLYN SOON</div>

            <div className="bottom">
              <div className="SoonDesc ">
                Get A Qoute while we&rsquo;re Rolyn the website
              </div>
              <div className="Device1"></div>
              <div className="SoonDesc ">
                <input
                  type="text"
                  className="ml-8 text-neutral-900 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-full text-base font-medium text-black bg-[#ffffff]"
                />
                <input
                  type="submit"
                  value="Get A Qoute"
                  className="ml-8 whitespace-wrap inline-flex items-center justify-center px-4 py-1  rounded-full shadow-sm text-base font-medium text-white bg-[#266599] hover:bg-indigo-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Soon;
