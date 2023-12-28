import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  state = {
    showAll: true
  };

  toggleShowAll = () => {
    this.setState((prevState) => ({
      showAll: !prevState.showAll,
    }));
  };

  render() {
    const { todos, toggleCompletion } = this.props;
    const filtered = todos.filter((todo) => !todo.completed || this.state.showAll);

    return (
      <div>
        {filtered.map((todo) => (
          <Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion} />
        ))}
        <button onClick={this.toggleShowAll}>
          {this.state.showAll ? 'Show Incomplete' : 'Show All'}
        </button>
      </div>
    );
  }
}
