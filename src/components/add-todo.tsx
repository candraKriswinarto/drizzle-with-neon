'use client';

interface AddTodoProps {
  handleAddTodo: () => void;
}
export default function AddTodo({ handleAddTodo }: AddTodoProps) {
  return (
    <div className='mb-4'>
      <button
        onClick={handleAddTodo}
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
      >
        Add Todo
      </button>
    </div>
  );
}
