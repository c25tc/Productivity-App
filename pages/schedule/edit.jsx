import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileHeader from "../../components/MobileHeader";
import { motion } from "framer-motion";
import Schedule from "../../components/Schedule";
import ScheduleEdit from "../../components/ScheduleEdit";
import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [blockOffTimes, setblockOffTimes] = useState([
    [0, 120],
    [720, 60],
    [1200, 90],
  ]);
  let blocks = [];
  let blockRefs = [];
  let topRefs = [];
  let bottomRefs = [];
  let bottomIsActive = false;

  for (let i = 0; i < blockOffTimes.length; i++) {
    blockRefs[i] = useRef(null);
    topRefs[i] = useRef(null);
    bottomRefs[i] = useRef(null);
    let top = 261 + blockOffTimes[i][0];
    blocks.push(
      <div
        className={`w-9/12 bg-[#D9D9D9] opacity-80 absolute left-[13%] rounded-xl drop-shadow-lg cursor-grab`}
        style={{ height: blockOffTimes[i][1] + "px", top: top }}
        ref={blockRefs[i]}
      >
        <div
          className="relative bg-pink top-0 w-4/6 h-4 left-1/2 -translate-x-1/2 rounded-b-xl cursor-row-resize"
          ref={topRefs[i]}
        ></div>
        <div
          className="absolute bottom-0 bg-pink w-4/6 h-4 left-1/2 -translate-x-1/2 rounded-t-xl cursor-row-resize"
          ref={bottomRefs[i]}
        ></div>
      </div>
    );
  }

  function renderBlocks() {
    for (let i = 0; i < blockOffTimes.length; i++) {
      let top = 261 + blockOffTimes[i][0];
      blocks.push(
        <div
          className={`w-9/12 bg-[#D9D9D9] opacity-80 absolute left-[13%] rounded-xl drop-shadow-lg`}
          style={{ height: blockOffTimes[i][1] + "px", top: top }}
          ref={blockRefs[i]}
        >
          <div
            className="relative bg-pink top-0 w-4/6 h-4 left-1/2 -translate-x-1/2 rounded-b-xl"
            ref={topRefs[i]}
          ></div>
          <div
            className="absolute bottom-0 bg-pink w-4/6 h-4 left-1/2 -translate-x-1/2 rounded-t-xl"
            ref={bottomRefs[i]}
          ></div>
        </div>
      );
      forceUpdate();
    }

    blocks = [];
  }

  useEffect(() => {
    function mousedown(e, i, resizer) {
        console.log(resizer);
      let offset = e.pageY - blockOffTimes[i][0] - 261;
      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", mouseup);

      function mousemove(e) {
        const currentBlocks = blockOffTimes;
        if (resizer == "block") {
          currentBlocks[i][0] = Math.round((e.pageY - 261 - offset) / 15) * 15;
        } else if (resizer == "top") {
          if (currentBlocks[i][1] >= 30) {
            currentBlocks[i][1] -=
              Math.round((e.pageY - 261 - offset) / 15) * 15 -
              currentBlocks[i][0];
          } else {
            currentBlocks[i][1] = 30;
          }
          currentBlocks[i][0] = Math.round((e.pageY - 261 - offset) / 15) * 15;
        } else if (resizer == "bottom") {
          currentBlocks[i][1] =
            Math.round((e.pageY - 261) / 15) * 15 -
            currentBlocks[i][0];
        }
        setblockOffTimes(currentBlocks);
        renderBlocks();
      }
      function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
        bottomIsActive = false;
      }
    }
    function touchstart(e, i, resizer) {
      e.preventDefault();
      console.log("hello")
      let startY = e.touches[0].pageY;
      let moveY = 0;
      let tick = 0;
      let offset = e.touches[0].pageY - blockOffTimes[i][0] - 261;
      let oldCurrentBlocks = blockOffTimes;
      window.addEventListener("touchmove", touchmove);
      window.addEventListener("touchend", touchend);

      function touchmove(e) {
        moveY = (startY - e.touches[0].pageY) / 2;
        tick += 1;
        e.preventDefault();
        const currentBlocks = blockOffTimes;
        if (resizer == "top") {
          if (currentBlocks[i][1] >= 30) {
            currentBlocks[i][1] -=
              Math.round((e.touches[0].pageY - 261 - offset) / 15) * 15 -
              currentBlocks[i][0];
          } else {
            currentBlocks[i][1] = 30;
          }
          currentBlocks[i][0] =
            Math.round((e.touches[0].pageY - 261 - offset) / 15) * 15;
        } else if (resizer == "bottom") {
            if (currentBlocks[i][1] >= 30) {
              currentBlocks[i][1] = 
                Math.round((e.touches[0].pageY - 261) / 15) * 15 - (currentBlocks[i][0])
            } else {
              currentBlocks[i][1] = 30;
            }
        } else if (resizer == "block") {
          currentBlocks[i][0] =
            Math.round((e.touches[0].pageY - 261 - offset) / 15) * 15;
        } 
        setblockOffTimes(currentBlocks);
        renderBlocks();
        // if (tick > 1) {
        //    startY = e.touches[0].pageY; 
        //    tick = 0;
        // }
        startY = e.touches[0].pageY; 
        
      }
      function touchend() {
        window.removeEventListener("touchmove", touchmove);
        window.removeEventListener("touchend", touchend);
        bottomIsActive = false;
      }
    }
    for (let i = 0; i < blockOffTimes.length; i++) {
      const block = blockRefs[i].current;
      const top = topRefs[i].current;
      const bottom = bottomRefs[i].current;
      renderBlocks();
      bottom.addEventListener("mousedown", (e) => {
        mousedown(e, i, "bottom");
        bottomIsActive = true;
      });
      bottom.addEventListener("touchstart", (e) => {
        touchstart(e, i, "bottom");
        bottomIsActive = true;
      });
      top.addEventListener("mousedown", (e) => {
        mousedown(e, i, "top");
      });
      top.addEventListener("touchstart", (e) => {
        touchstart(e, i, "top");
      });
      block.addEventListener("mousedown", (e) => {
        if (!bottomIsActive) mousedown(e, i, "block");
      });
      block.addEventListener("touchstart", (e) => {
        if (!bottomIsActive) touchstart(e, i, "block");
      });
    }
    // return () => {
    //   for (let i = 0; i < blockOffTimes.length; i++) {
    //     blockRefs[i].current.removeEventListener("mousedown", (e) => {
    //       mousedown(e, i);
    //     });
    //   }
    // };
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div>
        <Header
          name={"schedule"}
          left={"blue"}
          middle={"pink"}
          right={"green"}
          leftLink={"tasks"}
          rightLink={"projects"}
        />
        <MobileHeader
          name={"schedule"}
          color="pink"
          topLeftButton={"✓"}
          leftButtonLink="/schedule"
        />
        <ScheduleEdit />
        {blocks}
      </motion.div>
    </div>
  );
}
