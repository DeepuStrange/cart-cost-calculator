import ReactDom from 'react-dom/client';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import rootReducer from "./Slice/EcommerceSlice";
const root = ReactDom.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer:rootReducer,
})
 root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
)