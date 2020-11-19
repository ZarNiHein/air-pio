import React,{useRef,useEffect,Component, createRef} from 'react';

const {tableau} = window

class Humidity extends Component{
    constructor(){
        super()
        this.ref=createRef()
    }
    url = "https://public.tableau.com/views/UNOPSbeforeandafterCOVID/UNOPSClusteringPM2_5AQI?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

    initVitz() {
        new tableau.Viz(this.ref.current,this.url)
    }

    componentDidMount(){
        this.initVitz()
    }
    
    render(){
        return(<div id="Humidity" style={{width:"100%",height:"100%"}}>
                <p>Humidity</p>
                <div   ref={this.ref}></div>
            </div>);
    }
}



export default Humidity;