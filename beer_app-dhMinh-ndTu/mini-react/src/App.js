import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './components/UserContext'

import Register from './components/Register';

import Login from './components/Login';

import Products from './components/Products';

import ProductDetails from './components/ProductDetails';

import AddProduct from './components/AddProduct';

import ProcessProduct from './components/ProcessProduct';

import CartProduct from './components/CartProduct';


import PrivateRoute from './components/PrivateRoute';

import PageErr from './components/PageErr';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  // Link,
  // Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";
import { useEffect, useState, useContext } from 'react';

function App() {
  const [user, setUser] = useState("")


  let history = useHistory()
  const [updateState, setUpdateState] = useState("")
  const [flagRender, setFlagRender] = useState(false)
  const handleUpdateState = (dataState) => {
    alert(dataState)
    setUser(dataState)
    setUpdateState('change...')
    setFlagRender(true)
  }

  console.log(user)
  const [nombres, setNombres] = useState("");
  const handleClick = (data) => {
    setNombres(data);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/products/:slug"
            render={({ match }, ...rest) => {
              return <ProductDetails rest={rest} match={match} />;
            }}
          />
          {/* <Route path='/addpro' >
            <AddProduct />
          </Route> */}
          {/* <Route path='/processpro' >
            <ProcessProduct />
          </Route>
          <Route path='/cartproduct' >
            <CartProduct />
          </Route>

           */}
          <Route path='/register' >
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>

          <PrivateRoute exact path="/">
            <Products />
          </PrivateRoute>

          <PrivateRoute exact path="/products">
            <Products />
          </PrivateRoute>

          <PrivateRoute path="/addpro">
            <AddProduct />
          </PrivateRoute>

          <PrivateRoute updateState={updateState} path="/cartproduct">
            <CartProduct nombres={nombres} updateState={updateState} />
          </PrivateRoute>

          <PrivateRoute user={user} path="/processpro">
            <ProcessProduct handleUpdateState={handleUpdateState} handleClick={handleClick} updateState={updateState} />
          </PrivateRoute>

          <Route path="/:slug">
            <PageErr />
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;







