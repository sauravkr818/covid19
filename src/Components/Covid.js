import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import "../index.css";

export default function Covid(props) {
    const [color, setColor] = useState({
        bgColor: true,
    });

    const [alert, setAlert] = useState({
        close: "",
    });

    const darkModes = (childData) => {
        setColor({
            bgColor: childData,
        });
    };

    const closeAlert = () => {
        setAlert({
            close: "none",
        });
    };

    //variant
    const baseContainer = {
        hidden: {
            x: "100vw",
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 120,
                duration: 5,
            },
        },
        exit: {
            x: "-100vw",
            transition: {
                ease: "easeInOut",
            },
        },
    };

    //variant
    const alertDiv = {
        hidden: {
            y: "-100vw",
        },
        visible: {
            y: 0,
            transition: {
                delay: 2,
                type: "spring",
                stiffness: 50,
                duration: 10,
            },
        },
        last: {
            y: "-100vw",
            transition: {
                delay: 2,
                type: "spring",
                stiffness: 50,
                duration: 10,
            },
        },
    };

    return (
        <>
            {" "}
            <motion.div
                variants={alertDiv}
                initial="hidden"
                animate="visible"
                class={
                    "alert alert-dismissible fade show text-center fixed-top shadow border-0 w-75 mx-auto mt-5 " +
                    (color.bgColor ? "alert-primary" : "alert-warning")
                }
                style={{ display: alert.close ? "none" : "" }}
                role="alert"
            >
                <div className="d-flex justify-content-center">
                    <h6>Hey there!</h6>
                    <motion.span
                        animate={{
                            scale: [1, 1, 1, 1],
                            rotateZ: [0, 20, 0, 20],
                            transition: {
                                delay: 3.5,
                                type: "spring",
                                stiffness: 120,
                                duration: 1,
                                yoyo: Infinity,
                            },
                        }}
                        class="material-icons ms-2"
                    >
                        waving_hand
                    </motion.span>
                </div>
                <button
                    type="button"
                    class="btn-close"
                    onClick={closeAlert}
                ></button>
            </motion.div>
            <Navbar whichMode={darkModes} />
            <motion.div
                className={
                    "container-fluid overflow-hidden " +
                    (color.bgColor ? "bg-white" : "bg-dak")
                }
                variants={baseContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div class="py-5"></div>

                <Carousel
                    textColor={color.bgColor ? "text-success" : "text-white"}
                    backgroundColor={color.bgColor}
                />
                <motion.div class={"row row-cols-1 row-cols-md-3 g-5 p-5"}>
                    <motion.div
                        drag
                        dragConstraints={{
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                        }}
                        dragElastic={0.8}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }}
                        className={"border-0 "}
                        transition={{ duration: 0.3 }}
                    >
                        <div class="col">
                            <div class="card h-100 border-0 shadow  text-center alert-primary border-0 text-center">
                                <div class="card-body">
                                    <h3 class="card-title">COUNTRY</h3>
                                    <h4 class="card-text">INDIA</h4>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        drag
                        dragConstraints={{
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                        }}
                        dragElastic={0.8}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }}
                        className={"border-0 "}
                        transition={{ duration: 0.3 }}
                    >
                        <div class="col">
                            <div class="card h-100 border-0 shadow  text-center alert-warning">
                                <div class="card-body">
                                    <h3 class="card-title">TOTAL CONFIRMED</h3>
                                    <h4 class="card-text">
                                        {props.getdata1.confirmed}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        drag
                        dragConstraints={{
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                        }}
                        dragElastic={0.8}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }}
                        className={"border-0 "}
                        transition={{ duration: 0.3 }}
                    >
                        <div class="col">
                            <div class="card h-100 border-0 shadow  text-center alert-success w-100">
                                <div class="card-body">
                                    <h3 class="card-title">TOTAL RECOVERED</h3>
                                    <h4 class="card-text">
                                        {" "}
                                        {props.getdata1.recovered}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        drag
                        dragConstraints={{
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                        }}
                        dragElastic={0.8}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }}
                        className={"border-0 "}
                        transition={{ duration: 0.3 }}
                    >
                        <div class="col">
                            <div class="card h-100 border-0 shadow  text-center alert-danger">
                                <div class="card-body">
                                    <h3 class="card-title">TOTAL ACTIVE</h3>
                                    <h4 class="card-text">
                                        {props.getdata1.active}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        drag
                        dragConstraints={{
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                        }}
                        dragElastic={0.8}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }}
                        className={"border-0 "}
                        transition={{ duration: 0.3 }}
                    >
                        <div class="col">
                            <div class="card h-100 border-0 shadow  text-center alert-dark">
                                <div class="card-body">
                                    <h3 class="card-title">TOTAL DECEASED</h3>
                                    <h4 class="card-text">
                                        {props.getdata1.deaths}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        drag
                        dragConstraints={{
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                        }}
                        dragElastic={0.8}
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.9 }}
                        className={"border-0 "}
                        transition={{ duration: 0.3 }}
                    >
                        <div class="col">
                            <div class="card h-100 w-100 border-0 shadow alert-secondary text-center">
                                <div class="card-body">
                                    <h3 class="card-title">LAST UPDATED</h3>
                                    <h4 class="card-text">
                                        {props.getdata1.lastupdatedtime}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <div class="py-5"></div>
                <div class="py-5"></div>
            </motion.div>
        </>
    );
}
