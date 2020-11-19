import React,{useRef,useEffect,Component, createRef} from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';

const {tableau} = window

class Dashboard extends Component{
    constructor(){
        super()
        this.ref=createRef()
    }
    option = {hideTabs: true, device: "desktop"}

    initVitz() {
        new tableau.Viz(this.ref.current,this.props.url, this.option)
    }

    componentDidMount(){
        this.initVitz()
    }
    
    render(){
        return(<div id={this.props.id} style={{width:"100%",height:"100%"}}>
            <p>{this.props.title}</p>
                <div ref={this.ref}></div>
            </div>);
    }
}



export default Dashboard;