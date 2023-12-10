import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../../reducer/todoSlice';
import Loading from '../loading';
import ErrorComponent from '../error';

const ToDoComponent = () => {
  //dispatch untuk mendapatkan datanya
  const dispatch = useDispatch();

  //todo untuk datanya
  const todo = useSelector((state) => state.todos.todo);

  //status ini untuk status loading
  const status = useSelector((state) => state.todos.status);

  //state ini untuk error
  const error = useSelector((state) => state.todos.error);

  // suapaya prosesnya langsung tanpa trigger dari button
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  // console log untuk cek, kodenya berjalan atau tidak
//   console.log('todo', todo);
//   console.log('status', status);
//   console.log('error', error);

  // early return untuk loading
  if (status === 'loading') return <Loading />;

  // early return untuk error
  if (status === 'failed') return <ErrorComponent message={error} />;

  return (
    <div className="mt-8 mb-7 mx-auto">
        
      {status === 'succeeded' && (
        <div key={todo.id}>
          <h3 className="font-bold text-3xl text-blue-400">{todo.title}</h3>
          <p className={`font-semibold text-lg, ${todo.completed ? 'text-green-600' : 'text-red-500'}`}>Completed : {todo.completed ? 'YES' : 'NO'}</p>
        </div>
      )}
    </div>
  );
};

export default ToDoComponent;
