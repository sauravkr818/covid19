import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../index.css";

export default function Navbar(props) {
    const [state, setState] = useState({
        bgColor: true,
        btnText: true,
    });

    const [search, setSearch] = useState({
        state: "",
    });

    const [info, setInfo] = useState(1);

    const searchState = (e) => {
        setSearch({
            state: e.target.value,
        });
    };

    const searchFunction = (e) => {
        e.preventDefault();
        let i,
            flag = 0;
        for (i = 0; i < data.length; i++) {
            if (search.state === data[i].state) {
                flag = 1;
                break;
            }
        }
        if (flag === 1) {
            props.arrayIndex(i);
        } else {
            props.arrayIndex(0);
            setInfo(1);
            props.infoText(info);
        }
    };

    const darkMode = () => {
        setState({
            bgColor: !state.bgColor,
            btnText: !state.btnText,
        });
        props.whichMode(!state.bgColor);
    };

    const [data, setData] = useState([]);

    const location = window.location.pathname;

    //fetch api
    const getCovidData = async () => {
        try {
            const res = await fetch("https://api.covid19india.org/data.json");
            const actualData = await res.json();
            setData(actualData.statewise);
            props.allInfo(actualData.statewise[0]);
            props.getDaily(actualData.statewise[0]);
        } catch (e) {
            console.log(e);
        }
    };

    // useEffect
    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <nav
                class={
                    "navbar navbar-expand-lg sticky-top shadow " +
                    (state.bgColor
                        ? "navbar-light bg-white"
                        : "navbar-dark bg-dak")
                }
            >
                <div class="container-fluid">
                    <motion.div>
                        <Link to="/" className="navbar-brand ps-5 p-2">
                            {/* <span
                                class="material-icons ps-2"
                                style={{ fontSize: "30px" }}
                            >
                                coronavirus
                            </span> */}
                            <svg
                                id="Capa_1"
                                enable-background="new 0 0 512.636 512.636"
                                height="80"
                                viewBox="0 0 512.636 512.636"
                                width="100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <g>
                                        <g>
                                            <g id="XMLID_126_">
                                                <g>
                                                    <path
                                                        d="m488.808 265.497c9.69 0 16.36 7.82 14.84 17.38l-4.61 28.95c-1.36 8.55-8.75 14.65-17.14 14.65-.91 0-1.83-.07-2.76-.22-9.4-1.49-15.83-10.28-14.46-19.67l-28.21-.89c-3.15-.1-5.97 1.92-6.9 4.94-4.65 15.11-11.21 29.38-19.41 42.53-1.73 2.78-1.32 6.38 1.01 8.68l17.27 17.1c2.89-3.67 7.19-5.59 11.53-5.59 3.11 0 6.24.98 8.9 3.02 7.56 0 11.83 8.67 7.24 14.66l-18.26 23.81c-2.88 3.77-7.24 5.74-11.64 5.74-3.12 0-6.25-.98-8.91-3.02-6.38-4.89-7.62-13.99-2.83-20.4l-21.62-12.6c-2.75-1.61-6.23-1.14-8.49 1.11-19.66 19.72-43.82 34.96-70.8 44.05-3.06 1.04-5.03 4.01-4.75 7.23l2.34 27.45c9.23-1.86 18.26 3.96 20.37 13.13 2.17 9.46-4.24 18.95-13.73 20.99l-28.98 6.23c-1.22.26-2.4.39-3.55.39-7.88 0-13.84-5.9-13.84-14.43-2-9.32 3.87-18.48 13.13-20.59l-9.37-26.66c-1.05-2.97-3.95-4.88-7.09-4.66-4.24.3-8.52.45-12.83.45-44.63 0-85.5-16.04-117.2-42.65-2.26-1.9-5.47-2.17-8.02-.68l-24.26 14.21 3.8 4.09c4.42 4.78 6.61 10.83 6.61 16.86 0 6.67-2.67 13.32-7.95 18.21-10.06 9.31-25.76 8.71-35.07-1.35l-25.95-28.02c-4.43-4.77-6.61-10.82-6.61-16.85 0-6.67 2.67-13.32 7.95-18.21 10.05-9.31 25.75-8.71 35.06 1.34l3.8 4.1 16.45-23.73c1.64-2.37 1.67-5.5.06-7.89-19.6-29.07-31.04-64.1-31.04-101.8 0-7.3.43-14.49 1.27-21.56.37-3.21-1.47-6.26-4.49-7.4l-25.83-9.68c-1.97 7.88-9.04 13.17-16.84 13.17-1.32 0-2.67-.15-4.01-.47-9.82 0-16.01-7.82-13.75-17.38l6.89-29.14c2.23-9.44 11.86-15.66 21.27-13.29 9.12 2.3 14.75 11.45 12.71 20.63l28.06 2.98c3.14.34 6.1-1.48 7.25-4.42 5.27-13.42 12.08-26.07 20.21-37.72 1.85-2.66 1.67-6.22-.47-8.65l-18.22-20.7c-6.31 6.98-17.04 7.67-24.19 1.55-7.37-6.31-7.85-17.76-1.44-25.04l17.4-19.73c3.44-3.9 8.23-5.89 13.05-5.89 4.08 0 8.18 1.43 11.48 4.34 7.15 6.3 7.88 17.16 1.69 24.36l23.39 15.86c2.61 1.77 6.07 1.58 8.47-.47 26.93-23.04 60.66-38.36 97.76-42.55 3.22-.36 5.77-2.86 6.18-6.07l3.48-27.36c-4.75-.06-9.04-2.02-12.14-5.16-3.11-3.14-5.02-7.45-5.02-12.21 0-9.6 7.78-17.39 17.38-17.39h26.76c4.8 0 9.15 1.95 12.29 5.09 3.14 3.15 5.09 7.5 5.09 12.3 0 9.52-7.66 17.25-17.15 17.37l3.56 28.02c.4 3.14 2.85 5.61 5.98 6.05 32.51 4.58 62.26 17.73 86.9 37.1 2.47 1.94 5.92 2.02 8.46.17l22.56-16.4c-3.95-4.17-5.92-9.51-5.92-14.85 0-5.53 2.11-11.06 6.32-15.27 8.39-8.39 21.94-8.21 30.11.4l24.15 25.49c3.9 4.12 5.84 9.38 5.84 14.64 0 5.64-2.23 11.27-6.65 15.46-8.53 8.09-22.01 7.73-30.1-.81l-.2-.21-17.59 21.64c-1.97 2.43-2.09 5.87-.29 8.43 20.85 29.65 33.08 65.78 33.08 104.77 0 2.7-.06 5.38-.17 8.04-.15 3.23 1.92 6.14 5.02 7.05l26.48 7.74c1.61-9.36 10.45-15.71 19.85-14.22z"
                                                        fill="#f79595"
                                                    />
                                                </g>
                                            </g>
                                            <circle
                                                cx="227.047"
                                                cy="352.532"
                                                fill="#f37c7c"
                                                r="40.574"
                                            />
                                            <circle
                                                cx="352.474"
                                                cy="233.87"
                                                fill="#f9c6c6"
                                                r="28.69"
                                            />
                                        </g>
                                        <g>
                                            <path
                                                d="m140.338 243.739c0-62.776 24.518-119.844 64.46-162.153-25.364 7.289-48.487 19.948-68.01 36.651-2.4 2.05-5.86 2.24-8.47.47l-23.39-15.86c6.19-7.2 5.46-18.06-1.69-24.36-3.3-2.91-7.4-4.34-11.48-4.34-4.82 0-9.61 1.99-13.05 5.89l-17.4 19.73c-6.41 7.28-5.93 18.73 1.44 25.04 7.15 6.12 17.88 5.43 24.19-1.55l18.22 20.7c2.14 2.43 2.32 5.99.47 8.65-8.13 11.65-14.94 24.3-20.21 37.72-1.15 2.94-4.11 4.76-7.25 4.42l-28.06-2.98c2.04-9.18-3.59-18.33-12.71-20.63-9.41-2.37-19.04 3.85-21.27 13.29l-6.89 29.14c-2.26 9.56 3.93 17.38 13.75 17.38 1.34.32 2.69.47 4.01.47 7.8 0 14.87-5.29 16.84-13.17l25.83 9.68c3.02 1.14 4.86 4.19 4.49 7.4-.84 7.07-1.27 14.26-1.27 21.56 0 37.7 11.44 72.73 31.04 101.8 1.61 2.39 1.58 5.52-.06 7.89l-16.45 23.73-3.8-4.1c-9.31-10.05-25.01-10.65-35.06-1.34-5.28 4.89-7.95 11.54-7.95 18.21 0 6.03 2.18 12.08 6.61 16.85l25.95 28.02c9.31 10.06 25.01 10.66 35.07 1.35 5.28-4.89 7.95-11.54 7.95-18.21 0-6.03-2.19-12.08-6.61-16.86l-3.8-4.09 24.26-14.21c2.55-1.49 5.76-1.22 8.02.68 28.868 24.233 65.364 39.702 105.356 42.271-62.218-42.549-103.076-114.074-103.076-195.139z"
                                                fill="#f37c7c"
                                            />
                                        </g>
                                        <circle
                                            cx="202.104"
                                            cy="212.354"
                                            fill="#f9c6c6"
                                            r="66.254"
                                        />
                                    </g>
                                    <g>
                                        <path d="m262.161 169.568c-2.406-3.372-7.089-4.155-10.461-1.749s-4.155 7.09-1.749 10.461c7.135 9.999 10.906 21.781 10.906 34.074 0 32.397-26.356 58.753-58.753 58.753s-58.754-26.356-58.754-58.753 26.357-58.754 58.754-58.754c9.205 0 18.032 2.082 26.239 6.187 3.704 1.854 8.21.353 10.063-3.352 1.853-3.704.353-8.209-3.352-10.063-10.309-5.157-21.395-7.772-32.95-7.772-40.668 0-73.754 33.086-73.754 73.754s33.086 73.753 73.754 73.753 73.753-33.085 73.753-73.753c.001-15.434-4.735-30.229-13.696-42.786z" />
                                        <path d="m227.047 319.458c13.77 0 26.236 8.672 31.021 21.581 1.439 3.884 5.755 5.866 9.639 4.425 3.884-1.44 5.865-5.755 4.425-9.639-6.955-18.761-25.074-31.367-45.085-31.367-26.508 0-48.074 21.566-48.074 48.074s21.566 48.074 48.074 48.074c18.384 0 34.889-10.24 43.074-26.723 1.842-3.71.328-8.211-3.382-10.053-3.71-1.84-8.211-.327-10.053 3.382-5.633 11.346-16.99 18.394-29.638 18.394-18.237 0-33.074-14.837-33.074-33.074s14.835-33.074 33.073-33.074z" />
                                        <path d="m388.664 233.871c0-19.956-16.235-36.19-36.19-36.19s-36.19 16.235-36.19 36.19 16.235 36.19 36.19 36.19 36.19-16.235 36.19-36.19zm-36.19 21.19c-11.685 0-21.19-9.506-21.19-21.19 0-11.685 9.506-21.19 21.19-21.19s21.19 9.506 21.19 21.19-9.506 21.19-21.19 21.19z" />
                                        <path d="m345.068 166.009c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-21.284c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5z" />
                                        <path d="m135.85 304.458c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h17.419c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z" />
                                        <path d="m297.733 290.458c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h14.051c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z" />
                                        <path d="m336.783 352.176c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h16.606c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z" />
                                        <path d="m506.135 265.737c-4.074-4.774-10.146-7.572-16.73-7.73-10.317-1.392-20.173 3.874-25.042 12.551l-19.401-5.67c.112-2.671.169-5.361.169-8.001 0-16.25-2.042-32.227-6.021-47.645l18.724-8.905c3.741-1.779 5.331-6.253 3.552-9.994-1.779-3.74-6.251-5.332-9.994-3.552l-16.665 7.925c-5.693-16.438-13.668-32.099-23.822-46.603l12.684-15.609c4.125 2.41 8.814 3.757 13.723 3.889 7.685.202 14.996-2.594 20.578-7.885 11.346-10.752 11.964-28.865 1.379-40.375-2.804-3.049-7.549-3.247-10.597-.444-3.049 2.804-3.248 7.548-.444 10.597 5.07 5.513 4.776 14.187-.656 19.335-2.674 2.534-6.177 3.869-9.858 3.777-3.683-.099-7.106-1.626-9.641-4.3l-.204-.215c-1.485-1.567-3.585-2.41-5.729-2.335-2.157.083-4.174 1.09-5.535 2.765l-17.583 21.639c-4.07 5.008-4.318 12.197-.604 17.48 20.747 29.511 31.713 64.247 31.713 100.454 0 2.544-.057 5.141-.17 7.715-.295 6.703 3.987 12.696 10.414 14.573l26.482 7.739c2.051.602 4.262.295 6.075-.836s3.057-2.983 3.42-5.089c.913-5.301 5.976-8.926 11.283-8.082.39.062.784.093 1.179.093 2.451 0 4.551.879 5.914 2.475 1.362 1.596 1.899 3.808 1.514 6.229l-4.607 28.944c-.415 2.607-1.82 4.896-3.957 6.446-2.136 1.55-4.746 2.174-7.356 1.76-5.308-.845-8.994-5.862-8.216-11.185.31-2.115-.298-4.261-1.671-5.9-1.372-1.639-3.378-2.614-5.514-2.681l-28.211-.887c-6.491-.18-12.388 4.001-14.305 10.226-4.407 14.312-10.667 28.031-18.606 40.777-3.607 5.79-2.747 13.182 2.093 17.976l15.663 15.511c3.667 3.633 9.521 3.793 13.327.361 4.003-3.612 12.322-4.101 16.183-.954.306.25.631.474.973.672 2.12 1.231 3.494 3.046 3.87 5.11s-.27 4.247-1.818 6.147l-18.521 22.715c-1.668 2.046-4.033 3.319-6.659 3.586-2.626.269-5.199-.504-7.245-2.173-3.763-3.068-4.728-10.698-1.948-15.402 1.309-2.214 1.671-4.81 1.021-7.307-.646-2.482-2.289-4.647-4.506-5.94l-19.6-11.422c-5.688-3.316-12.916-2.37-17.574 2.302-19.028 19.074-42.504 33.68-67.892 42.239-6.357 2.145-10.4 8.302-9.83 14.974l2.344 27.451c.182 2.129 1.264 4.081 2.974 5.362 1.71 1.283 3.887 1.774 5.981 1.352 5.292-1.063 10.372 2.211 11.579 7.458.566 2.462.09 5.057-1.34 7.306-1.518 2.386-3.943 4.088-6.655 4.671l-28.985 6.228c-2.366.508-4.491.122-5.987-1.086s-2.319-3.207-2.319-5.626c0-.53-.056-1.058-.167-1.576-1.129-5.255 2.219-10.503 7.463-11.7 2.084-.476 3.866-1.817 4.898-3.689 1.032-1.871 1.217-4.094.508-6.111l-9.373-26.659c-2.157-6.135-8.191-10.103-14.688-9.649-4.089.286-8.229.431-12.306.431-41.06 0-80.969-14.525-112.376-40.898-4.677-3.929-11.364-4.491-16.636-1.403l-24.254 14.203c-1.961 1.149-3.296 3.125-3.629 5.374s.372 4.527 1.917 6.195l3.795 4.098c3.143 3.393 4.775 7.805 4.599 12.426-.177 4.621-2.143 8.896-5.535 12.038-7.003 6.487-17.978 6.066-24.464-.937l-25.957-28.023c-6.486-7.003-6.066-17.978.937-24.464 7.002-6.487 17.977-6.066 24.464.936l3.794 4.098c1.545 1.667 3.764 2.541 6.03 2.385 2.268-.16 4.34-1.339 5.636-3.208l16.454-23.727c3.43-4.946 3.473-11.365.111-16.354-19.468-28.882-29.758-62.636-29.758-97.611 0-6.888.41-13.847 1.217-20.685.787-6.659-3.04-12.949-9.304-15.297l-25.824-9.68c-2.002-.75-4.229-.611-6.12.383-1.892.994-3.271 2.748-3.789 4.821-1.304 5.218-6.623 8.459-11.851 7.22-.566-.134-1.145-.201-1.727-.201-2.411 0-4.373-.802-5.526-2.259-1.152-1.457-1.481-3.551-.927-5.897l6.892-29.143c.638-2.697 2.388-5.085 4.802-6.552 2.278-1.384 4.881-1.806 7.335-1.189 5.222 1.315 8.393 6.467 7.218 11.73-.465 2.086-.019 4.271 1.229 6.007 1.247 1.736 3.174 2.858 5.3 3.083l28.062 2.979c6.477.689 12.652-3.072 15.031-9.14 4.999-12.749 11.518-24.919 19.374-36.172 3.846-5.508 3.438-12.868-.99-17.898l-18.228-20.699c-1.412-1.604-3.442-2.53-5.579-2.544-2.117.016-4.179.884-5.613 2.47-3.616 3.999-9.654 4.389-13.744.887-1.92-1.644-3.08-4.013-3.267-6.671-.198-2.82.74-5.631 2.574-7.712l17.396-19.737c1.745-1.98 4.157-3.162 6.792-3.328 2.634-.163 5.176.704 7.156 2.45 4.032 3.554 4.46 9.765.956 13.845-1.393 1.622-2.028 3.76-1.745 5.878.282 2.119 1.455 4.016 3.224 5.216l23.388 15.864c5.387 3.654 12.607 3.25 17.557-.983 26.62-22.765 59.032-36.872 93.733-40.793 6.676-.755 11.929-5.927 12.774-12.577l3.479-27.364c.27-2.12-.378-4.255-1.781-5.868-1.402-1.612-3.426-2.55-5.563-2.578-5.379-.068-9.755-4.497-9.755-9.872 0-5.449 4.434-9.882 9.883-9.882h26.76c5.449 0 9.882 4.434 9.882 9.883 0 5.375-4.376 9.803-9.755 9.872-2.137.027-4.161.965-5.563 2.578-1.403 1.613-2.05 3.748-1.781 5.868l3.563 28.024c.821 6.465 5.909 11.616 12.372 12.526 30.341 4.279 59.152 16.581 83.317 35.575 5.086 3.997 12.282 4.136 17.5.341l22.561-16.406c1.746-1.27 2.859-3.229 3.057-5.379s-.54-4.28-2.025-5.846c-5.291-5.583-5.175-14.215.264-19.654 2.616-2.616 6.078-4.013 9.736-3.981 3.662.049 7.08 1.555 9.625 4.241l2.379 2.51c2.851 3.006 7.597 3.133 10.603.284 3.006-2.85 3.133-7.597.284-10.603l-2.379-2.51c-5.354-5.649-12.567-8.817-20.312-8.921-7.758-.114-15.041 2.87-20.543 8.373-9.165 9.165-11.009 22.723-5.438 33.664l-16.325 11.871c-8.37-6.553-17.256-12.358-26.54-17.389l6.128-12.468c1.827-3.718.294-8.212-3.423-10.039-3.718-1.827-8.212-.295-10.039 3.423l-6.131 12.476c-15.834-7.025-32.602-11.897-49.839-14.363l-2.633-20.717c9.512-3.51 16.339-12.692 16.339-23.35-.002-13.722-11.164-24.884-24.884-24.884h-26.76c-13.72 0-24.883 11.163-24.883 24.883 0 10.658 6.827 19.839 16.339 23.35l-2.548 20.045c-19.257 2.215-37.858 7.324-55.3 15.094l-12.299-22.882c-1.961-3.649-6.509-5.015-10.157-3.056-3.648 1.961-5.017 6.509-3.056 10.157l12.054 22.428c-11.447 6.236-22.294 13.678-32.378 22.266l-17.291-11.728c3.656-9.457 1.283-20.649-6.712-27.696-4.986-4.396-11.387-6.583-18.018-6.167-6.633.418-12.707 3.394-17.102 8.38l-17.395 19.736c-4.472 5.073-6.762 11.882-6.285 18.682.471 6.696 3.48 12.739 8.475 17.015 8.111 6.944 19.255 7.82 28.072 2.975l13.322 15.131c-8.367 12.035-15.328 25.03-20.694 38.639l-20.697-2.197c-1.142-9.998-8.297-18.585-18.65-21.192-6.378-1.606-13.049-.57-18.786 2.916-5.823 3.538-10.055 9.34-11.611 15.92l-6.892 29.141c-1.608 6.802-.238 13.602 3.761 18.655 3.831 4.843 9.777 7.707 16.417 7.938 10.094 2.016 20.179-2.496 25.629-10.712l18.917 7.091c-.848 7.3-1.278 14.726-1.278 22.075 0 3.815.118 7.616.343 11.401l-21.232 2.889c-4.104.559-6.979 4.338-6.42 8.443.512 3.761 3.729 6.49 7.422 6.49.336 0 .678-.023 1.021-.069l20.688-2.815c1.703 12.275 4.592 24.304 8.631 35.945l-11.854 6.242c-3.665 1.93-5.071 6.466-3.142 10.131 1.343 2.55 3.947 4.007 6.643 4.007 1.178 0 2.374-.278 3.488-.865l10.385-5.469c4.479 10.188 9.868 20.016 16.15 29.373l-11.058 15.947c-12.278-10.542-30.837-10.428-42.989.827-13.07 12.107-13.854 32.591-1.748 45.662l25.957 28.023c12.107 13.07 32.59 13.855 45.662 1.748 6.332-5.865 10.001-13.844 10.331-22.469.282-7.378-1.907-14.472-6.218-20.333l16.072-9.412c12.458 10.421 26.145 19.12 40.666 25.974l-7.757 18.426c-1.607 3.817.185 8.215 4.003 9.822.95.4 1.936.589 2.906.589 2.927 0 5.709-1.725 6.916-4.592l7.739-18.384c10.227 3.874 20.786 6.867 31.557 8.934v6.541c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-4.27c6.853.754 13.767 1.137 20.711 1.137 4.298 0 8.66-.148 12.971-.441l6.929 19.708c-8.349 5.294-13.069 15.323-11.224 25.48.211 6.623 3.056 12.601 7.88 16.499 3.755 3.034 8.49 4.63 13.479 4.63 1.676 0 3.381-.18 5.086-.547l28.985-6.228c6.612-1.42 12.502-5.533 16.161-11.285 3.603-5.664 4.776-12.312 3.302-18.719-2.393-10.405-10.831-17.736-20.803-19.083l-1.713-20.059c12.706-4.313 24.957-10.036 36.503-16.968l10.217 13.938c1.469 2.004 3.747 3.066 6.055 3.066 1.539 0 3.092-.472 4.428-1.452 3.341-2.449 4.063-7.142 1.615-10.483l-9.746-13.295c8.543-6.087 16.6-12.868 24.029-20.285l15.147 8.827c-3.467 10.451-.501 23.09 7.623 29.713 5.151 4.201 11.629 6.139 18.242 5.471 6.612-.673 12.566-3.88 16.766-9.031l18.521-22.715c4.305-5.28 6.109-11.956 4.95-18.315-1.126-6.18-4.975-11.65-10.596-15.095-8.313-6.382-21.625-6.656-31.101-1.176l-12.232-12.114c8.459-13.643 15.149-28.307 19.893-43.6l20.845.655c1.971 9.946 9.965 18.131 20.491 19.807 6.567 1.046 13.142-.529 18.521-4.431 5.38-3.902 8.918-9.666 9.963-16.23l4.607-28.944c1.073-6.725-.72-13.404-4.916-18.321z" />
                                    </g>
                                </g>
                            </svg>
                        </Link>
                    </motion.div>
                    <button
                        class="navbar-toggler border-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="ms-auto my-auto d-flex justify-content-center">
                            <div class="navbar-nav pe-5">
                                <Link
                                    to="/"
                                    className="nav-link active h6 me-2"
                                >
                                    <div className="d-flex">
                                        {" "}
                                        <span
                                            class="material-icons pe-1"
                                            style={{ fontSize: "20px" }}
                                        >
                                            home
                                        </span>
                                        Home
                                    </div>
                                </Link>
                                <Link
                                    to="/dailyCase"
                                    className="nav-link active h6 me-2"
                                >
                                    <div className="d-flex">
                                        <span
                                            class="material-icons pe-1"
                                            style={{ fontSize: "22px" }}
                                        >
                                            trending_up
                                        </span>
                                        Daily Case
                                    </div>
                                </Link>
                                <Link
                                    to="/statewise"
                                    className="nav-link active h6 me-2"
                                >
                                    <div className="d-flex">
                                        <span
                                            class="material-icons pe-1"
                                            style={{ fontSize: "20px" }}
                                        >
                                            bar_chart
                                        </span>
                                        Statewise
                                    </div>
                                </Link>
                                <div
                                    className={
                                        "h5 btn me-4 " +
                                        (state.bgColor
                                            ? "btn-outline-dark"
                                            : "btn-outline-warning")
                                    }
                                    onClick={darkMode}
                                >
                                    {state.btnText ? "Midnight Dark" : "Light"}
                                </div>
                                {location === "/statewise" ? (
                                    <form class="d-flex">
                                        <input
                                            class="form-control me-2 h5"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                            onChange={searchState}
                                            defaultValue="Total"
                                        />
                                        <button
                                            className={
                                                "btn h5 " +
                                                (state.bgColor
                                                    ? "btn-outline-success"
                                                    : "btn-outline-warning")
                                            }
                                            type="submit"
                                            onClick={searchFunction}
                                        >
                                            Search
                                        </button>
                                    </form>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}