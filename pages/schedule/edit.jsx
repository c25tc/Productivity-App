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

  for (let i = 0; i < blockOffTimes.length; i++) {
    blockRefs[i] = useRef(null);
    topRefs[i] = useRef(null);
    bottomRefs[i] = useRef(null);
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
      forceUpdate()
    }

    blocks = [];
  }

  useEffect(() => {
    function mousedown(e, i) {
      let offset = e.pageY - blockOffTimes[i][0] - 261;
      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", mouseup);

      function mousemove(e) {
        const currentBlocks = blockOffTimes;
        currentBlocks[i][0] = Math.round((e.pageY - 261 - offset)/15) * 15;
        setblockOffTimes(currentBlocks);
        renderBlocks();
      }
      function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
      }
    }
    function touchstart(e, i) {
        e.preventDefault();
      let offset = e.touches[0].pageY - blockOffTimes[i][0] - 261;
      window.addEventListener("touchmove", touchmove);
      window.addEventListener("touchend", touchend);

      function touchmove(e) {
        e.preventDefault()
        const currentBlocks = blockOffTimes;
        currentBlocks[i][0] = Math.round((e.touches[0].pageY - 261 - offset)/15) * 15;
        setblockOffTimes(currentBlocks);
        renderBlocks();
      }
      function touchend() {
        window.removeEventListener("touchmove", touchmove);
        window.removeEventListener("touchend", touchend);
      }
    }
    for (let i = 0; i < blockOffTimes.length; i++) {
      const block = blockRefs[i].current;
      const top = topRefs[i].current;
      const bottom = bottomRefs[i].current;
      renderBlocks();
      console.log(block);
      block.addEventListener("mousedown", (e) => {
        mousedown(e, i);
      });
      block.addEventListener("touchstart", (e) => {
        touchstart(e, i);
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