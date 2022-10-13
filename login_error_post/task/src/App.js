import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import LoginUser from './Login/LoginUser';
import Theme from './Setting/Theme';
import Navbar from './style/Navbar';
import Home from './Home'
import NotFound from './Error/NotFound';
import Post from './Post/Post';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginUser/>}/>
            <Route path='/setting' element={<Theme/>}/>
            <Route path='/post' element={<Post/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
      {/* <LoginUser/> */}
    </div>
  );
}

export default App;
