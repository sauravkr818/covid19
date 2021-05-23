import React, { useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import "../index.css";

export default function DailyCase(props) {
    const [color, setColor] = useState({
        bgColor: true,
    });

    const darkModes = (childData) => {
        setColor({
            bgColor: childData,
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
    
    return (
        <>
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
                <div className="py-5"></div>
                <div className={"card border-0 " + (color.bgColor ? "bg-white" : "bg-dak")}>
                    <div class="d-flex align-items-start">
                        <div className="col-md-3 w-25 mx-auto mt-5 mb-5 ps-2">
                            <div className="w-75">
                                <div
                                    class="nav flex-column nav-pills me-3"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                >
                                    <button
                                        class={"active btn mb-2 " +(color.bgColor ? "btn-outline-success" : "btn-outline-warning")}
                                        id="v-pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-home"
                                        aria-selected="true"
                                    >
                                        {
                                            props.getdata3[
                                                props.getdata3.length - 1
                                            ].date
                                        }
                                    </button>
                                    <button
                                        class={"btn mb-2 " +(color.bgColor ? "btn-outline-success" : "btn-outline-warning")}
                                        id="v-pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-profile"
                                        aria-selected="false"
                                    >
                                        {
                                            props.getdata3[
                                                props.getdata3.length - 2
                                            ].date
                                        }
                                    </button>
                                    <button
                                        class={"btn mb-2 " +(color.bgColor ? "btn-outline-success" : "btn-outline-warning")}
                                        id="v-pills-messages-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-messages"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-messages"
                                        aria-selected="false"
                                    >
                                        {
                                            props.getdata3[
                                                props.getdata3.length - 3
                                            ].date
                                        }
                                    </button>
                                    <button
                                        class={"btn mb-2 " +(color.bgColor ? "btn-outline-success" : "btn-outline-warning")}
                                        id="v-pills-settings-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#v-pills-settings"
                                        type="button"
                                        role="tab"
                                        aria-controls="v-pills-settings"
                                        aria-selected="false"
                                    >
                                        {
                                            props.getdata3[
                                                props.getdata3.length - 4
                                            ].date
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 pe-4">
                            <div class="tab-content" id="v-pills-tabContent">
                                <div
                                    class="tab-pane fade show active"
                                    id="v-pills-home"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-home-tab"
                                >
                                    <div class="row row-cols-1 row-cols-md-2 g-4">
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-primary"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Daily Confirmed
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 1
                                                            ].dailyconfirmed
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-success"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Daily Recovered
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 1
                                                            ].dailyrecovered
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-dark"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Daily Deceased
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 1
                                                            ].dailydeceased
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-danger"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Total Confirmed
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 1
                                                            ].totalconfirmed
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-success"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Total Recovered
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 1
                                                            ].totalrecovered
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-secondary"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Total Deceased
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 1
                                                            ].totaldeceased
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="tab-pane fade"
                                    id="v-pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-profile-tab"
                                >
                                    <div class="row row-cols-1 row-cols-md-2 g-4">
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-primary"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Daily Confirmed
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 2
                                                            ].dailyconfirmed
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-success"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Daily Recovered
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 2
                                                            ].dailyrecovered
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-dark"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Daily Deceased
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 2
                                                            ].dailydeceased
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-danger"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Total Confirmed
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 2
                                                            ].totalconfirmed
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-success"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Total Recovered
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 2
                                                            ].totalrecovered
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-secondary"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Total Deceased
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 2
                                                            ].totaldeceased
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="tab-pane fade"
                                    id="v-pills-messages"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-messages-tab"
                                >
                                    <div class="row row-cols-1 row-cols-md-2 g-4">
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-primary"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Daily Confirmed
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 3
                                                            ].dailyconfirmed
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-success"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Daily Recovered
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 3
                                                            ].dailyrecovered
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-dark"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Daily Deceased
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 3
                                                            ].dailydeceased
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-danger"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Total Confirmed
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 3
                                                            ].totalconfirmed
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-success"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Total Recovered
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 3
                                                            ].totalrecovered
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-secondary"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Total Deceased
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 3
                                                            ].totaldeceased
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="tab-pane fade"
                                    id="v-pills-settings"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-settings-tab"
                                >
                                    <div class="row row-cols-1 row-cols-md-2 g-4">
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-primary"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Daily Confirmed
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 4
                                                            ].dailyconfirmed
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-success"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Daily Recovered
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 4
                                                            ].dailyrecovered
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-dark"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Daily Deceased
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 4
                                                            ].dailydeceased
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-danger"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Total Confirmed
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 4
                                                            ].totalconfirmed
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-success"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Total Recovered
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 4
                                                            ].totalrecovered
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                        <div class="col mt-5">
                                            <motion.div
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={"border-0 "}
                                                transition={{ duration: 0.3 }}
                                                class="card shadow border-0 alert-secondary"
                                            >
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">
                                                        Total Deceased
                                                    </h5>
                                                    <h4 class="card-text">
                                                        {
                                                            props.getdata3[
                                                                props.getdata3
                                                                    .length - 4
                                                            ].totaldeceased
                                                        }
                                                    </h4>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-5"></div>
                    <div className="py-4"></div>
                </div>
            </motion.div>
        </>
    );
}
