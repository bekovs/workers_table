import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import WorkersList from './components/WorkersList';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/workers' element={<WorkersList />} />
    </Routes>
  );
};

export default MainRoutes;