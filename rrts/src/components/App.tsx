import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo(id: number): any;
}

function _App({ todos, fetchTodos, deleteTodo }: AppProps): JSX.Element {
  const [fetching, setFetching] = useState<boolean>(false);
  useEffect(() => {
    if (todos.length > 0) {
      setFetching(false);
    }
  }, [todos]);
  const handleFetch = (): void => {
    setFetching(true);
    fetchTodos();
  };
  const handleDelete = (id: number): void => {
    deleteTodo(id);
  };
  const renderList = (): JSX.Element[] => {
    return todos.map(
      (todo: Todo): JSX.Element => {
        return (
          <div key={todo.id} onClick={() => handleDelete(todo.id)}>
            {todo.title}
          </div>
        );
      }
    );
  };
  return (
    <div>
      <button onClick={handleFetch}>Fetch</button>
      {fetching ? "LOADING" : null}
      {renderList()}
    </div>
  );
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos
  };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
