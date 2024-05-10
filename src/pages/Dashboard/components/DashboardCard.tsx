import React, { Component } from 'react'

interface DashboardCardProps {
    label: string; 
    text:string;
    style:object
  }

export default class DashboardCard extends Component<DashboardCardProps> {

    constructor(props: DashboardCardProps) {
        super(props);
        // 在构造函数中初始化状态
        this.state = {
          label: props.label,
          text:props.text,
          style:props.style
        };
      }

  render() {
    return (
      <div style={this.props.style}>
          <span className='scope-span-style scope-span-color'>{this.props.label}</span>
          <span  className='scope-span-color'>{this.props.text}</span>
      </div>
    )
  }
}
