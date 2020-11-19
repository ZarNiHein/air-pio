import React,{useRef,useEffect,Component, createRef} from 'react';
import Dashboard from '../Dashboard';

class PM_Com extends Component{
    
    render(){
        return(<Dashboard
            id="PM Comparison"
            url = "https://public.tableau.com/views/BeforeCovidYangon-HO/PMcomparison2?"
            title="Daily PM Comparison" />);
    }
}



export default PM_Com;