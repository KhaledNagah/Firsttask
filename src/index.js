import React from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react'
class Changecolor extends Component{
    state={
        color:""
    }
    handle=e=>{
this.setState({color:e.target.value})
    }
    render(){
        return(
                <div>
                    <input type="text" placeholder="Enter the color here"  onChange={this.handle}></input>
                    <div style={{width:150,height:50,backgroundColor:this.state.color}}></div>
                    
                </div>
        )
    }
}
ReactDOM.render(<Changecolor/>,document.getElementById("root"))