import './App.css';
// import Navbar from './Component/Navber';
import Main from './Component/Main';
import Login from './Component/Login';
import RegistItem from './Component/RegistItem'
import MyPage from './Component/MyPage/MyPage'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registItem' element={<RegistItem />} />
        <Route path='/myPage' element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
