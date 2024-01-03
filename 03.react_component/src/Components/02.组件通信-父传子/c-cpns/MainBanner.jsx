import React, { Component } from 'react'

export class MainBanner extends Component {
  // 参数：props,接收父组件传递过来的数据
  constructor(props){
    super(props)
    this.state={}
  }

  render() {
    const {banners} = this.props

    return (
      <div className="nanners">
        <ul>
          {
            banners.map((item) => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
      
    )
  }
}

export default MainBanner