import React,{useRef,useEffect,Component, createRef} from 'react';

const {tableau} = window

class PM25AQI extends Component{
    constructor(){
        super()
        this.ref=createRef()
    }
    url = "https://public.tableau.com/views/Test1_16051741265980/Sheet2?:language=en&:display_count=y&:origin=viz_share_link";

    initVitz() {
        new tableau.Viz(this.ref.current,this.url)
    }

    componentDidMount(){
        this.initVitz()
    }
    
    render(){
        return(<div id="PM25AQI">
                <p>Air Quality Index</p>
                <div ref={this.ref}></div>
            </div>);
    }
}



export default PM25AQI;