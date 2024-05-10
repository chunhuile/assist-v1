import React, { Component } from 'react'
import ProductTable from './commponents/ProductTable'




export default class ProductManagement extends Component {


  render() {
    return (
      <div>
        <div style={{marginTop:"20px"}}>
          <span style={{margin:"16px "}}>今日数据</span>
          <ProductTable />
        </div>


      </div>
    )
  }
}
