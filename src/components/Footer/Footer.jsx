import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <div style={{ background: "var( --darkBlue)" }}>
        <div className=" p-4 sm:p-12 h-5/6 sm:h-96 centerClass items-start flex-col md:flex-row justify-evenly gap-8 text-white ">
          <div className="flex flex-col items-start">
            <img
              src="/images/brainworld-logo.png"
              alt="logo"
              className="h-12 -ml-2"
            />
            <p>Brainworld, The Perfect Place to Socialize, Learn, and Grow</p>©
            2023 TheWorld Tech Lumanaries Ltd.
            <p className="pt-3">Download our apps</p>
            <div
              className="centerClass w-full flex-row mt-4"
              style={{ gap: "1rem" }}
            >
              <Button
                suffixIcon={<Icon icon="mdi:apple" />}
                buttonColor={"btn-orange"}
                style={{ width: "150px" }}
              >
                App Store
              </Button>
              <Button
                suffixIcon={<Icon icon="fa6-brands:google-play" />}
                buttonColor={"btn-purple-outline"}
                style={{ width: "150px" }}
              >
                Google Play
              </Button>
            </div>
          </div>
          {/* links will start here */}
          <div className="flex  flex-col md:flex-row justify-between w-4/5">
            <div>
              <h3 className="text-2xl">Office</h3>
              <p className="py-2">24 Muritala Mohammed Way, Benin, Edo State</p>
              <h3 className="text-2xl">Follow us</h3>
              <div className="flex gap-4 mt-3 text-white text-3xl">
                <Icon icon="ic:twotone-facebook" />
                <Icon icon="ri:instagram-fill" />
                <Icon icon="ri:twitter-fill" />
              </div>
            </div>
            <div className="footer-link-items flex flex-col">
              <h2 className="text-2xl">About Us</h2>
              <Link to="/">Blog</Link>
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
              <Link to="/Terms">Contact us</Link>
            </div>
            <div className="flex flex-col footer-link-items">
              <h2 className="text-2xl">Info</h2>
              <Link to="/">FAQ</Link>
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
              <Link to="/Terms">Terms of Service</Link>
            </div>
          </div>
        </div>
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "12px",
            paddingBottom: 10,
          }}
        >
          © 2023 TheWorld Tech Lumanaries Ltd.
        </p>
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "12px",
            paddingBottom: 10,
          }}
        >
          Developed By AC Hills Technologies
        </p>
        <p></p>
      </div>
    </>
  );
};

export default Footer;
