import React from "react";
import './Button.css';
import { FaBackspace } from "react-icons/fa";

export class Button extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(e){

        this.props.Evaluate(e.target.value);
      }
    render(){
        return(
            <div className="Buttons">
                <button onClick={this.handleClick} className="Button" name='AC' type="submit" value="C">AC</button>
                <button onClick={this.handleClick} className="Button-backspace" name='X' type="submit" value="X"><FaBackspace /></button>
                <button onClick={this.handleClick} className="Button" name='(' type="submit" value="(">(</button>
                <button onClick={this.handleClick} className="Button" name=')' type="submit" value=")">)</button>

                <button onClick={this.handleClick} className="Button" name='9' type="submit" value="9">9</button>
                <button onClick={this.handleClick} className="Button" name='8' type="submit" value="8">8</button>
                <button onClick={this.handleClick} className="Button" name='7' type="submit" value="7">7</button>
                <button onClick={this.handleClick} className="Button" name='+' type="submit" value="+">+</button>

                <button onClick={this.handleClick} className="Button" name='6' type="submit" value="6">6</button>
                <button onClick={this.handleClick} className="Button" name='5' type="submit" value="5">5</button>
                <button onClick={this.handleClick} className="Button" name='4' type="submit" value="4">4</button>
                <button onClick={this.handleClick} className="Button" name='-' type="submit" value="-">-</button>

                <button onClick={this.handleClick} className="Button" name='3' type="submit" value="3">3</button>
                <button onClick={this.handleClick} className="Button" name='2' type="submit" value="2">2</button>
                <button onClick={this.handleClick} className="Button" name='1' type="submit" value="1">1</button>
                <button onClick={this.handleClick} className="Button" name='*' type="submit" value="*">x</button>

                <button onClick={this.handleClick} className="Button" name='.' type="submit" value=".">.</button>
                <button onClick={this.handleClick} className="Button" name='0' type="submit" value="0">0</button>
                <button onClick={this.handleClick} className="Button" name='=' type="submit" value="=">=</button>
                <button onClick={this.handleClick} className="Button" name='/' type="submit" value="/">/</button>
            </div>
        );
    }
}

