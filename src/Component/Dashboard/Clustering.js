import React,{useRef,useEffect,Component, createRef} from 'react';
import Dashboard from '../Dashboard';

class HealthRisk extends Component{
    
    render(){
        return(<Dashboard
            id="Clustering"
            url = "https://public.tableau.com/views/UNOPSbeforeandduringCOVID-19/UNOPSDailyRiskFactorbyClusteringPM2_5AQI?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            title="Daily Risk Factor" />);
    }
}



export default HealthRisk;