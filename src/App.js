// import { ImportExport } from '@mui/icons-material';
import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from "./firebase"
import { useEffect } from 'react';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch (login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))

      } else {
        //user is logged out
        dispatch(logout());

      }
    })
    
  }, [dispatch])

  return (
    <div className="app">
      {/*Header */}
      <Header />
      {!user ? (
        <Login />
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
