import React from "react";

export default function Carousel(props) {
    return (
        <>
            <div
                id="carouselExampleDark"
                class="carousel carousel-dark slide w-75 mx-auto"
                data-bs-ride="carousel"
            >
                <div class="carousel-indicators pt-5 mt-5">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className={"active " + (props.backgroundColor ? "bg-primary" : "bg-white")}
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        className={" " + (props.backgroundColor ? "bg-primary" : "bg-white")}
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        className={" " + (props.backgroundColor ? "bg-primary" : "bg-white")}
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner pb-5">
                    <div class="carousel-item active" data-bs-interval="4000">
                        <div class="d-flex justify-content-center">
                            <h5 className={props.textColor}>Wear a Mask</h5>
                            <span
                                class="material-icons ps-2"
                                style={{ fontSize: "28px", color: "#20c997"}}
                            >
                                masks
                            </span>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <div class="d-flex justify-content-center">
                            <h5 className="text-warning">Wash your Hands</h5>
                            <span
                                class="material-icons ps-2"
                                style={{ fontSize: "28px", color:"orange" }}
                            >
                                sanitizer
                            </span>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="4000">
                        <div class="d-flex justify-content-center">
                            <h5 className="text-danger">Social Distance</h5>
                            <span
                                class="material-icons ps-2"
                                style={{ fontSize: "28px", color:"#dc3545"}}
                            >
                                6_ft_apart
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
