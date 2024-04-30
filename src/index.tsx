import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



// 判断配置文件里，mock是否要开启
// if(process.env.NODE_ENV === 'development' && process.env.REACT_APP_MOCK = true){
//   // import "."
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
