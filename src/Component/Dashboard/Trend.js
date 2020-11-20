import React,{useRef,useEffect,Component, createRef} from 'react';
import Dashboard from '../Dashboard';

class Trend extends Component{
    
    render(){
        return(<Dashboard
            id="Trend"
            url = "https://public.tableau.com/views/UNOPSbeforeandduringCOVID-19/UNOPSDailyRiskFactorbyClusteringPM2_5AQI?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            title="Trend of PM2.5 AQI" />);
    }
}



export default Trend;