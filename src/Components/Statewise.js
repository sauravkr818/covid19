import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "../index.css";

export default function Statewise() {
    
    useEffect(() => {
        document.title = "Statewise | Covid19"
    },[]);

    const [dark, setDark] = useState(false);

    const darkModes = (childData) => {
        setDark(childData);
    };

    //useState
    const [data1, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState({
        text : ''
    });

    const injectText = (e) =>{
        if(e>0){
        setData3({
            text : '',
        });
    }
        console.log(e);
    }

    //fetch api
    const getCovidData = async () => {
        let actualData;
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            actualData = await res.json();
            setData(actualData.statewise);
            setData2(actualData.statewise);
        } catch (e) {
            console.log(e);
        }
    };

    // useEffect
    useEffect(() => {
        var mode = localStorage.getItem('dark');
        //setDark(mode);
        getCovidData();
    }, []);

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

    const getStateName = (childrenData) => {
        const arr2 = [...data2];
        setData(arr2[childrenData]);
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
    };

    return (
        <>
            {" "}
            {/* <motion.div
                variants={alertDiv}
                initial="hidden"
                animate="visible"
                class={
                    "alert alert-dismissible fade show text-center fixed-top shadow border-0 w-75 mx-auto mt-5 " +
                    (color.bgColor ? "alert-primary" : "alert-warning")
                }
                style ={{display: alert.close ? "none" : ""}}
                role="alert"
                
            >
                <div className="d-flex justify-content-center">
                    <span
                        class="material-icons me-2"
                        style={{ fontSize: "24px" }}
                    >
                        info
                    </span>
                    <h6>Search your state in Search Box</h6>
                </div>
                <button
                    type="button"
                    class="btn-close"
                    onClick={closeAlert}
                ></button>
            </motion.div> */}
            <Navbar whichMode={darkModes} arrayIndex={getStateName} infoText={injectText} />
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
                                    <p>{data3.text}</p>
                                    <h3 class="card-title">COUNTRY/STATE</h3>
                                    <h4 class="card-text">{data1.state}</h4>
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
                                    <h4 class="card-text">{data1.confirmed}</h4>
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
                                        {data1.recovered}
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
                                    <h4 class="card-text">{data1.active}</h4>
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
                                    <h4 class="card-text">{data1.deaths}</h4>
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
                                        {data1.lastupdatedtime}
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
