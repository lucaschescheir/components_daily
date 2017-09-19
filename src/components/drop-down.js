import React,{ Component } from 'react';
import DropItem from './drop-items';

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
this.state={
    drop: 0
}
  }
handleHover(e){
    this.setState({
     drop: e
    })
    console.log(this.state.drop)
}
handleLeave(e){
    this.setState({
        drop: e
    })
}
  render() {

    return (
<div className="menu">
    <DropItem drop={ this.state.drop >  1} onLeave={()=>this.handleLeave(0)} onHover={()=>this.handleHover(2)}/>




</div>
          )
          }
          }
