import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Layout from './layout/Layout';
import { getUserDetails } from './redux/users/userSlice';

function App() {

  const dispatch = useDispatch();
    
  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  return (
    <div className="">
      <Layout />
    </div>
  );
}

export default App;
