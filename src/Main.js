import React from 'react';
import Todolist from './Todolist';
import { v4 as uuid } from 'uuid';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);      
    }
  
    render() {
      return (
        <div>
            <div className='contact-form'>
              <form onSubmit={this.handleSubmit}>
                <input
                  id="new-todo"
                  onChange={this.handleChange}
                  value={this.state.text}
                  placeholder="Create todo"
                />
                <button>
                  Add
                </button>
              </form>
            </div>
            <h3>TO DO LIST : </h3>
            <Todolist 
            items={this.state.items}
            // completed={this.state.completed}
            // handleCompleteClick={this.handleCompleteClick}             
            />
        </div>

      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: uuid()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }

  export default Main;