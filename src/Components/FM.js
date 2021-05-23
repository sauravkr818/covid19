import React from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";

import "./style.css";

export default function FM() {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, (value) => value / -1);
    const y2 = useTransform(scrollY, (value) => value / -10);
    const y3 = useTransform(scrollY, (value) => value / -15);

    return (
        <>
            <div
                class="card mb-3 alert-success"
                style={{ y: y1, x: 0 }}
                scrollY={y1}
            >
                <div class="row no-gutters">
                    <motion.div
                        class="col-md-5 d-flex justify-content-center"
                        style={{ y: y1, x: 0 }}
                        scrollY={y1}
                    >
                        <img
                            src="https://svgshare.com/i/V2S.svg"
                            class="card-img img-fluid w-75 mx-auto"
                            alt="forest svg"
                        />
                    </motion.div>
                    <div class="col-md-7 my-auto">
                        <div class="card-body">
                            <div class="jumbotron jumbotron-fluid alert-success">
                                <motion.div
                                    class="container"
                                    style={{ y: y2, x: 0, background: "" }}
                                    scrollY={y2}
                                >
                                    <motion.h1 class="display-4 text-dark mb-2" style={{ y: y2, x: 0, background: "" }}
                                    scrollY={y2}>
                                        Life is short, and the world is wide.
                                    </motion.h1>
                                    <motion.p class="lead" style={{ y: y3, x: 0}}>
                                        Travel opens your heart, broadens your
                                        mind, and fills your life with stories
                                        to tell.
                                    </motion.p>
                                </motion.div>
                            </div>
                            <div id="themes"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
