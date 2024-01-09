import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {

    }
    // 2.方式二: 提前创建好ref对象, createRef()
    // 不涉及页面渲染，所以不放state中
    this.titleRef = createRef()
    
    this.titleEl = null
  }

  getNativeDOM() {
    // 0.原生DOM获取方式【非常不推荐】
    // 如果有多个，默认获取第一个
    console.log("原生：",document.querySelector('#fjw'))

    // 1.方式一: 在React元素上绑定一个ref字符串【不推荐】
    console.log("方式一：",this.refs.fjw)

    // 2.方式二: 提前创建好ref对象, createRef(), 将创建出来的对象绑定到元素【推荐】
    console.log("方式二：",this.titleRef.current)

    // 3.方式三: 传入一个回调函数, 在对应的元素被渲染之后, 回调函数被执行, 并且将元素传入
    console.log("方式三：",this.titleEl)
  }

  render() {
    return (
      <div>
        <h2 id='fjw'>Hello React</h2>

        {/* react 会将ref属性放到 refs 中，获取方式：this.refs.fjw */}
        <h2 ref="fjw">Hello World</h2>

        <h2 ref={this.titleRef}>你好, React</h2>

        <h2 ref={el => this.titleEl = el}>你好，世界</h2>
        <button onClick={e => this.getNativeDOM()}>获取DOM</button>
      </div>
    )
  }
}

export default App