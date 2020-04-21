import React, { Component } from 'react'
import TaskAPIService from '../../services/task-api-service'

class ToDoForm extends Component {

state = {
  text: ''
}

handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
}
handleSubmit = (e) => {
  debugger
  e.preventDefault() 
 
  const {
    text,
    complete
  } = e.target

  TaskAPIService.createTask(text.value, complete)
    .then((task) => {
      debugger
      this.props.onSubmit({ 
        text: this.state.text,
        complete: false,
        id: task.id
      })
    })
}

render() {
return (
  <div>
    <form onSubmit={this.handleSubmit}>
    <input required name="text" value={this.state.text} onChange={this.handleChange} placeholder="enter task"/>
    <button>Add task</button>
    </form>
    </div>
  )


}
  
}

export default ToDoForm
