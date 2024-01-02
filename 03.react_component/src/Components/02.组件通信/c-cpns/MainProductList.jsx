import React, { Component } from 'react'

export class MainProductList extends Component {
  render() {
    // 解构出父组件的数据，名称应与父组件一致
    const {productList} = this.props

    return (
      <div className="productList">
        <ul>
          {
            productList.map(item=>{
              return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default MainProductList