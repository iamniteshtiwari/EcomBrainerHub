import { Route,Routes, BrowserRouter } from "react-router-dom";
import Login from "./containers/Login";
import Dashboard from "../src/containers/Dashboard"
import { Provider } from "react-redux";
import store from "./store"
import Cart from "./containers/Cart";
import ProtectedRoute from "./ProtectedRoute";
import { Fragment } from "react";



function App() {
  

  return (
    <Provider store={store}>

      <BrowserRouter>
      <Fragment>
      <Routes>
        <Route path="/" element={<Login />}/>
       
        <Route path="cart" element={<Cart/>}/>
          
       <Route element={<ProtectedRoute/>} >
          <Route path="dashboard" element={<Dashboard/>}/>

      </Route>
      </Routes>
      </Fragment>
    </BrowserRouter>
    </Provider>
      
     
    
  );
}

export default App;
