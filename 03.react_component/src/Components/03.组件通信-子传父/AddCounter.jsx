import React, { Component } from 'react'

export class AddCounter extends Component {
  addCount(count) {
    // 2.子组件取出父组件传递过来的方法，并调用
    // const addClick =  this.props.addClick
    // addClick(count)
    // 可以简写为：
    this.props.addClick(count)
  }

  render() {

    return (
      <div>
        <button onClick={e => this.addCount(1)}>+1</button>
        <button onClick={e => this.addCount(5)}>+5</button>
        <button onClick={e => this.addCount(10)}>+10</button>
      </div>
    )
  }
}

export default AddCounter