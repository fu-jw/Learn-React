import React from "react"
// 生命周期演示，https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
class HelloWorld extends React.Component {
  // 1.构造方法: constructor
  constructor() {
    console.log("HelloWorld constructor")
    super()

    this.state = {
      message: "Hello World"
    }
  }

  changeText() {
    this.setState({ message: "Hello React" })
  }

  // 2.执行render函数
  render() {
    console.log("HelloWorld render")
    const { message } = this.state

    return (
      <div>
        <h2>{message}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
      </div>
    )
  }

  // 3.组件被渲染到DOM: 被挂载到DOM
  componentDidMount() {
    console.log("HelloWorld componentDidMount")
  }

  // 4.组件的DOM被更新完成： DOM发生更新
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("HelloWorld componentDidUpdate:", prevProps, prevState, snapshot)
  }

  // 5.组件从DOM中卸载掉： 从DOM移除掉
  componentWillUnmount() {
    console.log("HelloWorld componentWillUnmount")
  }


  // 不常用的生命周期补充
  // 决定组件是否重新渲染，返回值为true/false。默认返回true
  shouldComponentUpdate() {
    return true
  }
  // 组件将要被更新, 在render函数之前执行, 返回值会作为render函数的第三个参数, 一般用于保存滚动位置, 以便在componentDidUpdate中使用, 也可以返回null, 表示不保存任何值 
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate")
    // 这里返回的值会作为componentDidUpdate的第三个参数
    return {
      scrollPosition: 1000
    }
  }
}

export default HelloWorld
