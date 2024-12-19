'use client';

import { todoType } from '@/types/todo-type';
import AddTodo from './add-todo';
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from '@/actions/todo-actions';

interface TodosProps {
  todos: todoType[];
}
export default function Todos({ todos }: TodosProps) {
  const handleAddTodo = async () => {
    const id = Math.floor(1000 + Math.random() * 9000);
    const text = `Todo ${id}`;
    await addTodo(id, text);
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
  };

  const handleEditTodo = async (id: number) => {
    await editTodo(id, 'todo edited');
  };

  const handleToggleTodo = async (id: number) => {
    await toggleTodo(id);
  };

  return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul className='space-y-2'>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border rounded ${
              todo.done ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <span>{todo.text}</span>
            <div className='flex space-x-2'>
              <button
                onClick={() => handleEditTodo(todo.id)}
                className='bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600'
              >
                Edit
              </button>
              <button
                onClick={() => handleToggleTodo(todo.id)}
                className='bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600'
              >
                {todo.done ? 'Undo' : 'Done'}
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
