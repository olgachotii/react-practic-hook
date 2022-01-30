import React from 'react';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => {
  return (
    <>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      {/* <button type="button" className="TodoList__btn" onClick={onDelete}>
        Удалить
      </button> */}
      <IconButton onClick={onDelete} className="TodoList__btn">
        <DeleteIcon width="32" height="32" fill="#fff" />
      </IconButton>
    </>
  );
};
export default Todo;
