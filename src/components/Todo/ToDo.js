import React, { Component } from 'react'

export default class ToDo extends Component {
  
onDelete =(e) => {
  
  e.stopPropagation()
  this.props.onDelete()
}

  render() {
    return (
      <div onClick={this.props.toggleComplete} style={{
        textDecoration: this.props.todo.complete ? 'Line-through' : ''
      }}>
        {this.props.todo.name}
        <div>
          <button onClick={this.onDelete}>Delete</button>
        </div>
      </div>
    )
  }
}


