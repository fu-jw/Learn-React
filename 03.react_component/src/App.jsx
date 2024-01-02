import React from "react"
import HelloWorld from "./Components/00.hello/HellWorld"
import HelloReact from "./Components/00.hello/HelloReact"

// 编写一个组件
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: "Hello React!"
    }
  }

  render() {
    const { message } = this.state

    return (
      <div>
        <h2>{message}</h2>
        <HelloWorld/>
        <HelloReact/>
      </div>
    )
  }
}

export default App
