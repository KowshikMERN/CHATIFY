import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Registration from './pages/Registration/Registration.jsx';
import Login from './pages/Login/Login.jsx';
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import firebaseConfig from './firebaseOthentication/firebaseConfig.jsx';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home.jsx';
import store from './store'
import { Provider } from 'react-redux'
import Message from './pages/Message/Message.jsx';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/msg",
    element: <Message></Message>,
  },
  {
    path: "/registration",
    element: <Registration/>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
