// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment } from './reducer/counterSlice';
// import Card from './component/card';
// import Modal from './component/modal';

import Home from "./pages/home";

// import SideBar from './component/sidebar';
// import ToDoComponent from './component/ToDoComponent';
// import TodoByIdComponent from './component/todoByIdComponent';

function App() {
  // const darkMode = useSelector((state) => state.toggle.darkMode);

  // console.log('Dark Mode:', darkMode);
  // const dispatch = useDispatch();

  // const counter = useSelector((state) => state.counter.value);
  // const handleDecrement = () => {
  //   if (counter > 0) {
  //     dispatch(decrement());
  //   }
  // };
  return (
    // <div className={` ${darkMode ? 'dark' : 'light'}`}>
    //   <SideBar />
    //   <div className="flex flex-col items-center text-center mt-8">
    //     {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    //     <div className="flex">
    //       <button
    //         type="button"
    //         onClick={handleDecrement}
    //         disabled={counter === 0}
    //         className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    //       >
    //         Decrement
    //       </button>
    //       <button
    //         type="button"
    //         onClick={() => dispatch(increment())}
    //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    //       >
    //         Increment
    //       </button>
    //     </div>
    //     <ToDoComponent />
    //     <TodoByIdComponent/>
    //     <Card />
    //     <Modal />
    //   </div>
    // </div>

    <Home/>
  );
}

export default App;
