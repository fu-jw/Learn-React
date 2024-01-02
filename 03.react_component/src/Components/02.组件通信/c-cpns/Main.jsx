import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {
  constructor(){
    super()

    this.state = {
      banners: ["aaa", "bbb", "ccc"],
      productList: ["A", "B", "C"]
    }
  }

  render() {
    const {banners, productList} = this.state
    return (
      <div className="main">
        {/* 组件通信--父传子 */}
        <MainBanner banners = {banners} />
        <MainProductList productList={productList} />
      </div>
    )
  }
}

export default Main