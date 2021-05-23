import {useState, useEffect} from 'react'
import './App.css';
import Covid from './Components/Covid'
import Statewise from './Components/Statewise'
import DailyCase from './Components/DailyCase'
import FM from './Components/FM'
import { Switch, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence} from "framer-motion";

function App() {
  const [data, setData] = useState([]);

  const [dataStatewise, setdataStatewise] = useState([]);
  const [dailyWise, setdailyWise] = useState([]);
    
  const getCovidData = async () => {
    try {
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualData = await res.json();
        setData(actualData.statewise[0]);
        setdataStatewise(actualData.statewise);
        setdailyWise(actualData.cases_time_series);

    } catch (e) {
        console.log(e);
    }
};

// useEffect
useEffect(() => {
    getCovidData();
}, []);

console.log(dataStatewise);

  const location = useLocation();
  return (
    <div className="App">
    <AnimatePresence exitBeforeEnter>
    <Switch location = {location} key = {location.key}>
    <Route path="/fm">
        <FM />
        </Route>
    <Route path="/dailyCase">
        <DailyCase getdata3={dailyWise}/>
        </Route>
    <Route path="/statewise">
        <Statewise getdata2={dataStatewise}/>
        </Route>
        <Route path="/">
        <Covid getdata1={data} />
        </Route>
      </Switch>
      </AnimatePresence>
    
    </div>
  );
}

export default App;
