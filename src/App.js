// import { ImportExport } from '@mui/icons-material';
import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';
import {auth} from "./firebase"
import { useEffect } from 'react';


function App() {
  const user = useSelector(selectUser)
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){

      }else{

      }
    })
  },[])

  return (
    <div className="app">
      {/*Header */}
      <Header />
      {!user ? (
        <Login/>
      ) : (
        <div className="app_body">
          {/*Sidebar*/}
          <Sidebar />
          {/*Feed*/}
          <Feed />
          {/*Widgets*/}
        </div>
      )}
    </div >
  );
}

export default App;
