import { useDispatch } from 'react-redux'
import { decrement, increment } from './reducer/counterSlice'
import Card from './component/card';

function App() {

  const dispatch = useDispatch()
  return (
    <div className='flex flex-col items-center text-center'>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button 
        type="button" onClick={() => dispatch(increment())}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Increment
      </button>
      <button
        type="button" onClick={() => dispatch(decrement())}
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Decrement
      </button>
      <Card/>
    </div>
  );
}

export default App;
