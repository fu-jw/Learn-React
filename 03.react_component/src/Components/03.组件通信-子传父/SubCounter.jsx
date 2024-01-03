import React, { Component } from 'react'

export class SubCounter extends Component {
  subCount(count) {
    // 2.子组件取出父组件传递过来的方法，并调用
    this.props.subClick(count)
  }

  render() {
    return (
      <div>
        <button onClick={e => this.subCount(-1)}>-1</button>
        <button onClick={e => this.subCount(-5)}>-5</button>
        <button onClick={e => this.subCount(-10)}>-10</button>
      </div>
    )
  }
}

export default SubCounter