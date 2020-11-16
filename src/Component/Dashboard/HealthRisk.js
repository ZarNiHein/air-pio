import React,{useRef,useEffect,Component, createRef} from 'react';

const {tableau} = window

class HealthRisk extends Component{
    constructor(){
        super()
        this.ref=createRef()
    }
    url = "https://public.tableau.com/views/RiskFactorBeforeCovid/Sheet3?:language=en&:display_count=y&:origin=viz_share_link";

    initVitz() {
        new tableau.Viz(this.ref.current,this.url)
    }

    componentDidMount(){
        this.initVitz()
    }
    
    render(){
        return(<div id="HealthRisk">
                <p>Hourly Health Risk</p>
                <div ref={this.ref}></div>
            </div>);
    }
}



export default HealthRisk;