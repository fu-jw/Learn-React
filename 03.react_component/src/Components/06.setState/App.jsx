import React, { Component } from 'react'
import { flushSync } from 'react-dom'

function Hello(props) {
  return <h2>{props.message}</h2>
}

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Hello World",
      counter: 0
    }
  }

  componentDidMount() {
    // 1.网络请求一: banners

    // 2.网络请求二: recommends

    // 3.网络请求三: productlist
  }

  changeText() {
    // 异步操作
    // this.setState({ message: "Hello React" })
    // console.log(this.state.message)//打印：Hello World

    // setTimeout 是宏任务，由浏览器控制
    setTimeout(() => {
      // 在react18之前, setTimeout中setState操作, 是同步操作
      // 在react18之后, setTimeout中setState异步操作(批处理)
      // this.setState({ message: "Hello React" })
      // console.log(this.state.message)// 18之前打印：Hello React 18之后打印：Hello World

      // 18之后希望同步更新之后再执行后面的代码，可以使用flushSync
      flushSync(() => {
        // 所有需要同步更新的代码
        this.setState({ message: "Hello React" })
      })
      console.log(this.state.message)// 打印：Hello React
    }, 0);
  }

  increment() {
  }

  render() {
    const { message, counter } = this.state
    console.log("render被执行")

    return (
      <div>
        <h2>message: {message}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <h2>当前计数: {counter}</h2>
        <button onClick={e => this.increment()}>counter+1</button>

        <Hello message={message}/>
      </div>
    )
  }
}

export default App