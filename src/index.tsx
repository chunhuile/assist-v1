import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";
// 仅在开发环境中引入mockjs
if (process.env.NODE_ENV === "development") {
  require("@/mockjs/index");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    {/* <Prodiver > */}
    <App />
    {/* </Prodiver> */}
  </BrowserRouter>
);
