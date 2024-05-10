import React, { Component } from 'react'
import Icon from './icon'

interface childNumberCard {
    label:string;
    number:string|number;
    style:object;
    iconStyle:object|{},
    iconType:string,
    iconColor:object
}

export default class DashboardNumberCard extends Component<childNumberCard> {
  render() {
    return (
      <div style={this.props.style}>
        <div style={this.props.iconStyle}>
            <Icon icon={this.props.iconType} style={this.props.iconColor} />
       
        </div>
       <div style={{marginLeft:"10px"}}>
            <span style={{ display:"block",fontSize:"26px" }}>¥{this.props.number}</span>
            <span  style={{ display:"block",marginTop:"10px" }}>{this.props.label}</span>
       </div>
      </div>
    )
  }
}
