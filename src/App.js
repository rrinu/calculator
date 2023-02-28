import './App.css';
import React from 'react';
import {Display} from './components/Display';
import {Button} from './components/Button';
import update from 'react-addons-update';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={input:[], result:''};
    this.evaluate=this.evaluate.bind(this);
  }
  
evaluate(value){
  const keys=['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.','(',')']
  if(keys.includes(value)){
    const arr = update(this.state.input, {$push: [value]});
    this.setState({input: arr});
    this.setState({result: ''});

  }
  else if(value==="="){
  const res=eval((this.state.input).join(""));
  this.setState({result:res});
  this.setState({input:[res]});
  }
  else if(value=='C'){
    this.setState({input: []});
    this.setState({result:0});
  }
  else{
    const l=(this.state.input).length;
    var newArray = update(this.state.input, {$splice: [[(l-1), 1]]});
    this.setState({input: newArray});
  }
}


  render(){
  return (
    <div className='App'>
      <h1>CALCULATOR</h1>
      <div className='for-width'>
       <Display Input={this.state.input}  Result={this.state.result}/>
       <Button Evaluate={this.evaluate}/>
       </div>
      </div>
  );
}
}

export default App;