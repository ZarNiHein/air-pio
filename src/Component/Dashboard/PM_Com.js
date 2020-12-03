import React,{useRef,useEffect,Component, createRef} from 'react';
import Dashboard from '../Dashboard';

class PM_Com extends Component{
    
    render(){
        return(<Dashboard
            id="PM Comparison"
            url = "https://public.tableau.com/shared/22TM7BZPF?:display_count=y&:origin=viz_share_link"
            title="Daily PM Comparison" />);
    }
}



export default PM_Com;