import React,{useRef,useEffect,Component, createRef} from 'react';

const {tableau} = window

class Beehive extends Component{
    constructor(){
        super()
        this.ref=createRef()
    }

    url = "https://public.tableau.com/views/NearACYDailyHealthRiskFactorDuringCOVID-19/DailyMaxRiskFactorDuringCOVID-19?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
    option = {device: "desktop" , hideTabs: true}

    initVitz() {
        new tableau.Viz(this.ref.current,this.url,this.option)
    }

    componentDidMount(){
        this.initVitz()
    }
    
    render(){
        console.log(tableau);
        return(<div id="Beehive" style={{width:"100%",height:"100%"}}>
                <p>Beehive (Max. Risk Factor)</p>
                <div   ref={this.ref}></div>
            </div>);
    }
}



export default Beehive;