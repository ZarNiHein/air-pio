import React, { Component } from 'react';
import Dashboard from "../Dashboard";

class PM25AQI extends Component{
    
    render(){
        return(<Dashboard
            id="PM25AQI"
            url = "https://public.tableau.com/views/BeforeCovidYangon-HO/AQIMessages_1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
            title="Air Quality Index" 
                />);
    }
}

export default PM25AQI;