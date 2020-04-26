import React, { Component } from 'react';
import TaskAPIService from '../../services/task-api-service';
import './ToDoForm.css';


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

    e.preventDefault()


    const {
      text,
      complete
    } = e.target


    /** We pass the forms values within the createTask function
     *  which makes a POST request within the Task API Service. 
     *  onSubmit is a prop passed from TodoList, which calls addTodo
     *  to update state. 
     */


    TaskAPIService.createTask(text.value, complete)
      .then((task) => {

        this.props.onSubmit({
          name: this.state.text,
          complete: false,
          id: task.id
        })
        this.setState({
          text: ''
        })
      })
  }

render() 

/**  Component renders the form input and button   */


{
return (
  <div>
    <div className="todoListContainter">
    <div className="todoList">
     <header>
       <h1>Things to do</h1>
        <form onSubmit={this.handleSubmit}>
      <input className="form-control"required name="text" value={this.state.text} onChange={this.handleChange} placeholder="What needs to be done?"/>
    <button className="taskButton">Add task</button>
    </form>
     </header>
     </div>
   
     
    </div>
    </div>
  )


}
  
}

export default ToDoForm;
