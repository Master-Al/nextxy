import "../styles/globals.css";
import "../styles/components.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Image from "next/image";
import facebook from "../public/facebook.png";
import linkedin from "../public/linkedin.png";
import instagram from "../public/instagram.png";
import telegram from "../public/telegram.png";
import viber from "../public/viber.png";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className="w-screen min-h-screen bg-[url('../public/background.png')]
    bg-no-repeat bg-cover bg-[#151515]"
    >
      <div className="social-buttons">
        <a href="#">
          <Image
            src={facebook}
            alt="facebook"
            // className="orderImage"
            height={27}
            width={27}
          />
        </a>
        <a href="#">
          <Image
            src={linkedin}
            alt="linkedin"
            // className="orderImage"
            height={27}
            width={27}
          />
        </a>
        <a href="#">
          <Image
            src={instagram}
            alt="instagram"
            // className="orderImage"
            height={27}
            width={27}
          />
        </a>
        <a href="#">
          <Image
            src={telegram}
            alt="telegram"
            // className="orderImage"
            height={27}
            width={27}
          />
        </a>
        <a href="#">
          <Image
            src={viber}
            alt="viber"
            // className="orderImage"
            height={27}
            width={27}
          />
        </a>
      </div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
export default MyApp;
