import React, {useState,useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Chart from "./Charts/Chart";
import "../index.css";

export default function Covid(props) {
    const [color, setColor] = useState({
        bgColor: true,
    });

    useEffect(() => {
        document.title = "Home | Covid19"
    },[]);


    const [dark, setDark] = useState(false);

    useEffect(() => {
        let savedTheme = localStorage.getItem("dark2");
        if(savedTheme === null){
            savedTheme = false;
        }
        if(savedTheme === "false"){
            console.log("Came");
            savedTheme = false;
        }
        setDark(savedTheme);
    },[dark])



    const [alert, setAlert] = useState({
        close: "",
    });

    const darkModes = (childData) => {
        setDark(childData);
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
                    (!dark ? "alert-primary" : "alert-warning")
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
                    (!dark ? "bg-white" : "bg-dak")
                }
                variants={baseContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div class="py-5"></div>

                <Carousel
                    textColor={!dark ? "text-success" : "text-white"}
                    backgroundColor={color.bgColor}
                />
                <motion.div class={"row"}>
                    <div class="col-lg-6">
                        <div class="row row-cols-1 row-cols-md-2 g-5 p-5">
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
                                    <div class="card h-100 border-0 shadow  text-center alert-primary border-0 text-center" style={{minHeight:"100%"}}>
                                        <div class="card-body">
                                            <h5 class="card-title">COUNTRY</h5>
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
                                    <div class="card h-100 border-0 shadow  text-center alert-warning" style={{minHeight:"100%"}}>
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                TOTAL CONFIRMED
                                            </h5>
                                            <h5 class="card-text">
                                                {props.getdata1.confirmed}
                                            </h5>
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
                                    <div class="card h-100 border-0 shadow  text-center alert-success w-100" style={{minHeight:"100%"}}>
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                TOTAL RECOVERED
                                            </h5>
                                            <h5 class="card-text">
                                                {" "}
                                                {props.getdata1.recovered}
                                            </h5>
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
                                    <div class="card h-100 border-0 shadow  text-center alert-danger" style={{minHeight:"100%"}}>
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                TOTAL ACTIVE
                                            </h5>
                                            <h5 class="card-text">
                                                {props.getdata1.active}
                                            </h5>
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
                                    <div class="card h-100 border-0 shadow  text-center alert-dark" style={{minHeight:"100%"}}>
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                TOTAL DECEASED
                                            </h5>
                                            <h5 class="card-text">
                                                {props.getdata1.deaths}
                                            </h5>
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
                                    <div class="card h-100 w-100 border-0 shadow alert-secondary text-center" style={{minHeight:"100%"}}>
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                LAST UPDATED
                                            </h5>
                                            <h5 class="card-text">
                                                {props.getdata1.lastupdatedtime}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 my-auto p-sm-0"
                        style={{ minHeight: "100%" }}
                    >
                        <Chart data={props.graph}/>
                    </div>
                </motion.div>
                <div class="py-5"></div>
            </motion.div>
        </>
    );
}
