import React,{useRef,useEffect,Component, createRef} from 'react';
import Dashboard from '../Dashboard';

class PM_Com extends Component{
    
    render(){
        return(<Dashboard
            id="PM Comparison"
            url = "https://public.tableau.com/shared/YHW98KSJS?:display_count=y&:origin=viz_share_link"
            title="Daily PM Comparison" />);
    }
}



export default PM_Com;