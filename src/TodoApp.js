import React from 'react';
import {TodoList} from './TodoList';

export class TodoApp extends React.Component {

    constructor(props) {
      super(props);
      this.state = { items: [{text:"Learn React", priority:5, dueDate: new Date() },
        {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
        {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handlePriority = this.handlePriority.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <br></br>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <br></br>
            <input
              id="new-todo"
              onChange={this.handlePriority}
              value={this.state.priority}
            />
             <br></br>
            <button >
              Add #{this.state.items.length + 1}
            </button>
            <br></br>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }

    handlePriority(e) {
      this.setState({ priority: e.target.value });
    }
  
    handleSubmit(e) { 
      e.preventDefault();
      if (!this.state.text.length) {
        return;
      }
      console.log("vamos a crear");
      const newItem = {
        text: this.state.text,
        priority: this.state.priority,
        dueDate: Date.now(),
        id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }

 
