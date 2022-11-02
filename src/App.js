import 'antd/dist/antd.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Layout from './layout/Layout';
import { getUserDetails } from './redux/users/userSlice';
import { BrowserRouter } from 'react-router-dom';
function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  return (
    <div className="">
      <BrowserRouter>
      
      <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
