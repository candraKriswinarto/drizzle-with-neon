import { getTodos } from '@/actions/todo-actions';
import Todos from '@/components/todos';

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className='p-4'>
      <Todos todos={todos} />
    </div>
  );
}
