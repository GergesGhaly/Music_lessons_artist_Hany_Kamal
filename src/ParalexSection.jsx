import React from "react";
import styles from "./styles.module.css";

import Plx from "react-plx";
import vid from "./images/FDownloader.net-2095304857521303-(540p).mp4";
import poster from "./images/Capture.PNG";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ParalexSection = () => {
  const alignCenter = { display: "flex", alignItems: "center" };

  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 0.8,
          endValue: 1,
          property: "scale",
          easing: [0.25, 0.1, 0.53, 3],
        },
      ],
    },
  ];

  return (
    <div className={styles.ParalexSection}>
      <Parallax pages={3}>
        <ParallaxLayer
          sticky={{ start: 0, end: 2 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} `}>
            <Plx parallaxData={parallaxData}>
              <div className="vid-wrap ">
                <video width="" height="" poster={poster} controls>
                  <source src={vid} type="" />
                </video>
              </div>
            </Plx>
          </div>
        </ParallaxLayer>

     
          <div className={`${styles.card} ${styles.parallax}`}>
        
              <div>
                <h2>Follow us on social media to know everything new </h2>
                <p>
                  يا الله، إلهي أنت. إليك أبكر. عطشت إليك نفسي، يشتاق إليك جسدي
                  في أرض ناشفة ويابسة بلا ماء، لكي أبصر قوتك ومجدك. كما قد رأيتك
                  في قدسك. لأن رحمتك أفضل من الحياة. شفتاي تسبحانك. هكذا أباركك
                  في حياتي. باسمك أرفع يدي. كما من شحم ودسم تشبع نفسي، وبشفتي
                  الابتهاج يسبحك فمي.
                </p>
              </div>
         
          </div>
     

      </Parallax>
    </div>
  );
};

export default ParalexSection;
