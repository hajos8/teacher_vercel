import React from "react";
import Teachers from "./Teachers.jsx"

export default class App extends React.Component{
  state = {
    teachers: []
  }

  render(){
    return (
      <div>
        {JSON.stringify(this.state.teachers)}
      </div>
    )
  }

  componentDidUpdate(){
    
  }
}