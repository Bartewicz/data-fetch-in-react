import React, { Component } from "react"

import User from "./User"

class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=5")
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  render() {
    return (
      <div>
        {this.state.data && this.state.data.results.map((user, i) => <User key={i} userData={user} />)}
      </div>
    )
  }
}

export default App
