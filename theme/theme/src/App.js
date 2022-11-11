import './App.css';
// import Theme from './Theme-Usecontext/Theme';
import Theme from './Features/Theme';
// import {toggleTheme} from './Features/ThemeSlice';
// import {useDispatch} from 'react-redux'



function App() {
  // const usedispatch = useDispatch()
  return (
    <div className="App">
     <Theme />
    {/* <button onClick={()=>{usedispatch(toggleTheme())}}> button </button> */}
    </div>
  );
  
}
export default App;