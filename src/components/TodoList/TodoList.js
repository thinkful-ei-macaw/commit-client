import React from 'react';
import './ToDoList.css';
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDo from '../Todo/ToDo';
import TaskApiService from '../../services/task-api-service';
import StreakService from '../../services/streaks-service';



export default class TodoList extends React.Component {

    state = {
      todos: [],
      todosToShow: 'all',
      toggleAllComplete: true,
      streaks: StreakService.getStreaks(),
    }

    /** Call getTasks before updating state  */

    componentDidMount() {
      TaskApiService.getTasks()
        .then(tasks => {
          this.setState({
            todos: tasks
          })
        })
    }

    addTodo = (todo) => {

      this.setState({
        todos: [todo, ...this.state.todos] // adding a new todo to current state
      })
    }

    toggleComplete = (task) => {
      TaskApiService.updateTask(task.id, task)
        .then(() => {
          let totalNotCompleted = 0
          const todos = this.state.todos.map(todo => {
            if (!todo.complete) {
              totalNotCompleted++
            }
            // supposed to update
            if (todo.id === task.id) {

              return {

                ...todo, // keep  everything the same
                complete: !todo.complete // change the value
              }

            } else {
              return todo;
            }
          })

          totalNotCompleted = todos.filter(todo => !todo.complete).length
          this.setState({

            todos,
            streaks: totalNotCompleted === 0 ? this.state.streaks + 1 : this.state.streaks
          })
          if (totalNotCompleted === 0) {
            StreakService.updateStreaks(this.state.streaks);
          }
        })
    }

    /** Handles which which toggle view to display to the user */

    updateToDoToShow = (s) => {
      this.setState({
        todosToShow: s,
      })
    }

    /** Handles deleting a todo. deleteTask calls a DELETE request
     *  within the TaskAPIService.
     */


    handleDeleteTodo = (id) => {
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      }, () => {

      })
      TaskApiService.deleteTask(id);

    }
 
render() {
  let todos = []
  if(this.state.todosToShow === 'all') {
    todos = this.state.todos;
  } else if (this.state.todosToShow === 'active') {
    todos=this.state.todos.filter(todo => !todo.complete)
  } else if (this.state.todosToShow === 'complete') {
    todos=this.state.todos.filter(todo => todo.complete)
  }

  return (
    <div className="toDoList">
     
      <ToDoForm onSubmit={this.addTodo}/>
      <div className="toggleControlsContainer">
        <div className="toggleButtons">
       <div><span role='img' aria-label='fire'>🔥</span>{this.state.streaks}</div>
      <div className="main-controls">
        <button className="all-button"onClick={() => this.updateToDoToShow('all')} style={{backgroundColor: this.state.todosToShow === 'all' ? '#eab9c9' : undefined }}>All</button>
         <button className="active" onClick={() => this.updateToDoToShow('active')} style={{backgroundColor: this.state.todosToShow === 'active' ? '#eab9c9' : undefined }}>Active</button>
          <button className="complete"onClick={() => this.updateToDoToShow('complete')} style={{backgroundColor: this.state.todosToShow === 'complete' ? '#eab9c9' : undefined }}>Complete</button>
          </div>
          </div>
          </div>
        <div className="scrollable">
      {todos.map(todo => (
      <ToDo key={todo.id} todo={todo} 
      toggleComplete={() => this.toggleComplete(todo)}
      onDelete={()=> this.handleDeleteTodo(todo.id)} />
      ))}
      </div>
      
      </div>
  )
} 


}


