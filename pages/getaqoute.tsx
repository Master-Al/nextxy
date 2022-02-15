import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Typist from "react-typist";
import * as React from "react";
import Image from "next/image";
import convo from "../public/convo.png";
class GetAQoute extends React.Component {
  render() {
    return (
      <div className={styles.qoutes}>
        <div className="width100full">
          <div className="convo">
            <Image
              src={convo}
              alt="conversation"
              className="messages"
              height={550}
              width={450}
            />
          </div>
          <div className="forms">
            <div className="tagline">Don’t hesitate to contact us!</div>
            <div className="subtagline">
              Let’s work together! Or email us at whats@rolyn.com
            </div>

            <form className="regularForm">
              <div className="form">
                <input type="text" name="text" required />
                <label className="label-name">
                  <span className="content-name">First name</span>
                </label>
              </div>
              <div className="form">
                <input type="text" name="text" required />
                <label className="label-name">
                  <span className="content-name">Last name</span>
                </label>
              </div>
              <div className="form">
                <input type="text" name="text" required />
                <label className="label-name">
                  <span className="content-name">Email address</span>
                </label>
              </div>
              <div className="form">
                <input type="text" name="text" required />
                <label className="label-name">
                  <span className="content-name">Phone Number</span>
                </label>
              </div>
              <div className="formArea">
                <textarea></textarea>
                <label className="label-name">
                  <span className="content-name">Description</span>
                </label>
              </div>
              <div className="formbtn">
                <button
                  type="submit"
                  className="l-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-xl shadow-sm text-base font-medium text-white bg-[#266599] hover:bg-indigo-700"
                >
                  Get A Qoute
                </button>
              </div>
              <div className="formSell">We don’t sell your email and spam</div>
            </form>

            <form className="regform">
              <div className="form">
                <input type="text" name="text" required />
                <label className="label-name">
                  <span className="content-name">First name</span>
                </label>
              </div>
              <div className="form">
                <input type="text" name="text" required />
                <label className="label-name">
                  <span className="content-name">Last name</span>
                </label>
              </div>
              <div className="form">
                <input type="text" name="text" required />
                <label className="label-name">
                  <span className="content-name">Email address</span>
                </label>
              </div>
              <div className="form">
                <input type="text" name="text" required />
                <label className="label-name">
                  <span className="content-name">Phone Number</span>
                </label>
              </div>
              <div className="formArea">
                <textarea></textarea>
                <label className="label-name">
                  <span className="content-name">Description</span>
                </label>
              </div>
              <div className="formbtn">
                <button
                  type="submit"
                  className="l-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2  rounded-xl shadow-sm text-base font-medium text-white bg-[#266599] hover:bg-indigo-700"
                >
                  Get A Qoute
                </button>
              </div>
              <div className="formSell">We don’t sell your email and spam</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default GetAQoute;
