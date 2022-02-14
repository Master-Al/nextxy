import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Typist from "react-typist";
import * as React from "react";
import Image from "next/image";
import backgoundwhite from "../public/backgoundwhite.png";
import wood from "../public/wood.png";
import intro from "../public/intro.png";
import gofood from "../public/gofood.png";
class Priceandservices extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <table style={{ width: "90%", margin: "0 auto", height: "100vh" }}>
          <tr>
            <td
              style={{
                width: "50%",
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
            >
              <table style={{ width: "100%", margin: "0 auto" }}>
                <tr
                  style={{
                    width: "100%",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  <td
                    style={{
                      width: "100%",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    <div className="riddonIntroDiv">
                      {" "}
                      <Image src={intro} alt="wood" className="imageIntro" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      width: "20%",
                      backgroundColor: "pink",
                      borderRadius: "10px",
                    }}
                  >
                    dssadsad
                  </td>
                  <td
                    style={{
                      width: "20%",
                      backgroundColor: "pink",
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    <div className="gofood">
                      {" "}
                      fsfsfdffsdffsdfsdfsdfsdfsdfsdfsdfsd fsdfsdf sdfsdffsdf
                      sdfsfsfssdfsdd sdfdsfddd fsdfsdfdd
                      <Image src={gofood} alt="gofood" />
                    </div>
                  </td>
                </tr>
              </table>
              {/* <div className="riddonIntroDiv">
                {" "}
                <Image src={intro} alt="wood" className="imageIntro" />
              </div>{" "}
              <div className="gofood">
                {" "}
                <Image src={gofood} alt="gofood" className="imageIntro" />
              </div>{" "} */}
            </td>
            <td
              style={{
                width: "50%",
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
            >
              dsadsdad
            </td>
          </tr>
        </table>
        {/* <div className="bgrow">
        <Image
            src={wood}
            alt="wood"
            layout="fill"
            objectFit="contain"
            quality={100}
          /> 

          <div className="pricingbg">
             <Image src={intro} alt="wood" layout="responsive" /> 
          </div>
          0
        </div>*/}
      </div>
    );
  }
}
export default Priceandservices;
