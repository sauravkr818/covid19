import {useState, useEffect} from 'react'
import './App.css';
import Covid from './Components/Covid'
import Statewise from './Components/Statewise'
import DailyCase from './Components/DailyCase'
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence} from "framer-motion";
import ReactGa from "react-ga";

function App() {
  const [data, setData] = useState([]);

  const [dataGraph, setDataGraph] = useState([]);

  const [dataStatewise, setdataStatewise] = useState([]);
  const [dailyWise, setdailyWise] = useState([]);
    
  const getCovidData = async () => {
    try {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        setData(actualData.statewise[0]);
        setDataGraph(actualData.cases_time_series);
        setdataStatewise(actualData.statewise);
        setdailyWise(actualData.cases_time_series);

    } catch (e) {
        console.log(e);
    }
};

// useEffect
useEffect(() => {
    getCovidData();
    ReactGa.initialize('UA-198105493-1');

    ReactGa.pageview(window.location.pathname + window.location.search);
    ReactGa.pageview("/");
    ReactGa.pageview("/dailycase");
    ReactGa.pageview("/statewise");

}, []);

//console.log(dataGraph);

  const location = useLocation();
  return (
    <div className="App">
    <AnimatePresence exitBeforeEnter>
    <Switch location = {location} key = {location.key}>
    <Route path="/dailyCase">
        <DailyCase getdata3={dailyWise}/>
        </Route>
    <Route path="/statewise">
        <Statewise getdata2={dataStatewise}/>
        </Route>
        <Route path="/">
        <Covid getdata1={data} graph={dataGraph}/>
        </Route>
      </Switch>
      </AnimatePresence>
    
    </div>
  );
}

export default App;
