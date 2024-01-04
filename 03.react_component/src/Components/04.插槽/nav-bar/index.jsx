import React, { Component } from 'react'
import "./style.css"

export class NavBar extends Component {
  render() {
    // 2.取出children中的内容
    const { children } = this.props
    console.log(children)

    return (
      <div className='nav-bar'>
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}

export default NavBar