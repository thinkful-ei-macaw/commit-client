import React from 'react'
import './ToDoList.css'
import ToDoForm from '../ToDoForm/ToDoForm'
import ToDo from '../Todo/ToDo'


export default class TodoList extends React.Component {

  state = {
    todos: [],
    todosToShow:'all',
    toggleAllComplete: true,
    streaks: 0
  }

addTodo = (todo) => {
  this.setState({
  todos: [todo, ...this.state.todos] // adding todo to current state
  })
}

toggleComplete = (id) => {
  let totalNotCompleted = 0
  const todos = this.state.todos.map(todo => {
      if(!todo.complete) {
        totalNotCompleted++
      }
      // supposed to update
      if (todo.id === id) {

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
}

updateToDoToShow = (s) => {
  this.setState({
    todosToShow: s
  })
}

handleDeleteTodo = (id) => {
  // console.log(id, this.state.todos.filter(todo => todo.id !== id))
  console.log(this.state.todos)
  this.setState({
    todos: this.state.todos.filter(todo => todo.id !== id )
  }, () => {
    console.log(this.state.todos)
   })
  
}

removeComplete = () => {
  this.setState({
    todos: this.state.todos.filter(todo => !todo.complete)
  })
}
 
render() {
// console.log(this.state.todos)
  let todos = []
  if(this.state.todosToShow === 'all') {
    todos = this.state.todos;
  } else if (this.state.todosToShow === 'active') {
    todos=this.state.todos.filter(todo => !todo.complete)
  } else if (this.state.todosToShow === 'complete') {
    todos=this.state.todos.filter(todo => todo.complete)
  }

  
// console.log(todos)

  return (
    <div>
      {this.state.streaks}
      <ToDoForm onSubmit={this.addTodo}/>
      {todos.map(todo => (
      <ToDo key={todo.id} todo={todo} 
      toggleComplete={() => this.toggleComplete(todo.id)}
      onDelete={()=> this.handleDeleteTodo(todo.id)} />
      ))}
      <div>active todos: {this.state.todos.filter(todo => !todo.complete).length} </div>
      <div>
        <button onClick={() => this.updateToDoToShow('all')}>all</button>
         <button onClick={() => this.updateToDoToShow('active')}>active</button>
          <button onClick={() => this.updateToDoToShow('complete')}>complete</button>
          </div>
          {this.state.todos.some(todo => todo.complete) ? (
            <div>
              <button onClick={() => this.removeComplete()}>
                Remove all
              </button>
            
           </div>
          ) : null}
        <div>
          <button onClick={() => this.setState({
            todos:this.state.todos.map(todo => ({
              ...todo,
              complete: this.state.toggleAllComplete
            })),
            toggleAllComplete: !this.state.toggleAllComplete

           })}>
              Toggle all: {`${this.state.toggleAllComplete}`}</button>
        </div>
      </div>
  )
} 


}


