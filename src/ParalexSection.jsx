import React from "react";
import styles from "./styles.module.css";

import Plx from "react-plx";
import vid from "./images/vid.mp4";
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
                <video width="" height="" autoPlay muted loop>
                  <source src={vid} type="" />
                </video>
              </div>
            </Plx>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax}`}>
            <Plx parallaxData={parallaxData}>
              <div>
                <h2>يا الله إلهي</h2>
                <p>
                  يا الله، إلهي أنت. إليك أبكر. عطشت إليك نفسي، يشتاق إليك جسدي
                  في أرض ناشفة ويابسة بلا ماء، لكي أبصر قوتك ومجدك. كما قد رأيتك
                  في قدسك. لأن رحمتك أفضل من الحياة. شفتاي تسبحانك. هكذا أباركك
                  في حياتي. باسمك أرفع يدي. كما من شحم ودسم تشبع نفسي، وبشفتي
                  الابتهاج يسبحك فمي.
                </p>
              </div>
            </Plx>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} `}>
            <Plx parallaxData={parallaxData}>
              <div>
                <h2>الرب راعي</h2>
                <p>
                  الرب راعي فلا يعوزني شيء في مراع خضر يربضني . إلى مياه الراحة
                  يوردني يرد نفسي. يهديني إلى سبل البر من أجل اسمه أيضا إذا سرت
                  في وادي ظل الموت لا أخاف شرا، لأنك أنت معي.
                </p>
              </div>
            </Plx>
          </div>
        </ParallaxLayer>
      </Parallax>

    
    </div>
  );
};

export default ParalexSection;
