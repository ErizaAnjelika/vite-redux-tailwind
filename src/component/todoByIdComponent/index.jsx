// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoById } from '../../reducer/todoDinamicSlice';
import Loading from '../loading';
import ErrorComponent from '../error';
import { useState } from 'react';

const TodoByIdComponent = () => {
  //dispatch untuk mendapatkan datanya
  const dispatch = useDispatch();

  //todo untuk datanya
  const todo = useSelector((state) => state.todosById.todo);

  //status ini untuk status loading
  const status = useSelector((state) => state.todosById.status);

  //state ini untuk error
  const error = useSelector((state) => state.todosById.error);

  // suapaya prosesnya langsung tanpa trigger dari button
//   useEffect(() => {
//     dispatch(fetchTodoById());
//   }, [dispatch]);
    

// state untuk simpan vlue input
const [input,setInput] = useState()

// trigerr untuk simpan input ke func. supaya fetch data
const handlefetchClick =()=>{
    //inout data value
    if (input) {
        //dispatch fetchTodo dgn params input
        dispatch(fetchTodoById(input))
    }
}

  // console log untuk cek, kodenya berjalan atau tidak
  console.log('todo byId', todo);
  console.log('status byId', status);
  console.log('error byId', error);

  // early return untuk loading
  if (status === 'loading') return <Loading />;

  // early return untuk error
  if (status === 'failed') return <ErrorComponent message={error} />;

  return (
    <div className="mt-8 mb-7 mx-auto">
        {/* input todo by id */}
        <div className="bg-gray-800 p-8 max-w-ws w-full rounded-lg mb-8">
            <input type="number" placeholder='enter todo id' className='bg-gray-500' onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={handlefetchClick} className='bg-blue-300 p-2 w-full mt-4 rounded-md'>{' '}Fetch Todo</button>
        </div>

      {status === 'succeeded' && (
        <div key={todo.id}>
          <h3 className="font-bold text-3xl text-blue-400">{todo.title}</h3>
          <p className={`font-semibold text-lg, ${todo.completed ? 'text-green-600' : 'text-red-500'}`}>Completed : {todo.completed ? 'YES' : 'NO'}</p>
        </div>
      )}
    </div>
  );
};

export default TodoByIdComponent;
