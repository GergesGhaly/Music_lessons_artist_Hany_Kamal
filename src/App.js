import "./App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Atropos from "atropos/react";
import img4 from "./images/428655918_122110066796219529_8065268670703962416_n.jpg";
import img5 from "./images/acoustic-guitar-146262_1280.webp";
import img10 from "./images/guitar-47463_1280.png";
import img6 from "./images/man-5994283_1280.webp";
import img7 from "./images/facebook-371641_1280.png";
import img8 from "./images/instagram-2433265_1280.png";
import sound from "./images/Facebook_4.mp3";
import vid from "./images/FDownloader.net-2095304857521303-(540p).mp4";
import poster from "./images/Capture.PNG";
import logo from "./images/428485540_122108112062219529_7526832429280503665_n.png";
import header from "./images/425290509_122108139056219529_1187996236164005691_n.jpg";
import price from "./images/425386423_122108139038219529_9097415563852443380_n.jpg";

import { useEffect, useRef, useState } from "react";
import Plx from "react-plx";

function App() {

  const parallaxh1 = [
    {
      start: "self",
      end: ".my-God-love",
      properties: [
        {
          startValue: 0,
          endValue: 100,
          property: "translateX",
          easing: "easeInCubic",
        },
      ],
    },
  ];
  const parallaxh2 = [
    {
      start: "self",
      end: ".my-God-love",
      properties: [
        {
          startValue: 0,
          endValue: -100,
          property: "translateX",
          easing: "easeInCubic",
        },
      ],
    },
  ];

  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [scal, sescal] = useState(1);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 2], [1, 2]);

  useEffect(() => {
    setTimeout(() => {
      sety(300);
      setx(0);
      sescal(0.3);
    }, 3000);

    window.scrollTo(0, 0);
  });

  const [playing, setPlaying] = useState(false);

  let audio = new Audio(sound);

  const Toggle = () => {
    setPlaying(!playing);

    audio.play();
  };
  const pauseAudio = () => {
    audio.pause();
  };

  return (
    <div className="App">
      <div className="header ">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61556585890389"
              target="blank"
            >
              {" "}
              ABOUT
            </a>
          </li>
        </ul>
      </div>

      <div className="home ">
        <motion.div
          className="main"
          style={{
            scale,
          }}
        >
          <div className="main buttns-wraper">
            <motion.div
              initial={[{ y: 100 }, { opacity: 0 }]}
              animate={[{ y: 0 }, { opacity: 1 }]}
              transition={{ ease: "easeOut", duration: 0.9 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1.01 }}
              className="imge rounded"
            >
              {/* <ReactAudioPlayer src={sound} /> */}
              <a className="play-btn-mp3" href="#" onClick={Toggle}></a>
            </motion.div>
            <motion.div
              initial={[{ y: 100 }, { opacity: 0 }]}
              animate={[{ y: 0 }, { opacity: 1 }]}
              transition={{ ease: "easeOut", duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1.01 }}
              className="imge rounded"
            >
              <img src={header} alt="" />
            </motion.div>
          </div>
          <div className="content">
            <motion.div
              initial={[{ y: -100 }, { opacity: 0 }]}
              animate={[{ y: 0 }, { opacity: 1 }]}
              transition={{ ease: "easeOut", duration: 1.5, delay: 1.5 }}
              className="content-text"
            >
              <h1>Guitar With Hany</h1>
              {/* <p>مراثي إرميا 3: 25</p> */}
            </motion.div>
            <motion.div
              initial={[{ y: 100 }, { opacity: 0 }]}
              animate={[{ y: 0 }, { opacity: 1 }]}
              transition={{ ease: "easeOut", duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1.01 }}
              className="imge guitar"
            >
              <img src={img5} alt="" />
            </motion.div>
            <motion.div
              initial={[{ y: -100 }, { opacity: 0 }]}
              animate={[{ y: 0 }, { opacity: 1 }]}
              transition={{ ease: "easeOut", duration: 1.5, delay: 1.2 }}
              className="content-text"
            >
              <h2>
                My name is Hany, and I have 11 years of experience in playing
                music as a professional guitarist.
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="txt-show">
        <div
          className="container"
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <Plx parallaxData={parallaxh1}>
            <h2>Guitar With Hany</h2>
          </Plx>
        </div>

        <div
          className="container"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "end",
          }}
        >
          <Plx parallaxData={parallaxh2}>
            <h2> جيتار مع هانى </h2>
          </Plx>
        </div>
      </div>

      <div className="my-God-love container">
        <div className="mess ">
          <div className="txt">
            <h2>
              شايف الجيتار صعب ومش مفهوم!! هتعزف 🎼🔥🎸 شايف الجيتار كله نظريات
              ومعادلات وأساليب عزف كتير وانواع كتير وحاجات لخبطه!! برضه هتعزف
              🔥❤️ بقدملك خبره ١١ سنه في مجال الموسيقي وهبذل كل جهدي اني اخليك
              تعزف وتلحن كمان 🥰🎼 وكمان اول حصتين جيتار هيكونوا مجانا 😍 🤝
              هنكون بناخد الدروس اونلاين للي مش متوفر عنده مكان 🎧💻
            </h2>
          </div>
          <motion.div
            className="mess-image-wrapper"
            initial={[{ y: 50 }]}
            animate={[{ y: 0 }]}
            transition={{
              repeat: Infinity,
              duration: 5,
              repeatType: "reverse",
            }}
          >
            <img src={img10} alt="" />
          </motion.div>
        </div>
        <div className="mess">
          <motion.div
            className="mess-image-wrapper"
            initial={[{ y: 50 }]}
            animate={[{ y: 0 }]}
            transition={{
              repeat: Infinity,
              duration: 5,
              repeatType: "reverse",
            }}
          >
            <img src={img4} alt="" />
          </motion.div>
          <div className="txt">
            <h2>
              My name is Hany Kamal, and I have been passionate about music
              since my childhood. I have learned music from lots of sources, and
              I have been playing guitar for more than 11 years. I can play
              different music styles, like Eastern, Spanish, jazz, rock,
              classics and blues, etc. And it's going to be a pleasure for me to
              answer any questions. I really love all of you. ♥️😍✨️
            </h2>
          </div>
        </div>
      </div>

      <div className="mess">
        <div className="txt">
          <h2>
            هنبسط كل المواضيع وهنتعلم مدارس مختلفه من الموسيقي شرقي وغربي جاز
            وروك وبلوز وكلاسيك.🎼♥️✨️ هنتعلم فينجر ستايل وتكنيكس مختلفه.🎹🎼
            هناخد فيديوهات تكون بتراجع علي الي اخدناه انا هكون بقدم فيها الي
            اخذناه في الدرس ببساطه.🎤💻📷 هناخد pdf برضه يكون بيشرح كل حاجه
            اخدناها.💽 طبعا مع متابعه مستمره وسنده للآخر في رحله التعليم.📞
          </h2>
        </div>
        <motion.div
          className="mess-image-wrapper"
          initial={[{ y: 50 }]}
          animate={[{ y: 0 }]}
          transition={{
            repeat: Infinity,
            duration: 5,
            repeatType: "reverse",
          }}
        >
          <img src={price} alt="" />
        </motion.div>
      </div>

      <div className="container Atropos-warper">
        <h2 className="offer-in-english">
          Contact now and ask about our offers
        </h2>

        <Atropos shadow={false} rotateYMax={5} rotateXMax={12}>
          <div className="mess full">
            <h2>
              {" "}
              حاسس بيك يالي عاوز تتعلم جيتار 😁😍😇 عملتلك اول درسين ببلاش🥰
              🤯😎🥳🥳🥳🥳 ولكل الاعمار 😍🥳🤩
            </h2>
            <motion.div
              initial={[{ scale: 1 }]}
              animate={[{ scale: 0.8 }]}
              transition={{
                repeat: Infinity,
                duration: 0.7,
                repeatType: "reverse",
              }}
              className="contact-us-whats"
            >
              <a href="whatsapp://send?phone=+21227008220" target="blank">
                <img src={img6} alt="" />
              </a>
            </motion.div>
          </div>
        </Atropos>
      </div>

      <div className=" contact-us">
        <div className="vid-wrap ">
          <video
            onClick={pauseAudio}
            width=""
            height=""
            poster={poster}
            controls
          >
            <source src={vid} type="" />
          </video>
        </div>
        <div className="contact-us-icons">
          <h2 className="offer-in-english">
            Follow us on social media to know everything new
          </h2>
          <div className="contact-us-icons-img">
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=61556585890389"
                target="blank"
              >
                <img src={img7} alt="" />
              </a>
            </div>

            <div>
              <a
                target="blank"
                href="https://www.instagram.com/hany.k_adly?fbclid=IwAR1Zt0v-qLW6aYSmA9hWbE_53gmXdvAffI4WYth-2TEmmWq1Y5Urd4eEMaI"
              >
                <img src={img8} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="foter">
        <a href="https://www.facebook.com/gerges.ghaly.35" target="blank">
          <p>Gerges Ghaly </p>
        </a>
        <span>&#9829;</span>
      </div>
    </div>
  );
}

export default App;
