import React, { useContext } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import { Login } from '../pages/Login';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {

  const {user} = useContext(AuthContext);
  const estaLogueado = user.logueado;

  return (
    <BrowserRouter>
        <div className='container'>
            <Routes>
                <Route path='/login' element= {!estaLogueado ? <Login/> : <Navigate to='/'/>}/>
                <Route path="*" element={ estaLogueado ? <DashboardRouter/> : <Navigate to='/login'/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
};
