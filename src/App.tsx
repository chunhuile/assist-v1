import { useRoutes } from 'react-router-dom';
import rootRouter from './router/index';
import './styles/global.scss'; 

function App() {
  const AppRoutes = () => useRoutes(rootRouter);//hook

  return (
    <>
      <AppRoutes></AppRoutes>
    </>
  );
}

export default App;
