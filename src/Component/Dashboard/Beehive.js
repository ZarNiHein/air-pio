import React, { Component } from 'react';
import Dashboard from "../Dashboard";

class Beehive extends Component{
    
    render(){
        return(<Dashboard 
            id="Beehive"
            url = "https://public.tableau.com/views/NearACYDailyHealthRiskFactorDuringCOVID-19/NearACYDailyMax_RiskFactorDuringCOVID-19"
            title="Beehive (Max. Risk Factor)" 
                />);
    }
}



export default Beehive;