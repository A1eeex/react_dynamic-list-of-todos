import React from 'react';
import cn from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  setCurrentTodo: (todo: Todo) => void;
  todos: Todo[];
  currentTodo: Todo | null;
};

export const TodoList: React.FC<Props> = ({
  setCurrentTodo,
  todos,
  currentTodo,
}) => {
  const handlerCLickInfoTodo = (todo: Todo) => {
    setCurrentTodo(todo);
  };

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.length > 0
          && todos.map((todo) => (
            <tr key={todo.id} data-cy="todo" className="">
              <td className="is-vcentered">{todo.id}</td>
              <td className="is-vcentered">
                {todo.completed && (
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                )}
              </td>
              <td className="is-vcentered is-expanded">
                <p
                  className={cn({
                    'has-text-success': todo.completed,
                    'has-text-danger': !todo.completed,
                  })}
                >
                  {todo.title}
                </p>
              </td>
              <td className="has-text-right is-vcentered">
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                  onClick={() => handlerCLickInfoTodo(todo)}
                >
                  <span className="icon">
                    <i
                      className={cn('far', {
                        'fa-eye-slash':
                          currentTodo && todo.id === currentTodo.id,
                        'fa-eye': !currentTodo,
                      })}
                    />
                  </span>
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};