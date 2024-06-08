import React, { useEffect } from "react";

import { UserContext } from "../App";
import { useContext } from "react";
import "./Home.css";

import WhatsAppWidget from "./WhatsAppWidget";
import { useState } from "react";

function Home() {
  //we have tack data from home component handleSearchChange fat awrrow function

  const { data } = useContext(UserContext);

  useEffect(() => {
    const options = {
      contactform: true,
      whatsapp: "+918788365413",
      call_to_action: "Have any problem just message us",
      button_color: "#8a2be2",
      position: "right",
      order: "contactform,whatsapp",
      pre_filled_message: "",
    };
    const proto = "https:";
    const host = "getbutton.io";
    const url = proto + "//static." + host;
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url + "/widget-send-button/js/init.js";
    s.onload = () => {
      window.WhWidgetSendButton.init(host, proto, options);
    };
    const x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  }, []);

  return (
    <>
      {/*  Heare we have All data prient on home screen */}

      <div className="container main_home_con">
        {data.map((value) => {
          return (
            <>
              <div className="HomeCart mt-3 mx-2">
                <div class="card main_cart_home" style={{ width: "200px" }}>
                  <img
                    class="card-img-top"
                    style={{ padding: "5px" }}
                    src={value.image}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">
                      <b>{value.Name}</b>
                    </h5>
                    <p
                      style={{ lineHeight: "0.3", color: "royalblue" }}
                      className="text-justify"
                    >
                      <b>{value.Language}</b>
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Home;
