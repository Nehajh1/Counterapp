import React from "react";
class Counter extends React.Component{
constructor(){
super();
this.state={counter:0};
}
increment = () => {
this.setState({ counter : this.state.counter + 1});
}
render(){
return(
<div>
<h1>Counter:{this.state.counter}</h1>
<button type="button" onClick={this.increment} >Increment</button>
</div>
)
}
}
export default Counter;
