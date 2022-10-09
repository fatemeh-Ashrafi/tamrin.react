import React from 'react'
import './App.css';
// import Parent, { CountContext } from './Usecontext/Parent';
// import {useContext} from 'react'
import Reducer from './Usereducer/Reducer';

function App() {

  // const count = useContext(CountContext)

  return (
    <div className='App'>
      {/* <Parent/>

      {count} */}
      <Reducer/>
    </div>
  )
}

export default App
















// import Logger from './Logger';
// import {Logger} from './Logger'
// function App() {
    // Logger(process.env.NODE_ENV)
  // console.log(Logger(item.targer.value));
  // return (
  //   <div className="App">
      // {/* <Logger/> */}
    // </div>
//   );
// }
// export default App;
