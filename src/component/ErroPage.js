import React, { Fragment } from "react";
import "../App.css";

const ErroPage = () => {
  return (
    <Fragment>
      <div class="main_wrapper">
        <div class="main">
          <div class="antenna">
            <div class="antenna_shadow"></div>
            <div class="a1"></div>
            <div class="a1d"></div>
            <div class="a2"></div>
            <div class="a2d"></div>
            <div class="a_base"></div>
          </div>
          <div class="tv">
            <div class="cruve">
              <svg
                class="curve_svg"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 189.929 189.929"
                xmlSpace="preserve"
              >
                <path
                  d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                ></path>
              </svg>
            </div>
            <div class="display_div">
              <div class="screen_out">
                <div class="screen_out1">
                  <div class="screen">
                    <span class="notfound_text">Page Is Not Found </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="lines">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
            </div>
            <div class="buttons_div">
              <div class="b1">
                <div></div>
              </div>
              <div class="b2"></div>
              <div class="speakers">
                <div class="g1">
                  <div class="g11"></div>
                  <div class="g12"></div>
                  <div class="g13"></div>
                </div>
                <div class="g"></div>
                <div class="g"></div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="base1"></div>
            <div class="base2"></div>
            <div class="base3"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ErroPage;
