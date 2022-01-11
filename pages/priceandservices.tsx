import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Typist from "react-typist";
import * as React from "react";
import Image from "next/image";
import wood from "../public/wood.png";
class Priceandservices extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className="row">
          <div className="h-64">
            <div
              className="bg-[url('../public/wood.png')]
    bg-no-repeat bg-cover"
            >
              TST
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Priceandservices;
