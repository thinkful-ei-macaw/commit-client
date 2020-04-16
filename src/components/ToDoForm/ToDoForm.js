import React, { Component } from 'react'

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
e.preventDefault() // removing form behavior 
this.props.onSubmit({
  text: this.state.text, 
  complete: false,
  id: Date.now()
})
this.setState({
  text: ''
})
}


render() {
return (
  <div>
    <form onSubmit={this.handleSubmit}>
    <input required name="text" value={this.state.text} onChange={this.handleChange} placeholder="enter task"/>
    <button onClick={this.handleSubmit}></button>
    </form>
    </div>
  )


}
  
}

export default ToDoForm
