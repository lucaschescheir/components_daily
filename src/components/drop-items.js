import React, { Component } from 'react';

class DropItem extends Component {
    render(){
        if(this.props.drop){
            return(
                <div  onMouseLeave={()=>this.props.onLeave()}>
                    <p className="drop_down_title">Menu</p>
                    <ul className="drop_down"
                        onMouseOver={()=> this.props.onHover()}>
                        <li className="list" onMouseOver={()=> this.props.onHover()}>File</li>
                        <li className="list" onMouseOver={()=> this.props.onHover()}>Save</li>
                        <li className="list" onMouseOver={()=> this.props.onHover()}>Exit</li>
                    </ul>
                </div>
            )
        } else {
            return(
<div><p className="drop_down_title" onMouseOver={()=> this.props.onHover()}>Menu</p></div>
            )
        }

    }
}
export default DropItem;
