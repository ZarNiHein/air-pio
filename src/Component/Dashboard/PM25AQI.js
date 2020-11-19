import React,{useRef,useEffect,Component, createRef} from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';

const {tableau} = window

class PM25AQI extends Component{
    constructor(){
        super()
        this.ref=createRef()
    }
    url = "https://public.tableau.com/views/BeforeCovidYangon-HO/PMcomparison?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    option = {hideTabs: true, device: "desktop"}

    initVitz() {
        new tableau.Viz(this.ref.current,this.url, this.option)
    }

    componentDidMount(){
        this.initVitz()
    }
    
    render(){
        return(<div id="PM25AQI" style={{width:"100%",height:"100%"}}>
            <p>Air Quality Index</p>
                <div ref={this.ref}></div>
            </div>);
    }
}



export default PM25AQI;