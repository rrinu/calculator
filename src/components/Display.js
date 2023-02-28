import React from "react";
import "./Display.css"

export class Display extends React.Component{
    render(){
        return(
            <div className="display">
            <p>{this.props.Input}</p>
            <p className="result">{this.props.Result}</p>
            </div>
        );
    }
}

