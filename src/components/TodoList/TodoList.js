import React from 'react';
import './ToDoList.css';
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDo from '../Todo/ToDo';
import TaskApiService from '../../services/task-api-service';
import StreakService from '../../services/streaks-service';
import StreaksService from '../../services/streaks-service';

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const nameA = a.date_created
  const nameB = b.date_created

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

export default class TodoList extends React.Component {

    state = {
      todos: [],
      todosToShow: 'all',
      toggleAllComplete: true,
      streaks: 0
    }

    /** Call getTasks before updating state  */

    componentDidMount() {
      TaskApiService.getTasks()
        .then(tasks => {
         
          this.setState({
           
            todos: tasks.sort(compare)
          })
        })
        StreakService.getStreak()
        .then(res => { 
          this.setState({
            streaks: res.streak
          })
        })
    }
   

    addTodo = (todo) => {

      this.setState({
        todos: [todo, ...this.state.todos].sort(compare) // adding a new todo to current state
      })
    }

    toggleComplete = (task) => {
      task.complete = !task.complete
      TaskApiService.updateTask(task.id, task)
        .then(() => {
          let total = 0 
          const todos = this.state.todos.map(todo => {
           
            
            // supposed to update
            if (todo.id === task.id) {
              todo.complete = task.complete
              
            }

             if (todo.complete) {
               total++
             }
              return todo

          })
          if (todos.length === total) {
            this.handleUpdateStreaks(this.state.streaks + 1)
            this.setState({
              streaks: this.state.streaks + 1,
              todos
            })
          } else if (todos.length - 1 === total && !task.complete) {
            this.handleUpdateStreaks(this.state.streaks - 1)
             this.setState({
                streaks: this.state.streaks - 1, 
                todos
              })
          } else  {
            this.setState({
              todos
            })
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

    handleUpdateStreaks = (count) => {
      StreakService.updateStreak(count) 
      .then (() => {
        this.setState({
          streaks: count
        })
      })
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
       <div>{StreaksService.getEmoji(this.state.streaks)}{this.state.streaks}</div>
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


