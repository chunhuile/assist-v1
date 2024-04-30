import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import rootRouter from './router/index';


function App() {
  const AppRoutes = () => useRoutes(rootRouter);//hook

  return (
    <>
      <AppRoutes></AppRoutes>
    </>
  );
}

export default App;
