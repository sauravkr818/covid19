import React from "react";
import ReactDOM from "react-dom";
import { useViewportScroll, motion, useTransform } from "framer-motion";

import "./styles.css";

function App() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, (value) => value / -0.9);
  const y2 = useTransform(scrollY, (value) => value / 20);

  return (
    <>
      <motion.div className="box" style={{ y: y1, x: -50 }} scrollY={y1} />
      <motion.div
        className="box"
        style={{ y: y2, x: 100, background: "salmon" }}
        scrollY={y2}
      />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
