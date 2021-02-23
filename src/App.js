import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "routers";
import store from "redux/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
